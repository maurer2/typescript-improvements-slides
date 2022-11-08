import React, { ReactElement, PropsWithChildren } from 'react';

import type { ButtonLink2Props } from './ButtonLink2.types';
import style from './ButtonLink2.module.scss';

function ButtonLink2({ onClick, as, disabled, href }: PropsWithChildren<ButtonLink2Props>): ReactElement {
  const Component = as;

  if (Component === 'button') {
    console.log(href); // undefined
    console.log(disabled);
  }

  if (Component === 'a') {
    console.log(href); // string
    console.log(disabled);
  }

  return (
    <Component className={style.ButtonLink} onClick={onClick}>
      Click <span>Type: {Component}</span>
    </Component>
  );
}

export default ButtonLink2;
