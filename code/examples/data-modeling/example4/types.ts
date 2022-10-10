// adapted from https://github.com/maurer2/

export const currencyAbbreviations = {
  GBP: 'GBP',
  EUR: 'EUR',
  USD: 'USD',
  CAD: 'CAD',
} as const;
type CurrencyAbbreviations = keyof typeof currencyAbbreviations; // Keys

export const currencyNames = {
  GBP: 'Pound Sterling',
  EUR: 'Euro',
  USD: 'Dollar',
  CAD: 'Canadian Dollar',
} as const;
type CurrencyNames = {
  [K in CurrencyAbbreviations]: typeof currencyNames[K];
};

export const currencySymbols = {
  GBP: '£',
  EUR: '€',
  USD: '$',
  CAD: '$',
} as const;
type CurrencySymbols = {
  [K in CurrencyAbbreviations]: typeof currencySymbols[K];
};

export type Currencies = {
  [K in CurrencyAbbreviations]: [
    name: CurrencyNames[K],
    symbol: CurrencySymbols[K]
  ];
};
