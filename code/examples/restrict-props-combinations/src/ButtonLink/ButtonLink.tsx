import React, { ReactElement } from 'react';

import { ButtonLinkProps } from './ButtonLink.types';
import style from './ButtonLink.module.scss';

function ButtonLink({ type, onClick }: ButtonLinkProps): ReactElement {
  const TagType = type; // needs to be uppercase

  return (
    <TagType className={style.ButtonLink} onClick={onClick}>
      Click
      {' '}
      <span>Type: {TagType}</span>
    </TagType>
  );
}

export default ButtonLink;
