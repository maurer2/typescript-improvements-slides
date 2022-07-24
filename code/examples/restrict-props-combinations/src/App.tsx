import React, {useReducer, ReducerWithoutAction} from 'react';
import './App.scss';

import ButtonLink from './ButtonLink';
import ButtonLink2 from './ButtonLink2';

function App() {
  const [isButton, toggleIsButton] = useReducer<ReducerWithoutAction<boolean>>((isButton) => !isButton, true);

  return (
    <div className="wrapper">
      <h1>Restrict props combinations with TS</h1>
      <ButtonLink
        type={isButton ? 'button' : 'a'}
        onClick={toggleIsButton}
        // disabled={false}
        // disabled={true}
        // disabled
        href="#home"
      >
        Click
      </ButtonLink>
      <hr />
      { isButton
        ? (
          <ButtonLink2
            type="button"
            onClick={toggleIsButton}
            // disabled={false}
            // disabled={true}
            // disabled
            // href="#home"
          >
            Click
          </ButtonLink2>
          )
        : (
          <ButtonLink2
            type="a"
            onClick={toggleIsButton}
            disabled={false}
            // disabled={true}
            // disabled
            href="#home"
          >
            Click
          </ButtonLink2>
          )
      }
    </div>
  );
}

export default App;
