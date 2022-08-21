import type { ReactNode } from 'react';
import type { CustomerOverview, PaymentCategories } from '../../types';

export type ResultsListProps = {
  children?: ReactNode;
  customers: CustomerOverview[];
  activePaymentCategoriesFilters: PaymentCategories[];
};
