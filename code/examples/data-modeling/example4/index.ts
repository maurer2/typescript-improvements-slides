import type { Currencies } from "./types";

const currencies: Currencies = {
  EUR: ['Euro', '€'],
  GBP: ['Pound Sterling', '£'],
  USD: ['Dollar', '$'],
  CAD: ['Canadian Dollar', '$'],
  // CAD: ['Euro', '$'], // Error
  // GBP: ['Pound Sterling', '$'], // Error
};

console.log(currencies);
