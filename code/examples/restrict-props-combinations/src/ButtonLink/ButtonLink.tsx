import React, { ReactElement } from 'react';

import type { ButtonLinkProps } from './ButtonLink.types';
import style from './ButtonLink.module.scss';

function ButtonLink({ type, onClick }: ButtonLinkProps): ReactElement {
  const TagType: 'button' | 'a' = type; // Element name needs to be uppercase

  return (
    <TagType className={style.ButtonLink} onClick={onClick}>
      Click <span>Type: {TagType}</span>
    </TagType>
  );
}

export default ButtonLink;
