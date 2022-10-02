import type { Customer, CustomerWithDefaultedPayments, CustomerWithMissedPayments, CustomerRegular } from './types';
import { isCustomerWithDefaultedPayments, isCustomerWithMissedPayments, isCustomerRegular } from './types';
import { customerRegular, customerWithDefaultedPayments, customerWithMissedPayments } from './data';

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

showCustomerDetails(customerWithDefaultedPayments);
showCustomerDetails(customerWithMissedPayments);
showCustomerDetails(customerRegular);
