import React from 'react';
import './App.scss';

import Child from './Child';
import Childless from './Childless';

function App() {
  return (
    <div className="wrapper">
      <h1>Restrict child element</h1>
      <Child otherProp='test'>
        <h2>Can have child content</h2>
      </Child>
      <Childless otherProp='test'/>
    </div>
  );
}

export default App;
