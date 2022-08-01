import { ReactElement, useReducer } from 'react';

import ResultsList from '../components/results-list';
import StatisticsToggle from '../components/statistics-toggle';

type HomeProps = {
  isHome: boolean;
};

const paymentCategories = ['regular', 'missed', 'defaulted'] as const;
type PaymentCategories = typeof paymentCategories[number];

type PaymentCategoriesActions = { type: 'regular' } | { type: 'missed' } | { type: 'defaulted' };

function Home({ isHome }: HomeProps): ReactElement {
  const [activePaymentCategories, setActivePaymentCategories] = useReducer(
    (state: any[], action: PaymentCategoriesActions) => { // todo proper types
      switch (action.type) {
        case 'regular': {
          const currentPosition: number = state.findIndex(
            (currentStateEntry) => currentStateEntry === 'regular',
          );
          if (currentPosition > -1) {
            const newState = [...state];
            newState.splice(currentPosition, 1);
            return newState;
          }
          return [...state, 'regular'];
        }
        case 'missed': {
          const currentPosition = state.findIndex(
            (currentStateEntry) => currentStateEntry === 'missed',
          );
          if (currentPosition > -1) {
            const newState = [...state];
            newState.splice(currentPosition, 1);
            return newState;
          }
          return [...state, 'missed'];
        }
        case 'defaulted': {
          const currentPosition = state.findIndex(
            (currentStateEntry) => currentStateEntry === 'defaulted',
          );
          if (currentPosition > -1) {
            const newState = [...state];
            newState.splice(currentPosition, 1);
            return newState;
          }
          return [...state, 'defaulted'];
        }
        default: {
          return [];
        }
      }
    },
    [] as PaymentCategories[],
  );

  return (
    <div className="h-screen grid bg-pink-900">
      <div className="container mx-auto my-auto bg-pink-100">
        <header>
          <pre>{JSON.stringify(activePaymentCategories)}</pre>
        </header>
        <nav className="flex flex-row gap-4">
          {paymentCategories.map((paymentCategory) => (
            <div className="basis-1/3 h-full aspect-square border-4 border-pink-500" key={paymentCategory}>
              <StatisticsToggle
                count={0}
                category={paymentCategory}
                value={paymentCategory}
                onChange={(value: string) => setActivePaymentCategories({ type: value as any })}
              />
            </div>
          ))}
        </nav>
        <ResultsList />
      </div>
    </div>
  );
}

export default Home;