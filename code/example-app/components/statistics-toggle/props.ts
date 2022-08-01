import { ReactNode } from 'react';

export type StatisticsToggleProps = {
  children?: ReactNode;
  count: number;
  category: string; // todo change to union type or enum
  value: string; // todo change to union type or enum
  onChange: (value: string) => void,
};
