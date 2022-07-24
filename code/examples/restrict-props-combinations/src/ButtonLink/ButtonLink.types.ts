import {ReactNode} from "react";

export type ButtonLinkProps = {
  children?: ReactNode | ReactNode[];
  type: 'link' | 'button';
  href?: string; // only in link mode
  disabled?: boolean; // only in button mode
};
