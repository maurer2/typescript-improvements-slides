type CurrencyAbbreviations = 'GBP' | 'EUR' | 'USD' | 'CAD' | 'AUD';

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

export type CurrenciesMapped1 = {
  [K in CurrencyAbbreviations]?: {
    name: CurrencyNames;
    symbol: CurrencySymbols;
  };
};

export type CurrenciesMapped2 = Partial<Record<CurrencyAbbreviations, {
  name: CurrencyNames;
  symbol: CurrencySymbols;
}>>;
