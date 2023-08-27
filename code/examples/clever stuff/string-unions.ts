// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#string-unions-in-types
const mixedObject = {
  test1: 'test1',
  test2: 'test2',
  1: 'one',
  2: 'two',
};

// all keys
type Keys = keyof typeof mixedObject;

// only string keys
type StringKeys = string & keyof typeof mixedObject;

// only number keys
type NumberKeys = number & keyof typeof mixedObject;
