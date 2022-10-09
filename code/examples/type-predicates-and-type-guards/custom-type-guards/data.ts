import { faker } from '@faker-js/faker';

import type { Customer } from './types';

export function getRandomCustomers(numberOfCustomers: number = 100): Customer[] {
  const customers: Customer[] = Array.from({ length: numberOfCustomers }).map(() => {
    const defaultedPayments = faker.datatype.number({ min: 0, max: 5, precision: 1 });
    const missedPayments = faker.datatype.number({ min: 0, max: 10, precision: 1 });

    return {
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      defaultedPayments,
      missedPayments,
      hasDefaultedPayments: Boolean(defaultedPayments),
      hasMissedPayments: Boolean(missedPayments),
    };
  });

  return customers;
}

export const customerRegular: Customer = {
  id: `Regular-${faker.datatype.uuid()}`,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  defaultedPayments: 0,
  missedPayments: 0,
  hasDefaultedPayments: false,
  hasMissedPayments: false,
};

export const customerWithDefaultedPayments: Customer = {
  id: `Defaulted-${faker.datatype.uuid()}`,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  defaultedPayments: 10,
  missedPayments: 10,
  hasDefaultedPayments: true,
  hasMissedPayments: false,
};

export const customerWithMissedPayments: Customer = {
  id: `Missed-${faker.datatype.uuid()}`,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  defaultedPayments: 0,
  missedPayments: 10,
  hasDefaultedPayments: false,
  hasMissedPayments: true,
};
