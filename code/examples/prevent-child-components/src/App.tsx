import React, { type ReactElement } from 'react';

import Child from './Child/Child.tsx';
import Childless from './Childless/Childless.tsx';

function App(): ReactElement {
  return (
    <div className="wrapper">
      <h1>Restrict child element</h1>
      <Child otherProp="test">
        <h2>Can have child content</h2>
      </Child>
      {/* @ts-expect-error child element(s) prohibited */}
      <Childless otherProp="test">Test</Childless>
    </div>
  );
}

export default App;
