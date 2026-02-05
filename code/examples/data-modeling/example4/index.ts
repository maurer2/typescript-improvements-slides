import type { Currencies } from './types.ts';

const currencies: Currencies = {
  EUR: ['Euro', '€'],
  GBP: ['Pound', '£'],
  USD: ['Dollar', '$'],
  CAD: ['Canadian Dollar', '$'],
  AUD: ['Dollarydoos', '$'],
  // CAD: ['Euro', '$'], // Error
  // GBP: ['Pound Sterling', '$'], // Error
};

console.log(currencies);
