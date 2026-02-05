import type { Actions, State } from './types.ts';
import { initialState } from './store.ts';
import { ActionNames } from './action-types.ts';

// Redux without Redux Toolkit
// eslint-disable-next-line @typescript-eslint/default-param-last
const reducers = (state: State = initialState, action: Actions): State => {
  const { type } = action;

  switch (type) {
    case ActionNames.UPDATE_COUNTER: {
      const { payload } = action; // Counter

      return {
        ...state,
        // dateTime: payload: // Error -> Counter can't be assigned to DateTime
        counter: payload,
      };
    }
    case ActionNames.UPDATE_DATETIME: {
      const { payload } = action; // DateTime

      return {
        ...state,
        // counter: payload // Error -> DateTime can't be assigned to Counter
        dateTime: payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
