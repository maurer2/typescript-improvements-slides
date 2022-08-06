import { ReactNode } from 'react';

import type { PaymentCategories } from '../../types/payment';

export type StatisticsToggleProps = {
  children?: ReactNode;
  count: number;
  category: PaymentCategories;
  value: PaymentCategories;
  isActive: boolean;
  onChange: (value: PaymentCategories) => void;
};
