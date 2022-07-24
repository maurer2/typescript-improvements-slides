import React, { ReactElement } from 'react';

import { ButtonLinkProps } from './ButtonLink.types';
import style from './ButtonLink.module.scss';

function ButtonLink({ onClick }: ButtonLinkProps): ReactElement {
  const TagType: 'button' | 'a' = 'button';

  return (
    <TagType className={style.ButtonLink} onClick={onClick}>
      Click
      {' '}
      <span>Type: {TagType}</span>
    </TagType>
  );
}

export default ButtonLink;
