import React, { ReactElement } from 'react';

import type { ChildlessProps } from './Childless.types';
import style from './Childless.module.scss';

function Childless(props: ChildlessProps): ReactElement {
  return (
    <div className={style.childless}>
      <h2>Can't have child content</h2>
      {props.children}
    </div>
  );
}

export default Childless;
