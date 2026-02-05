import { faker } from '@faker-js/faker';

import type { LoanLooselyTyped } from './types.ts';

export const loanLooselyTyped: LoanLooselyTyped = JSON.parse(
  JSON.stringify({
    id: faker.datatype.uuid(),
    title: faker.lorem.words(5),
    tranche: faker.lorem.word(),
    available_amount: faker.finance.amount(),
    annualised_return: faker.finance.amount(),
    term_remaining: faker.date.future(12).toISOString(),
    ltv: faker.datatype.number({ max: 100, precision: 0.01 }),
    loan_value: faker.finance.amount(),
  }),
);
