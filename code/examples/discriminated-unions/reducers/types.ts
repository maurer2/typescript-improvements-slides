import type { ActionNamesTypes } from './action-types.ts';

export type Counter = {
  name: string;
  value: number;
};

export type DateTime = {
  value: ReturnType<typeof Date.now>;
  locale: 'en-GB';
};

export type State = {
  counter: Counter;
  dateTime: DateTime;
};

export type CounterAction = {
  type: Uppercase<Extract<ActionNamesTypes, 'UPDATE_COUNTER'>>;
  payload: Counter;
};

export type DateTimeAction = {
  type: Uppercase<Extract<ActionNamesTypes, 'UPDATE_DATETIME'>>;
  payload: DateTime;
};

export type Actions = CounterAction | DateTimeAction;
