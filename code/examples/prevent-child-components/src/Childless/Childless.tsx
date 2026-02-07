import React, { type ReactElement } from 'react';

import type { ChildlessProps } from './Childless.types.ts';

function Childless(props: ChildlessProps): ReactElement {
  return (
    <div>
      <h2>Can't have child content</h2>
      {props.children}
    </div>
  );
}

export default Childless;
