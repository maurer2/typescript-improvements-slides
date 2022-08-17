import { faker } from '@faker-js/faker';
import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import type { Customer } from '../../types';

import Component from './Home';
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

  it('has child components', async () => {
    const { findByTestId } = setup();

    expect(await findByTestId('page-header')).toBeInTheDocument();
    expect(await findByTestId('page-title')).toBeInTheDocument();
  });

  it("doesn't show filters when data is being fetched", async () => {
    const { findByTestId, queryAllByTestId } = setup();

    expect(await findByTestId('page-loading-indicator')).toBeInTheDocument();
    expect(queryAllByTestId('statistic-toggle').length).toBeFalsy();
  });

  it("doesn't show results list when data is being fetched", async () => {
    const { findByTestId, queryByTestId } = setup();

    expect(await findByTestId('page-loading-indicator')).toBeInTheDocument();
    expect(queryByTestId('page-content')).toBeFalsy();
  });

  it("should't have any filters enabled by default", async () => {
    const { findByTestId, findAllByRole } = setup();

    expect(await findByTestId('page-loading-indicator')).toBeInTheDocument();

    const checkboxes: HTMLInputElement[] = (await findAllByRole('checkbox')) as HTMLInputElement[];

    expect(checkboxes[0].checked).toBeFalsy();
    expect(checkboxes[1].checked).toBeFalsy();
    expect(checkboxes[2].checked).toBeFalsy();
  });

  it('should show results list when loading is false', async () => {
    const { findByTestId } = setup();

    expect(await findByTestId('page-loading-indicator')).toBeInTheDocument();
    expect(await findByTestId('page-content')).toBeInTheDocument();
  });

  it("should show 'No filters enabled' when there is no filter enabled", async () => {
    const { findByTestId, getByTestId } = setup();

    expect(await findByTestId('page-loading-indicator')).toBeInTheDocument();

    const container = getByTestId('page-header');
    expect(within(container).getByText('No filters enabled')).toBeInTheDocument();
  });

  it('should show enabled filters in page header (not page nav/toggles)', async () => {
    const { findByTestId, findAllByRole, getByTestId } = setup();

    expect(await findByTestId('page-loading-indicator')).toBeInTheDocument();

    const checkboxes: HTMLInputElement[] = (await findAllByRole('checkbox')) as HTMLInputElement[];
    const container = getByTestId('page-header');

    await userEvent.click(checkboxes[0]);
    expect(within(container).getByText(new RegExp(checkboxes[0].value))).toBeInTheDocument();

    await userEvent.click(checkboxes[1]);
    expect(within(container).getByText(new RegExp(checkboxes[1].value))).toBeInTheDocument();

    await userEvent.click(checkboxes[2]);
    expect(within(container).getByText(new RegExp(checkboxes[2].value))).toBeInTheDocument();
  });
});
