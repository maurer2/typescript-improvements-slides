import { currencyAbbreviations1, currencyAbbreviations2 } from './types';
import type { CurrencyAbbreviations1, CurrencyAbbreviations2 } from './types';

function showCurrencies1(currencies: CurrencyAbbreviations1): void {
  currencies.forEach(currency =>  console.log(currency.toLowerCase()));
}

function showCurrencies2(currencies: CurrencyAbbreviations2): void {
  currencies.forEach(currency =>  console.log(currency.toLowerCase()));
}
