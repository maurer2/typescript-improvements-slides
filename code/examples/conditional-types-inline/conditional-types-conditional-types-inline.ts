type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type A = 'cat' | 'mouse';

type Animals = {
  cat: 'cat';
  dog: 'dog';
};

// permit value 'test' for test key if Animals contains 'cat'
type X = {
  test: 'cat' extends keyof Animals ? 'test' : never;
};

// permit value 'test' for each key that is in Animals
type Y = {
  [K in keyof Animals]: K extends keyof Animals ? 'test' : never;
};

type ContactDetails = {
  [K in 'name' | 'email']: string;
};

type NestedType = 'cat' extends keyof Animals ? string : number;

const x: X = {
  test: 'test',
};
