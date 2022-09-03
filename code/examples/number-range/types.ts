// https://catchts.com/range-numbers
export type NumberRange<UpperBound extends number, Result extends number[] = []> = (Result['length'] extends UpperBound
  ? Result
  : NumberRange<UpperBound, [...Result, Result['length']]>
)
type SortCodePart = NumberRange<100>[number];

type SortCode = [SortCodePart, SortCodePart, SortCodePart]

const sortCode: SortCode = [1, 11, 99]; // todo leading zero
