import React, { ReactElement } from 'react';
import { CustomButtonProps } from './library';

function CustomButton({ children, onClick, newProp }: CustomButtonProps): ReactElement {
  return (
    <button type="button" onClick={onClick} data-testid={newProp}>
      {children}
    </button>
  );
}

export default function App() {
  function handleClick(): void {
    console.log('Click');
  }

  return (
    <CustomButton
      onClick={handleClick}
      newProp="test"
      // oldProp="test" // error
    >
      Button
    </CustomButton>
  );
}
