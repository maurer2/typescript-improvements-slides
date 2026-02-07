import { faker } from '@faker-js/faker';

import type { Customer } from './types.ts';

export function getRandomCustomers(numberOfCustomers: number = 100): Customer[] {
  const customers: Customer[] = Array.from({ length: numberOfCustomers }).map(() => {
    const defaultedPayments = faker.number.int({ min: 0, max: 5 });
    const missedPayments = faker.number.int({ min: 0, max: 10 });

    return {
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      defaultedPayments,
      missedPayments,
      hasDefaultedPayments: Boolean(defaultedPayments),
      hasMissedPayments: Boolean(missedPayments),
    };
  });

  return customers;
}

export const customerRegular: Customer = {
  id: `Regular-${faker.string.uuid()}`,
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  defaultedPayments: 0,
  missedPayments: 0,
  hasDefaultedPayments: false,
  hasMissedPayments: false,
};

export const customerWithDefaultedPayments: Customer = {
  id: `Defaulted-${faker.string.uuid()}`,
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  defaultedPayments: 10,
  missedPayments: 10,
  hasDefaultedPayments: true,
  hasMissedPayments: false,
};

export const customerWithMissedPayments: Customer = {
  id: `Missed-${faker.string.uuid()}`,
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  defaultedPayments: 0,
  missedPayments: 10,
  hasDefaultedPayments: false,
  hasMissedPayments: true,
};
