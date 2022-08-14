import React from 'react';
import { render } from '@testing-library/react';
import { faker } from '@faker-js/faker';

import { findLastKey } from 'cypress/types/lodash';
import Component from './Home';
import type { Customer } from '../../types/customer';
// import fetchData from '../../services/fetch-data';

jest.mock('../../services/fetch-data', () => jest.fn().mockImplementation(() => {
  const customers: Customer[] = Array.from({ length: 5 }, () => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number({ min: 18, max: 120, precision: 1 }),
    regularPayments: faker.datatype.number({ min: 0, max: 10, precision: 1 }),
    missedPayments: faker.datatype.number({ min: 0, max: 5, precision: 1 }),
    defaultedPayments: faker.datatype.number({ min: 0, max: 3, precision: 1 }),
  }));

  return Promise.resolve(customers);
}));
// const mockFetchData = jest.mocked(fetchData, true);

describe('Home Page', () => {
  const setup = () => render(<Component />);

  it('renders the component - first loading indictor, then customer list', async () => {
    const { findByTestId } = setup();

    expect(await findByTestId('page-loading-indicator')).toBeInTheDocument();
    expect(await findByTestId('page-wrapper')).toBeInTheDocument();
  });

  it("doesn't show filters when data is being fetched", async () => {
    const { findByTestId, queryAllByTestId } = setup();

    expect(await findByTestId('page-loading-indicator')).toBeInTheDocument();
    expect(queryAllByTestId('statistic-toggle').length).toBeFalsy();
  });

  it("doesn't show results list when data is being fetched", async () => {
    const { findByTestId, queryAllByTestId } = setup();

    expect(await findByTestId('page-loading-indicator')).toBeInTheDocument();
    expect(queryAllByTestId('page-content').length).toBeFalsy();
  });

  it("should't have any filters enabled by default", async () => {
    const { findByTestId, findAllByRole } = setup();

    expect(await findByTestId('page-loading-indicator')).toBeInTheDocument();
    expect(await findByTestId('page-wrapper')).toBeInTheDocument();

    const checkboxes: HTMLInputElement[] = await findAllByRole('checkbox') as HTMLInputElement[];

    expect((checkboxes[0]).checked).toBeFalsy();
    expect((checkboxes[1]).checked).toBeFalsy();
    expect((checkboxes[2]).checked).toBeFalsy();
  });
});
