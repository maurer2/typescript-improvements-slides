export function sumOverload(a: number, b: number): number;
export function sumOverload(a: string, b: string): string;
export function sumOverload(a: bigint, b: bigint): bigint;

export function sumOverload(
  a: number | string | bigint,
  b: number | string | bigint,
): number | string | bigint {
  if (typeof a === 'bigint' && typeof b === 'bigint') {
    return BigInt(a + b);
  }

  if (typeof a === 'string' && typeof b === 'string') {
    // return type not enforced here
    return `${a}${b}`;
  }

  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  throw new Error('Invalid combination of argument types');
}

export function sumGeneric<T>(a: T, b: T): T {
  if (typeof a === 'bigint' && typeof b === 'bigint') {
    return BigInt(a + b) as T;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return `${a}${b}` as T;
  }

  if (typeof a === 'number' && typeof b === 'number') {
    return (a + b) as T;
  }

  throw new Error('Invalid combination of argument types');
}
