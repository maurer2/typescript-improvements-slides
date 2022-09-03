// https://catchts.com/range-numbers
export type NumberRange<UpperBound extends number, ArrayWithVariableLength extends number[] = []> = (ArrayWithVariableLength['length'] extends UpperBound
  ? ArrayWithVariableLength
  : NumberRange<UpperBound, [...ArrayWithVariableLength, ArrayWithVariableLength['length']]> // recursively call NumberRange until upper bound has been reached
)
type SortCodePart = Exclude<NumberRange<100>[number], 0>; // exclude 0 since sort codes, start at 1

type SortCode = [SortCodePart, SortCodePart, SortCodePart];

const sortCode: SortCode = [99, 11, 99];
