import {
  ReactElement, useReducer, useEffect, useState, useMemo, useRef,
} from 'react';

import ResultsList from '../../components/results-list';
import StatisticsToggle from '../../components/statistics-toggle';

import {
  TOGGLE_FILTER,
  type PaymentCategoriesActions,
  type ActivePaymentFiltersState,
  type PaymentCategoryCounts,
} from './types';
import type { Customer } from '../../types/customer';
import { paymentCategories, paymentCategoryNames } from '../../types/payment';

import fetchData from '../../services/fetch-data';

function Home(): ReactElement {
  const [activePaymentCategoriesFilters, setActivePaymentCategoriesFilters] = useReducer(
    (state: ActivePaymentFiltersState, action: PaymentCategoriesActions) => {
      switch (action.type) {
        case TOGGLE_FILTER: {
          const { payload } = action;

          const positionOfElementToToggle: number = state.findIndex(
            (currentStateEntry) => currentStateEntry === payload,
          );
          if (positionOfElementToToggle > -1) {
            const newState = [...state];
            newState.splice(positionOfElementToToggle, 1);

            return newState;
          }

          return [...state, payload];
        }
        default: {
          return [];
        }
      }
    },
    [],
  );
  const [customers, setCustomers] = useState<Customer[]>([]);
  const paymentCategoryCount: PaymentCategoryCounts = useMemo(() => {
    const count: PaymentCategoryCounts = customers.reduce(
      (totalCount, currentCustomer) => {
        const { regularPayments, missedPayments, defaultedPayments } = currentCustomer;

        const newCount: PaymentCategoryCounts = {
          regular: totalCount.regular + regularPayments,
          missed: totalCount.missed + missedPayments,
          defaulted: totalCount.defaulted + defaultedPayments,
        };

        return newCount;
      },
      {
        regular: 0,
        missed: 0,
        defaulted: 0,
      },
    );

    return count;
  }, [customers]);
  const listFormatter = useRef(new Intl.ListFormat('en', { style: 'long' }));

  useEffect(() => {
    // https://beta.reactjs.org/learn/synchronizing-with-effects#fetching-data
    let ignore = false;

    async function startFetching() {
      const customersFetched: Customer[] = await fetchData<Customer[]>('/api/customers');
      if (!ignore) {
        setCustomers(customersFetched);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [setCustomers]);

  return (
    <div
      className="grid min-h-screen bg-pink-900"
      data-testid="page-wrapper"
    >
      <div className="mx-auto max-w-4xl p-4 bg-white">
        <header
          className="mb-0"
          data-testid="page-header"
        >
          <h1 className="text-3xl" data-testid="page-title">Shoofa</h1>
          <span>
            {listFormatter.current.format(activePaymentCategoriesFilters) || 'No filters'}
            {' '}
            enabled
          </span>
        </header>
        {!customers.length ? (
          <div data-testid="page-loading-indicator">Loading</div>
        ) : (
          <>
            <nav
              className="pt-4 pb-4 sticky top-0 bg-white"
              data-testid="page-nav"
            >
              <ul className="flex flex-row gap-4">
                {paymentCategories.map((paymentCategory) => (
                  <li
                    className="basis-1/3 h-full"
                    key={paymentCategory}
                  >
                    <StatisticsToggle
                      count={paymentCategoryCount[paymentCategory]}
                      category={paymentCategoryNames[paymentCategory]}
                      value={paymentCategory}
                      isActive={activePaymentCategoriesFilters.includes(paymentCategory)}
                      onChange={(payload) => setActivePaymentCategoriesFilters({
                        type: TOGGLE_FILTER,
                        payload,
                      })}
                    />
                  </li>
                ))}
              </ul>
            </nav>
            <main
              className="mb-4"
              data-testid="page-content"
            >
              <ResultsList
                customers={customers}
                activePaymentCategoriesFilters={activePaymentCategoriesFilters}
              />
            </main>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
