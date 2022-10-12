import currency from 'currency.js';

import { loanLooselyTyped } from './data';
import type { Loan } from './types';

const loan: Loan = {
  id: loanLooselyTyped.id,
  title: loanLooselyTyped.title,
  tranche: loanLooselyTyped.tranche,
  available_amount: currency(loanLooselyTyped.available_amount),
  annualised_return: currency(loanLooselyTyped.annualised_return),
  term_remaining: new Date(loanLooselyTyped.term_remaining),
  ltv: BigInt(Math.trunc(loanLooselyTyped.ltv * 100)),
  loan_value: currency(loanLooselyTyped.loan_value),
};

console.log(loanLooselyTyped);
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
