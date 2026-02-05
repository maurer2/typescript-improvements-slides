import { faker } from '@faker-js/faker';
import currency from 'currency.js';

import type { LoanStringlyTyped, Loan } from './types.ts';

export const loanJSON: LoanStringlyTyped = {
  id: faker.datatype.uuid(),
  title: faker.lorem.words(5),
  tranche: faker.lorem.word(),
  available_amount: faker.finance.amount(),
  annualised_return: faker.finance.amount(),
  term_remaining: faker.date.future(12).toISOString(),
  ltv: faker.datatype.number({ max: 100, precision: 0.01 }),
  loan_value: faker.finance.amount(),
};

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
