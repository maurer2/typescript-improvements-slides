import { faker } from '@faker-js/faker';

import type { Customer, CustomerWithPaymentData } from './types.ts';

const customer: Customer = {
  id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  house: faker.address.buildingNumber(),
  street: faker.address.street(),
  postcode: faker.address.buildingNumber(),
  city: faker.address.city(),
};

const customerWithPaymentData: CustomerWithPaymentData = {
  ...customer,
  defaultedPayments: faker.datatype.number({ min: 0, max: 5, precision: 1 }),
  missedPayments: faker.datatype.number({ min: 0, max: 10, precision: 1 }),
};

export const customers: [Customer, CustomerWithPaymentData] = [customer, customerWithPaymentData];
