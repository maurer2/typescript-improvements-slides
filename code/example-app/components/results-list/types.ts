import type { ReactNode } from 'react';
import type { Customer, PaymentCategories } from '../../types';

export type ResultsListProps = {
  children?: ReactNode;
  customers: Customer[];
  activePaymentCategoriesFilters: PaymentCategories[];
};
