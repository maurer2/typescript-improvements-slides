import type { Currencies } from "./types";

const currencies: Currencies = {
  EUR: ['Euro', '€'],
  GBP: ['Pound Sterling', '£'],
  USD: ['Dollar', '$'],
  CAD: ['Canadian Dollar', '$'],
  AUD: ['Dollarydoos', '$']
  // CAD: ['Euro', '$'], // Error
  // GBP: ['Pound Sterling', '$'], // Error
};

console.log(currencies);
