import { describe, it, expectTypeOf } from 'vitest';

import { sumOverload, sumGeneric } from './sum.ts';

describe('sumOverload', () => {
  it('returns bigint number for bigint parameters', () => {
    const sum = sumOverload(BigInt(Number.MAX_SAFE_INTEGER), BigInt(Number.MAX_SAFE_INTEGER));
    expectTypeOf(sum).toBeBigInt();
  });
  it('returns concatenated string for string parameters', () => {
    const sum = sumOverload('10', '20');
    expectTypeOf(sum).toBeString();
  });
  it('returns number for number parameters', () => {
    const sum = sumOverload(10, 20);
    expectTypeOf(sum).toBeNumber();
  });
  it('returns never/Error for invalid combination of parameters', () => {
    // @ts-expect-error invalid combination of parameter types
    const sum = sumOverload('10', 20);
    expectTypeOf(sum).toBeNever();
  });
});

describe('sumGeneric', () => {
  it('returns bigint number for bigint parameters', () => {
    const sum = sumGeneric(BigInt(Number.MAX_SAFE_INTEGER), BigInt(Number.MAX_SAFE_INTEGER));
    expectTypeOf(sum).toBeBigInt();
  });
  it('returns concatenated string for string parameters', () => {
    const sum = sumGeneric('10', '20');
    expectTypeOf(sum).toBeString();
  });
  it('returns number for number parameters', () => {
    const sum = sumGeneric(10, 20);
    expectTypeOf(sum).toBeNumber();
  });
  it('returns never/Error for invalid combination of parameters', () => {
    // @ts-expect-error invalid combination of parameter types
    const sum = sumGeneric(10, '10');
    // should be never, but is 10
    expectTypeOf(sum).not.toBeNever();

    // @ts-expect-error invalid combination of parameter types
    const sum2 = sumGeneric('10', 10);
    // should be never, but is '10'
    expectTypeOf(sum2).not.toBeNever();
  });
});
