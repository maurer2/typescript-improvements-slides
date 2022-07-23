import React from 'react';
import './App.scss';

import Child from './Child';
import Childless from './Childless';

function App() {
  return (
    <div className="wrapper">
      <h1>Restricting child element creation via TS</h1>
      <Child>
        <h2>Can have child content</h2>
      </Child>
      <Childless />
      {/* <Childless>
        <h2>Can not have child content</h2>
      </Childless> */}
    </div>
  );
}

export default App;
