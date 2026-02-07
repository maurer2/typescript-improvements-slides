import { faker } from '@faker-js/faker';

import type { Customer, CustomerWithPaymentData } from './types.ts';

const customer: Customer = {
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  house: faker.location.buildingNumber(),
  street: faker.location.street(),
  postcode: faker.location.buildingNumber(),
  city: faker.location.city(),
  defaultedPayments: faker.number.int({ min: 0, max: 5 }),
  missedPayments: faker.number.int({ min: 0, max: 10 }),
};

const customerWithPaymentData: CustomerWithPaymentData = {
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  defaultedPayments: faker.number.int({ min: 0, max: 5 }),
  missedPayments: faker.number.int({ min: 0, max: 10 }),
};

export const customers: [Customer, CustomerWithPaymentData] = [customer, customerWithPaymentData];
