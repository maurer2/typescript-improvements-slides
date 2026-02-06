import React, { type ReactElement, type PropsWithChildren } from 'react';

import type { ButtonLinkProps } from './ButtonLink.types.ts';

function ButtonLink({
  as,
  onClick,
}: PropsWithChildren<ButtonLinkProps<'a' | 'button'>>): ReactElement {
  const Component = as;

  return (
    <Component onClick={onClick}>
      Click <span>Type: {Component}</span>
    </Component>
  );
}

export default ButtonLink;
