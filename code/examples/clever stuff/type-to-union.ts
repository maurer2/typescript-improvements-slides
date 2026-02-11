// https://matiashernandez.dev/blog/post/typescript-create-a-union-from-a-type
// https://www.totaltypescript.com/tips/derive-a-union-type-from-an-object

const reducerActionTypes = ['increment', 'decrement', 'reset'] as const;
type ReducerActionTypes = typeof reducerActionTypes[number];

type ReducerActionsNested = {
  readonly [K in ReducerActionTypes]: {
    type: K;
    payload: K extends 'reset' ? undefined : number;
  };
};

type ReducerActionsFlat = {
  readonly [K in ReducerActionTypes]: {
    type: K;
    payload: K extends 'reset' ? undefined : number;
  };
}[ReducerActionTypes]; // magic

const numberReducer = (state: number, action: ReducerActionsFlat) => {
  switch (action.type) {
    case 'increment':
      return state + action.payload;
    case 'decrement':
      return state - action.payload;
    case 'reset':
      return 0;
    default:
      return action satisfies never;
  }
};

numberReducer(0, { type: 'increment', payload: 1 });
