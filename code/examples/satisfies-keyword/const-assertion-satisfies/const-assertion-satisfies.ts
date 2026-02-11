import { currencyAbbreviations1, currencyAbbreviations2 } from './types.ts';
import type { CurrencyAbbreviations1, CurrencyAbbreviations2 } from './types.ts';

function showCurrencies1(currencies: CurrencyAbbreviations1): void {
  currencies.forEach((currency) =>
    console.log(typeof currency === 'string' ? currency.toLowerCase() : currency),
  );
}

function showCurrencies2(currencies: CurrencyAbbreviations2): void {
  currencies.forEach((currency) =>
    console.log(typeof currency === 'string' ? currency.toLowerCase() : currency),
  );
}
