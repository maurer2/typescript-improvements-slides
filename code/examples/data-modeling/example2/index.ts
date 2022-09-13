import * as data from './data.json';
import type { Customer, CustomerWithPaymentData } from './types';

const customer: Customer = data[0];
const customer2: CustomerWithPaymentData = data[0];

console.log(customer);
console.log(customer2);
