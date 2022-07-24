import React, {useReducer, ReducerWithoutAction} from 'react';
import './App.scss';

import ButtonLink from './ButtonLink';

function App() {
  const [isButton, toggleIsButton] = useReducer<ReducerWithoutAction<boolean>>((isButton) => !isButton, true);

  return (
    <div className="wrapper">
      <h1>Restrict props combinations with TS</h1>
      <ButtonLink
        type={isButton ? 'button' : 'link'}
        onClick={toggleIsButton}
        // disabled={false}
        // disabled={true}
        // disabled
        href="#home"
      >
        Click
      </ButtonLink>
    </div>
  );
}

export default App;
