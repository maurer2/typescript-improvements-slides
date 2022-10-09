import currency from 'currency.js';

import { loanJSON } from './data';
import type { Loan } from './types';

const loan: Loan = {
  id: loanJSON.id,
  title: loanJSON.title,
  tranche: loanJSON.tranche,
  available_amount: currency(loanJSON.available_amount),
  annualised_return: currency(loanJSON.annualised_return),
  term_remaining: new Date(loanJSON.term_remaining),
  ltv: BigInt(Math.trunc(loanJSON.ltv * 100)),
  loan_value: currency(loanJSON.loan_value),
};

console.log(loanJSON);
console.log(
  JSON.parse( // syntax highlighting on command line
    JSON.stringify(
      loan,
      (_, value) => {
        let valueTransformed: string;
        typeof value === 'bigint' ? (valueTransformed = value.toString()) : (valueTransformed = value);

        return valueTransformed;
      },
      4,
    ),
  ),
);
