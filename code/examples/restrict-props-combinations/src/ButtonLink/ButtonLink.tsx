import React, { ReactElement, PropsWithChildren } from 'react';

import type { ButtonLinkProps } from './ButtonLink.types';
import style from './ButtonLink.module.scss';

function ButtonLink({ as, onClick }: PropsWithChildren<ButtonLinkProps<'a' | 'button'>>): ReactElement {
  const Component = as;

  return (
    <Component className={style.ButtonLink} onClick={onClick}>
      Click <span>Type: {Component}</span>
    </Component>
  );
}

export default ButtonLink;
