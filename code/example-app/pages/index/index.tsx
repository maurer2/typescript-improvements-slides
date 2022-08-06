import {
  ReactElement, useReducer, useEffect, useState, Reducer,
} from 'react';

import ResultsList from '../../components/results-list';
import StatisticsToggle from '../../components/statistics-toggle';
import { Customer } from '../api/customer.types';

import { TOGGLE_ACTION_TYPE, type PaymentCategoriesActions, ActivePaymentState } from './types';
import { paymentCategories } from '../../types/payment';

import fetchData from '../../services/fetch-data';

function Home(): ReactElement {
  const listFormatter = new Intl.ListFormat('en', { style: 'long' });

  const [activePaymentCategories, setActivePaymentCategories] = useReducer<
  Reducer<ActivePaymentState, PaymentCategoriesActions>
  >((state, action) => {
    switch (action.type) {
      case TOGGLE_ACTION_TYPE: {
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
  }, []);
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    // https://beta.reactjs.org/learn/synchronizing-with-effects#fetching-data
    let ignore = false;

    async function startFetching() {
      const customersFetched = await fetchData<Customer[]>('/api/customers');
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
    <div className="h-screen grid bg-pink-900">
      <div className="container mx-auto bg-white p-4">
        <header className="mb-4">
          <h1 className="text-2xl">Payment type filters</h1>
          <span>{listFormatter.format(activePaymentCategories) || 'No categories selected'}</span>
        </header>
        <nav className="mb-4">
          <ul className="flex flex-row gap-4">
            {paymentCategories.map((paymentCategory) => (
              <li
                className="basis-1/3 h-full"
                key={paymentCategory}
              >
                <StatisticsToggle
                  count={0}
                  category={paymentCategory}
                  value={paymentCategory}
                  isActive={activePaymentCategories.includes(paymentCategory)}
                  onChange={(payload) => setActivePaymentCategories({
                    type: TOGGLE_ACTION_TYPE,
                    payload,
                  })}
                />
              </li>
            ))}
          </ul>
        </nav>
        <main className="mb-4">
          <ResultsList customers={customers} />
        </main>
      </div>
    </div>
  );
}

export default Home;
