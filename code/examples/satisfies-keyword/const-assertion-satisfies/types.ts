export const currencyAbbreviations1 = [
  'GBP', 'EUR', 'USD', 'CAD', 'AUD', Math.PI // Error at implementation
] as const;
export const currencyAbbreviations2 = [
  'GBP', 'EUR', 'USD', 'CAD', 'AUD', Math.PI // Error during declaration
] as const satisfies readonly string[];

export type CurrencyAbbreviations1 = typeof currencyAbbreviations1;
export type CurrencyAbbreviations2 = typeof currencyAbbreviations2;
