import { ReactNode } from 'react';
import { Customer } from '../../types/customer';

export type ResultsListProps = {
  children?: ReactNode;
  customers: Customer[];
};
