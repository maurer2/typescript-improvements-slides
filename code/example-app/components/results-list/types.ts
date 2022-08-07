import { ReactNode } from 'react';
import { Customer } from '../../types/customer';
import { ActivePaymentState } from '../../pages/index/types';

export type ResultsListProps = {
  children?: ReactNode;
  customers: Customer[];
  activePaymentCategories: ActivePaymentState;
};
