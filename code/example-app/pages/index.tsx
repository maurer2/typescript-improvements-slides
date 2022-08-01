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
    (state: any[], action: PaymentCategoriesActions) => {
      switch (action.type) {
        case 'regular': {
          return [...state, 'regular'];
        }
        case 'missed': {
          return [...state, 'missed'];
        }
        case 'defaulted': {
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
        <pre>{JSON.stringify(activePaymentCategories)}</pre>
        {paymentCategories.map((paymentCategory) => (
          <StatisticsToggle
            key={paymentCategory}
            count={0}
            category={paymentCategory}
            value={paymentCategory}
            onChange={(value: string) => setActivePaymentCategories({ type: value })}
          />
        ))}
        <ResultsList />
      </div>
    </div>
  );
}

export default Home;
