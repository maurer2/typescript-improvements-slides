import { faker } from '@faker-js/faker';

import type { NextApiRequest, NextApiResponse } from 'next';
import type { Customer } from '../../../types/customer';

import { Failed, Loading, Success } from './types';

// http://localhost:3000/api/customers/124

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { id } = request.query;

  if (Boolean(id) && id === 'test') {
    return response.status(400).json('error');
  }

  const newId: string = !id || Array.isArray(id) ? faker.datatype.uuid() : id;

  const customer: Customer = {
    id: newId,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number({ min: 18, max: 120, precision: 1 }),
    regularPayments: faker.datatype.number({ min: 0, max: 10, precision: 1 }),
    missedPayments: faker.datatype.number({ min: 0, max: 5, precision: 1 }),
    defaultedPayments: faker.datatype.number({ min: 0, max: 3, precision: 1 }),
  };

  return response.status(200).json(customer);
}
