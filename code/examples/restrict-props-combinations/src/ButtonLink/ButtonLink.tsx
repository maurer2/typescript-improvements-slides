import React, { ReactElement, Children } from 'react';

import { ButtonLinkProps } from './ButtonLink.types';
import style from './ButtonLink.module.scss';

function ButtonLink({ children }: ButtonLinkProps): ReactElement {
  const TagType: 'button' | 'a' = 'button';

  return (
    <TagType className={style.ButtonLink}>
      {Children.map(children, (child) => (
        <span>{child}</span>
      ))}
    </TagType>
  );
}

export default ButtonLink;
