import type { Dispatch, SetStateAction } from 'react';

// passing useState callback as prop to child
// https://www.linkedin.com/posts/saba-vartasashvili_typescript-react-javascript-activity-7427211046656012288-80Aw
type ChildProps1 = {
  setAmount: (value: number) => void;
};

const childProps1: ChildProps1 = {
  setAmount: (newAmount) => {
    console.log('new amount', newAmount);
  },
};
childProps1.setAmount(10); // ok
childProps1.setAmount((prevAmount) => prevAmount + 10); // error

type ChildProps2 = {
  setAmount: Dispatch<SetStateAction<number>>;
};

const childProps2: ChildProps2 = {
  setAmount: (newAmount) => {
    console.log('new amount', newAmount);
  },
};
childProps2.setAmount(10); // ok
childProps2.setAmount((prevAmount) => prevAmount + 10); // ok, but minor antipattern: https://matanbobi.dev/posts/stop-passing-setter-functions-to-components
