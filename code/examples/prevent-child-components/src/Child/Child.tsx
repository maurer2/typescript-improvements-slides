import React, { type ReactElement, Children } from 'react';

import type { ChildProps } from './Child.types.ts';

function Child({ children }: ChildProps): ReactElement {
  return (
    <div>
      {Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </div>
  );
}

export default Child;
