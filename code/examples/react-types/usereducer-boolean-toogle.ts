/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useReducer, type ReducerWithoutAction } from 'react';

type ReducerState = boolean;

// React 18
const [isExpanded, toggleIsExpanded] = useReducer<ReducerWithoutAction<ReducerState>>(
  (currentIsExpanded) => !currentIsExpanded,
  true,
); // ok

// React 19
const [isExpanded2, toggleIsExpanded2] = useReducer<ReducerWithoutAction<ReducerState>>(
  (currentIsExpanded) => !currentIsExpanded,
  true,
); // error: Expected 2 type arguments, but got 1

// avoid ReducerWithoutAction type with manual typing and infer types from inline reducer function instead
const [isExpanded3, toggleIsExpanded3] = useReducer(
  (currentIsExpanded) => !currentIsExpanded,
  true,
);
