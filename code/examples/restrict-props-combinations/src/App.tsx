import React from 'react';
import './App.scss';

import ButtonLink from './ButtonLink';

function App() {
  return (
    <div className="wrapper">
      <h1>Restrict props combinations with TS</h1>
      <ButtonLink type='button'>
        Content
      </ButtonLink>
    </div>
  );
}

export default App;
