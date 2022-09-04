// shared props
type ButtonLink2CommonProps = {
  onClick: (() => void);
}

type ButtonLink2ButtonProps = {
  type: 'button';
  disabled?: boolean;
  href?: never; // type button should never have a href attribute
}

type ButtonLink2LinkProps = {
  type: 'a';
  disabled?: false; // type link should never have a disabled attribute
  href: string;
}

export type ButtonLink2Props = ButtonLink2CommonProps & (ButtonLink2ButtonProps | ButtonLink2LinkProps);
