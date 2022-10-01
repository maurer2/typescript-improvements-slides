import { faker } from '@faker-js/faker';

import type { Customer, CustomerWithDefaultedPayments, CustomerWithMissedPayments, CustomerRegular } from './types';
import { isCustomerWithDefaultedPayments, isCustomerWithMissedPayments, isCustomerRegular } from './types';

function showCustomerWithDefaultedPayments(customer: CustomerWithDefaultedPayments): void {
  console.log('CustomerWithDefaultedPayments: ', customer);
}

function showCustomerWithMissedPayments(customer: CustomerWithMissedPayments): void {
  console.log('CustomerWithMissedPayments: ', customer);
}

function showCustomerRegular(customer: CustomerRegular): void {
  console.log('CustomerRegular: ', customer);
}

function showCustomerDetails(customer: Customer): void {
  if (isCustomerWithDefaultedPayments(customer)) {
    // const type = customer;
    showCustomerWithDefaultedPayments(customer);
  }

  if (isCustomerWithMissedPayments(customer)) {
    // const type = customer;
    showCustomerWithMissedPayments(customer);
  }

  if (isCustomerRegular(customer)) {
    // const type = customer;
    showCustomerRegular(customer);
  }
}

const customerRegular: Customer = {
  id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  defaultedPayments: 0,
  missedPayments: 0,
  totalPayments: faker.datatype.number({ min: 0, max: 100, precision: 1 }),
};

const customerWithDefaultedPayments: Customer = {
  id: faker.datatype.uuid(),
  firstName: 'Dee',
  lastName: 'Fault',
  // defaultedPayments: faker.datatype.number({ min: 0, max: 3, precision: 1 }),
  // missedPayments: faker.datatype.number({ min: 0, max: 5, precision: 1 }),
  defaultedPayments: 10,
  missedPayments: 10,
  totalPayments: faker.datatype.number({ min: 0, max: 100, precision: 1 }),
};

const customerWithMissedPayments: Customer = {
  id: faker.datatype.uuid(),
  firstName: 'Miss',
  lastName: 'Ed',
  // defaultedPayments: faker.datatype.number({ min: 0, max: 3, precision: 1 }),
  // missedPayments: faker.datatype.number({ min: 0, max: 5, precision: 1 }),
  defaultedPayments: 0,
  missedPayments: 10,
  totalPayments: faker.datatype.number({ min: 0, max: 100, precision: 1 }),
};

showCustomerDetails(customerWithDefaultedPayments);
showCustomerDetails(customerWithMissedPayments);
showCustomerDetails(customerRegular);
