// type CurrencyAbbreviations = 'GBP' | 'EUR' | 'USD' | 'CAD' | 'AUD';

type CurrencyNames = 'Pound' | 'Euro' | 'Dollar' | 'Canadian Dollar' | 'Australian Dollar';

type CurrencySymbols = '£' | '€' | '$';


export type Currencies = {
  GBP: {
    name: CurrencyNames;
    symbol: CurrencySymbols;
  };
  EUR: {
    name: CurrencyNames;
    symbol: CurrencySymbols;
  };
}

// Mapped type
// export type Currencies = {
//   [K in CurrencyAbbreviations]?: {
//     name: CurrencyNames;
//     symbol: CurrencySymbols;
//   };
// };
