/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useReducer, type Reducer } from 'react';

type ReducerState = number;
type ReducerAction =
  | { type: 'increase'; amount: number }
  | { type: 'decrease'; amount: number }
  | { type: 'reset' };

function countReducer(state: ReducerState, action: ReducerAction): ReducerState {
  const { type } = action;
  switch (type) {
    case 'increase': {
      return state + action.amount;
    }
    case 'decrease': {
      return state - action.amount;
    }
    case 'reset': {
      return 0;
    }
    default: {
      action satisfies never;

      return state;
    }
  }
}

// React 18
const [count, changeCount] = useReducer<Reducer<ReducerState, ReducerAction>>(countReducer, 0); // ok

// React 19
const [count2, changeCount2] = useReducer<Reducer<ReducerState, ReducerAction>>(countReducer, 0); // error: Expected 2 type arguments, but got 1.
const [count3, changeCount3] = useReducer<Reducer<ReducerState, ReducerAction>, ReducerState>(
  countReducer,
  0,
); // error: Type 'number' does not satisfy the constraint 'AnyActionArg'

// Correct approaches for React 19
// https://react.dev/blog/2024/04/25/react-19-upgrade-guide#better-usereducer-typings

// avoid Reducer type with manual typing and infer types from typed reducer function instead --> preferred approach
const [count4, dispatch4] = useReducer(countReducer, 0); // ok

// add types to useReducer directly without Reducer type
const [count5, dispatch5] = useReducer<ReducerState, [ReducerAction]>(countReducer, 0); // ok
// dispatch type must be a tuple
const [count6, dispatch6] = useReducer<ReducerState, ReducerAction>(countReducer, 0); // error: Type 'ReducerAction' does not satisfy the constraint 'AnyActionArg'.
