import { ReactNode } from 'react';
import { Customer } from '../../pages/api/customer.types';

export type ResultsListProps = {
  children?: ReactNode;
  customers: Customer[];
};
