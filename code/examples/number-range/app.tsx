import React from 'react';
import { SortCodePart, SortCode, isValidSortCodePart, isValidSortCode } from './types';

function getRandomSortCodePart(): SortCodePart {
  const randomNumber: number = Math.floor(Math.random() * 99) + 1;

  // type guard to help TS determine that randomNumber is compatible with SortCodePart
  if (!isValidSortCodePart(randomNumber)) {
    return getRandomSortCodePart();
  }

  const sortCodePart: SortCodePart = randomNumber;

  return sortCodePart;
}

function getRandomSortCode(): SortCode {
  const sortCodeParts: SortCodePart[] = Array.from([1, 2, 3], () => {
    return getRandomSortCodePart();
  });

  // type guard
  if (!isValidSortCode(sortCodeParts)) {
    return getRandomSortCode();
  }

  return sortCodeParts;
}
