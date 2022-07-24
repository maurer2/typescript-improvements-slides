import {ReactNode} from 'react';

type ButtonLinkCommonProps = {
  children?: ReactNode | ReactNode[];
  type: 'link' | 'button';
  onClick: (() => void);
}

// only available in button mode
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

// only available in link mode
// type ButtonLinkLinkProps = {
  // href?: string;
  //disabled?: never;
//}

export type ButtonLinkProps = ButtonLinkCommonProps & ButtonLinkButtonProps // & ButtonLinkLinkProps;
