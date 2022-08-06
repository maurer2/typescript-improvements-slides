import {
  ReactElement, useReducer, useEffect, useState, useCallback, Reducer,
} from 'react';

import ResultsList from '../../components/results-list';
import StatisticsToggle from '../../components/statistics-toggle';
import { Customer } from '../api/customer.types';

import { TOGGLE_ACTION_TYPE, type PaymentCategoriesActions, ActivePaymentState } from './types';
import { paymentCategories } from '../../types/payment';

function Home(): ReactElement {
  const listFormatter = new Intl.ListFormat('en', { style: 'long' });

  const [activePaymentCategories, setActivePaymentCategories] = useReducer<
  Reducer<ActivePaymentState, PaymentCategoriesActions>
  >((state, action) => {
    switch (action.type) {
      case TOGGLE_ACTION_TYPE: {
        const { payload } = action;

        const positionOfElementToToggle = state.findIndex(
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

  const fetchCustomers: () => Promise<Customer[]> = useCallback(async () => {
    const response: Response = await fetch('/api/customers');
    const customersFetched: Awaited<Customer[]> = await response.json();

    return customersFetched;
  }, []);

  useEffect(() => {
    // https://beta.reactjs.org/learn/synchronizing-with-effects#fetching-data
    let ignore = false;

    async function startFetching() {
      const customersFetched: Customer[] = await fetchCustomers();
      if (!ignore) {
        setCustomers(customersFetched);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [fetchCustomers, setCustomers]);

  return (
    <div className="h-screen grid bg-pink-900">
      <div className="container mx-auto my-auto bg-pink-100">
        <header>{listFormatter.format(activePaymentCategories)}</header>
        <nav className="flex flex-row gap-4">
          {paymentCategories.map((paymentCategory) => (
            <div
              className="basis-1/3 h-full aspect-square border-4 border-pink-500"
              key={paymentCategory}
            >
              <StatisticsToggle
                count={0}
                category={paymentCategory}
                value={paymentCategory}
                onChange={(payload) => setActivePaymentCategories({
                  type: TOGGLE_ACTION_TYPE,
                  payload,
                })}
              />
            </div>
          ))}
        </nav>
        <ResultsList customers={customers} />
      </div>
    </div>
  );
}

export default Home;
