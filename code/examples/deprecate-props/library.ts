import { MouseEvent } from 'react';

export type CustomButtonProps = Partial<Pick<HTMLButtonElement, 'autofocus' | 'ariaDisabled'>> &
{
  onClick: (event?: MouseEvent<HTMLButtonElement>) => void,
  oldProp?: never,
  newProp: string,
};
