// https://catchts.com/range-numbers
type NumberRange<
  UpperBound extends number,
  ArrayWithVariableLength extends number[] = [],
> = ArrayWithVariableLength['length'] extends UpperBound
  ? ArrayWithVariableLength
  : NumberRange<UpperBound, [...ArrayWithVariableLength, ArrayWithVariableLength['length']]>; // recursively call NumberRange until upper bound has been reached

export type SortCodePart = Exclude<NumberRange<100>[number], 0> // exclude 0 since sort codes start at 1 (sort codes for accepting IBAN transactions start with 0)

export type SortCode = [SortCodePart, SortCodePart, SortCodePart];

// Type guards
export const isValidSortCodePart = (randomNumber: number): randomNumber is SortCodePart => {
  return randomNumber > 0 && randomNumber < 100;
}

export const isValidSortCode = (sortCode: Array<SortCodePart>): sortCode is SortCode => {
  return sortCode.length === 3;
}
