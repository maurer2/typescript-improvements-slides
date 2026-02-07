import { faker } from '@faker-js/faker';

import type { LoanLooselyTyped } from './types.ts';

export const loanLooselyTyped: LoanLooselyTyped = JSON.parse(
  JSON.stringify({
    id: faker.string.uuid(),
    title: faker.lorem.words(5),
    tranche: faker.lorem.word(),
    available_amount: faker.finance.amount(),
    annualised_return: faker.finance.amount(),
    term_remaining: faker.date.future({ years: 12 }).toISOString(),
    ltv: faker.number.float({ max: 100, fractionDigits: 2 }),
    loan_value: faker.finance.amount(),
  }),
);
