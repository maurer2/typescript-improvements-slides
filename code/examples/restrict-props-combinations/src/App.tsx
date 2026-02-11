import React, { useReducer } from 'react';

import ButtonLink from './ButtonLink/ButtonLink.tsx';
import ButtonLink2 from './ButtonLink2/ButtonLink2.tsx';

function App() {
  // doesn't work in React19 anymore: https://react.dev/blog/2024/04/25/react-19-upgrade-guide?utm_source=chatgpt.com#better-usereducer-typings
  // const [isButton, toggleIsButton] = useReducer<ReducerWithoutAction<boolean>>(
  //   (isButton) => !isButton,
  //   true,
  // );
  const [isButton, toggleIsButton] = useReducer((isButton) => !isButton, true);

  return (
    <div className="wrapper">
      <h1>Restrict props combinations with TS</h1>
      <ButtonLink
        as={isButton ? 'button' : 'a'}
        onClick={toggleIsButton}
        // disabled={false}
        // disabled={true}
        // disabled
        href="#home"
      >
        Click
      </ButtonLink>

      <hr />

      {isButton ? (
        <ButtonLink2
          as="button"
          onClick={toggleIsButton}
          // disabled={false}
          // disabled={true}
          // disabled
          // href="#home"
        >
          Click
        </ButtonLink2>
      ) : (
        <ButtonLink2
          as="a"
          onClick={toggleIsButton}
          // disabled={false}
          // disabled={true}
          // disabled
          href="#home"
        >
          Click
        </ButtonLink2>
      )}
    </div>
  );
}

export default App;
