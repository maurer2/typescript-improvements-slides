import {ReactNode} from 'react';

type ButtonLinkCommonProps = {
  children?: ReactNode | ReactNode[];
  type: 'button' | 'a';
  onClick: (() => void);
}

type ButtonLinkButtonProps =
  // don't allow href, when disabled attribute is set (disabled or disabled={true})
| {
    disabled: true;
    href?: never;
  }
  // allow href, when disabled attribute is not set (disabled missing or disabled={false})
| {
    disabled?: false;
    href?: string;
}

// opposite of previous
type ButtonLinkLinkProps =
| {
  // don't allow disabled, when href attribute is set (href="")
  href: string;
  disabled?: false;
}
// allow disabled, when href attribute is not set (href missing)
| {
  href?: undefined;
  disabled?: boolean;
}


export type ButtonLinkProps = ButtonLinkCommonProps & ButtonLinkButtonProps & ButtonLinkLinkProps;
