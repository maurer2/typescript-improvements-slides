import { isValidSortCodePart, isValidSortCode } from './types';
import type { SortCodePart, SortCode } from './types';

function getRandomSortCodePart(): SortCodePart {
  const randomNumber: number = Math.floor(Math.random() * 1000) + 1;

  // type guard to help TS determine that randomNumber is compatible with SortCodePart
  if (!isValidSortCodePart(randomNumber)) {
    return getRandomSortCodePart();
  }
  const sortCodePart: SortCodePart = randomNumber;

  return sortCodePart;
}

export function getRandomSortCode(): SortCode {
  const sortCodeParts: SortCodePart[] = Array.from([1, 2, 3], () => getRandomSortCodePart());

  // type guard
  if (!isValidSortCode(sortCodeParts)) {
    return getRandomSortCode();
  }

  return sortCodeParts;
}

const sortCodes: string[] = [...Array(100)].map(() => {
  const sortCode: SortCode = getRandomSortCode();
  const sortCodeFormatted: string = sortCode.map((sortCodePart) => sortCodePart.toString().padStart(2, '0')).join('-');

  return sortCodeFormatted;
});

console.log(sortCodes);
console.log(new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(sortCodes));
