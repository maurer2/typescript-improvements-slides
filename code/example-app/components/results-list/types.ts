import { ReactNode } from 'react';
import type { Customer } from '../../types/customer';
import type { PaymentCategories } from '../../types/payment';

export type ResultsListProps = {
  children?: ReactNode;
  customers: Customer[];
  activePaymentCategoriesFilters: PaymentCategories[];
};
