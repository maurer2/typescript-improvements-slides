import {ReactNode} from 'react';

type ButtonLink2CommonProps = {
  children?: ReactNode | ReactNode[];
  onClick: (() => void);
}

type ButtonLink2ButtonProps = {
  type: 'button';
  disabled?: boolean;
  href?: never;
}

type ButtonLink2LinkProps = {
  type: 'a';
  disabled?: false;
  href: string;
}

export type ButtonLink2Props = ButtonLink2CommonProps & (ButtonLink2ButtonProps | ButtonLink2LinkProps);
