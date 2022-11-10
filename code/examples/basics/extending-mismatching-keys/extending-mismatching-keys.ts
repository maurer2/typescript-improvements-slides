import type {
  TypeChild,
  TypeChild2,
  TypeChildNumber,
  TypeChildNumber2,
  TypeChildUnion,
  TypeChildUnion2,
  TypeChildNull,
  TypeChildNull2,
} from './types';

export const typeChild: TypeChild = {
  value: 'test', // ok
  // value: 1, // error
  // value: null, // error
};
export const typeChild2: TypeChild2 = {
  value: 'test', // ok
  // value: 1, // error
  // value: null, // error
};

export const typeChildNumber: TypeChildNumber = {
  // value: 'test' // error
  // value: 1, // error
  // value: null, // error
};
export const typeChildNumber2: TypeChildNumber2 = {
  // value: 'test' // error
  // value: 1, // error
  value: null, // ok
};

export const typeChildUnion: TypeChildUnion = {
  value: 'test', // ok
  // value: 1, // error
  // value: null, // error
};
export const typeChildUnion2: TypeChildUnion2 = {
  value: 'test',
  // value: 1, // error
  // value: null, // ok
};

export const typeChildNull: TypeChildNull = {
  // value: 'test' // error
  // value: 1, // error
  // value: null, // error
};
export const typeChildNull2: TypeChildNull2 = {
  // value: 'test'  // error
  // value: 1, // error
  value: null, // ok
};
