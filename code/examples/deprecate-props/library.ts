import type { MouseEvent, PropsWithChildren } from 'react';

export type CustomButtonProps = PropsWithChildren<
  Partial<Pick<HTMLButtonElement, 'autofocus' | 'ariaDisabled'>> & {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    oldProp?: never;
    newProp: string;
  }
>;
