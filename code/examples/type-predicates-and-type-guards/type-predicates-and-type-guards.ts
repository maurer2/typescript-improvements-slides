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
  const currentType = customer; // Customer

  if (isCustomerWithDefaultedPayments(customer)) {
    const currentType = customer; // CustomerWithDefaultedPayments

    showCustomerWithDefaultedPayments(customer);
    // showCustomerWithMissedPayments(customer); // Error
    // showCustomerRegular(customer); // Error
  }

  if (isCustomerWithMissedPayments(customer)) {
    const currentType = customer; // CustomerWithMissedPayments

    showCustomerWithMissedPayments(customer);
    // showCustomerWithDefaultedPayments(customer); // Error
    // showCustomerRegular(customer); // Error
  }

  if (isCustomerRegular(customer)) {
    const currentType = customer; // CustomerRegular

    showCustomerRegular(customer);
    // showCustomerWithMissedPayments(customer); // Error
    // showCustomerWithDefaultedPayments(customer); // Error
  }
}

const customerRegular: Customer = {
  id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  defaultedPayments: 0,
  missedPayments: 0,
  hasDefaultedPayments: false,
  hasMissedPayments: false,
};

const customerWithDefaultedPayments: Customer = {
  id: faker.datatype.uuid(),
  firstName: 'Dee',
  lastName: 'Fault',
  defaultedPayments: 10,
  missedPayments: 10,
  hasDefaultedPayments: true,
  hasMissedPayments: false,
};

const customerWithMissedPayments: Customer = {
  id: faker.datatype.uuid(),
  firstName: 'Miss',
  lastName: 'Ed',
  defaultedPayments: 0,
  missedPayments: 10,
  hasDefaultedPayments: false,
  hasMissedPayments: true,
};

showCustomerDetails(customerWithDefaultedPayments);
showCustomerDetails(customerWithMissedPayments);
showCustomerDetails(customerRegular);
