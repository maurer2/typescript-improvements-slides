import React, { ReactElement, Children } from "react";

import { ChildProps } from './Child.types';
import style from './Child.module.scss';

function Child({ children }: ChildProps): ReactElement {
  return (
    <div className={style.child}>
      {Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </div>
  );
}

export default Child;
