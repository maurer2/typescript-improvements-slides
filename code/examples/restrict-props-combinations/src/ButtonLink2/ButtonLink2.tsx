import React, { ReactElement, PropsWithChildren } from 'react';

import type { ButtonLink2Props } from './ButtonLink2.types';
import style from './ButtonLink2.module.scss';

function ButtonLink2({ onClick, type, disabled, href }: PropsWithChildren<ButtonLink2Props>): ReactElement {
  const TagType: 'button' | 'a' = type; // needs to be uppercase

  // discriminated union
  if (type === 'button') {
    console.log(href); // undefined
    console.log(disabled);
  }

  if (type === 'a') {
    console.log(href); // string
    console.log(disabled);
  }

  return (
    <TagType className={style.ButtonLink} onClick={onClick}>
      Click <span>Type: {TagType}</span>
    </TagType>
  );
}

export default ButtonLink2;
