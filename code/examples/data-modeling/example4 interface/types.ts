// adapted from https://github.com/maurer2/loansome

export const currencyAbbreviations = {
  GBP: 'GBP',
  EUR: 'EUR',
  USD: 'USD',
  CAD: 'CAD',
  AUD: 'AUD',
} as const;
interface CurrencyAbbreviations {
  keys: keyof typeof currencyAbbreviations;
}

export const currencyNames = {
  GBP: ['Pound Sterling'],
  EUR: ['Euro'],
  USD: ['Dollar'],
  CAD: ['Canadian Dollar'],
  AUD: ['Australian Dollar', 'Dollarydoos'],
} as const;
// not possible with interfaces
type CurrencyNames = {
  // [K in CurrencyAbbreviations['keys']]: typeof currencyNames[K][0]; // first value
  [K in CurrencyAbbreviations['keys']]: typeof currencyNames[K][number]; // multiple values
};

export const currencySymbols = {
  GBP: '£',
  EUR: '€',
  USD: '$',
  CAD: '$',
  AUD: '$',
} as const;
// not possible with interfaces
type CurrencySymbols = {
  [K in CurrencyAbbreviations['keys']]: typeof currencySymbols[K];
};

export type Currencies = {
  [K in CurrencyAbbreviations['keys']]: [
    name: CurrencyNames[K],
    symbol: CurrencySymbols[K]
  ];
};
