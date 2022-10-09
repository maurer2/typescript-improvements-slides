import React, { PropsWithChildren } from 'react';
import { CustomButtonProps } from './library';

function CustomButton({ children, onClick, newProp }: PropsWithChildren<CustomButtonProps>) {
  return (
    <button type="button" onClick={onClick} data-testid={newProp}>
      {children}
    </button>
  );
}

export default function App() {
  function handleClick(): void {}

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
