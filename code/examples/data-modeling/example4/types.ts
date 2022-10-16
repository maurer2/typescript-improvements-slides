// adapted from https://github.com/maurer2/loansome

// export const currencyAbbreviations = {
//   GBP: 'GBP',
//   EUR: 'EUR',
//   USD: 'USD',
//   CAD: 'CAD',
//   AUD: 'AUD',
// } as const;
// type CurrencyAbbreviations = keyof typeof currencyAbbreviations; // Keys
type CurrencyAbbreviations = 'GBP' | 'EUR' | 'USD' | 'CAD' | 'AUD';

// export const currencyNames = {
//   GBP: ['Pound', 'Pound Sterling'],
//   EUR: ['Euro'],
//   USD: ['Dollar', 'US Dollar'],
//   CAD: ['Canadian Dollar'],
//   AUD: ['Australian Dollar', 'Dollarydoos'],
// } as const;
// type CurrencyNames = {
//   // [K in CurrencyAbbreviations]: typeof currencyNames[K][0]; // first value
//   [K in CurrencyAbbreviations]: typeof currencyNames[K][number]; // multiple values
// };

type CurrencyNames = {
  GBP: 'Pound' | 'Pound Sterling';
  EUR: 'Euro';
  USD: 'Dollar' | 'US Dollar';
  CAD: 'Canadian Dollar';
  AUD: 'Australian Dollar' | 'Dollarydoos';
};

// export const currencySymbols = {
//   GBP: '£',
//   EUR: '€',
//   USD: '$',
//   CAD: '$',
//   AUD: '$',
// } as const;
// type CurrencySymbols = {
//   [K in CurrencyAbbreviations]: typeof currencySymbols[K];
// };

type CurrencySymbols = {
  GBP: '£';
  EUR: '€';
  USD: '$';
  CAD: '$';
  AUD: '$';
};

export type Currencies = {
  [K in CurrencyAbbreviations]?: [
    name: CurrencyNames[K],
    symbol: CurrencySymbols[K],
  ];
};
