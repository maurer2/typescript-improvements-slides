// https://stackoverflow.com/questions/69612540/typescript-type-to-prevent-division-by-0
type NumberWithoutZero<T extends number> = T extends 0 ? never : number extends T ? never : T;

export default function calculateQuotient<Operand1 extends number, Operand2 extends number>(
  operand1: Operand1,
  operand2: NumberWithoutZero<Operand2>,
): number {
  return operand1 / operand2;
}
