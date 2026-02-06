// https://stackoverflow.com/questions/69612540/typescript-type-to-prevent-division-by-0
type NumberWithoutZero<T extends number> = T extends 0 ? never : number extends T ? never : T;

// export default function calculateQuotient<Operand1 extends number, Operand2 extends number>(
//   operand1: Operand1,
//   operand2: NumberWithoutZero<Operand2>,
// ): number {
//   return operand1 / operand2;
// }

// only works in TS 4.8+
// https://stackoverflow.com/a/39676350
// https://github.com/microsoft/TypeScript/pull/48094
type Is<T extends U, U> = T;
type T0 = "0" extends `${Is<infer T, number>}` ? T : never;

type NumberWithoutZero2 = Exclude<number, T0>; // doesn't work

export default function calculateQuotient(
  operand1: number,
  operand2: NumberWithoutZero2,
): number {
  return operand1 / operand2;
}
