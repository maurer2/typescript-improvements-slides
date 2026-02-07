import type { State } from './types.ts';

export const initialState: State = {
  counter: {
    name: 'Counter',
    value: 0,
  },
  dateTime: {
    value: Date.now(),
    locale: 'en-GB',
  },
};
