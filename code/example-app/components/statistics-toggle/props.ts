import { ReactNode } from 'react';

import type { PaymentCategories } from '../../types/payment';

export type StatisticsToggleProps = {
  children?: ReactNode;
  count: number;
  category: PaymentCategories;
  value: PaymentCategories;
  onChange: (value: PaymentCategories) => void;
};
