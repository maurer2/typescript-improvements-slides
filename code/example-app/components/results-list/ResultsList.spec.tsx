import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';
import React from 'react';

import type { Customer } from '../../types';
import type { ResultsListProps } from './types';

import Component from './ResultsList';

describe('Results List', () => {
  const propsDefault: ResultsListProps = {
    customers: [],
    activePaymentCategoriesFilters: [],
  };

  const repeatedFields: Pick<Customer, 'firstName' | 'lastName' | 'age'> = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number({ min: 18, max: 120, precision: 1 }),
  };

  const regularPaymentsOnly: Customer[] = [
    {
      ...repeatedFields,
      id: 'regularPayments1',
      regularPayments: 5,
      missedPayments: 0,
      defaultedPayments: 0,
    },
    {
      ...repeatedFields,
      id: 'regularPayments2',
      regularPayments: 5,
      missedPayments: 0,
      defaultedPayments: 0,
    },
    {
      ...repeatedFields,
      id: 'regularPayments3',
      regularPayments: 5,
      missedPayments: 0,
      defaultedPayments: 0,
    },
  ];

  const missedPaymentsOnly: Customer[] = [
    {
      ...repeatedFields,
      id: 'missedPayments1',
      regularPayments: 0,
      missedPayments: 3,
      defaultedPayments: 0,
    },
    {
      ...repeatedFields,
      id: 'missedPayments2',
      regularPayments: 0,
      missedPayments: 3,
      defaultedPayments: 0,
    },
    {
      ...repeatedFields,
      id: 'missedPayments3',
      regularPayments: 0,
      missedPayments: 3,
      defaultedPayments: 0,
    },
  ];

  const defaultedPaymentsOnly: Customer[] = [
    {
      ...repeatedFields,
      id: 'missedPayments1',
      regularPayments: 0,
      missedPayments: 0,
      defaultedPayments: 1,
    },
    {
      ...repeatedFields,
      id: 'missedPayments2',
      regularPayments: 0,
      missedPayments: 3,
      defaultedPayments: 1,
    },
    {
      ...repeatedFields,
      id: 'missedPayments3',
      regularPayments: 0,
      missedPayments: 3,
      defaultedPayments: 1,
    },
  ];

  describe('Regular Payments', () => {
    const setup = (props: ResultsListProps) => render(
      <Component
        {...propsDefault}
        {...props}
      />,
    );

    it('renders the results table', () => {
      const { getByTestId } = setup({
        customers: regularPaymentsOnly,
        activePaymentCategoriesFilters: ['regular'],
      });

      expect(getByTestId('results-table')).toBeInTheDocument();
    });

    it('shows all rows for regular payments', () => {
      const { queryAllByTestId } = setup({
        customers: regularPaymentsOnly,
        activePaymentCategoriesFilters: ['regular'],
      });

      expect(queryAllByTestId('results-table-body-row').length).toBe(3);
      expect(queryAllByTestId('results-table-body-cell-regular').length).toBe(3);
    });

    it("shouldn't contain any regular payments with 0 values for regular payments", () => {
      const { queryAllByTestId } = setup({
        customers: regularPaymentsOnly,
        activePaymentCategoriesFilters: ['regular'],
      });

      const tableValues = queryAllByTestId('results-table-body-cell-regular').map((element) => element.textContent);
      expect(tableValues.includes('0')).toBeFalsy();
    });
  });

  describe('Missed Payments', () => {
    const setup = (props: ResultsListProps) => render(
      <Component
        {...propsDefault}
        {...props}
      />,
    );

    it('renders the results table', () => {
      const { getByTestId } = setup({
        customers: missedPaymentsOnly,
        activePaymentCategoriesFilters: ['missed'],
      });

      expect(getByTestId('results-table')).toBeInTheDocument();
    });

    it('shows all rows for missed payments', () => {
      const { queryAllByTestId } = setup({
        customers: missedPaymentsOnly,
        activePaymentCategoriesFilters: ['missed'],
      });

      expect(queryAllByTestId('results-table-body-row').length).toBe(3);
    });

    it('shows all rows for missed payments', () => {
      const { queryAllByTestId } = setup({
        customers: missedPaymentsOnly,
        activePaymentCategoriesFilters: ['missed'],
      });

      expect(queryAllByTestId('results-table-body-row').length).toBe(3);
      expect(queryAllByTestId('results-table-body-cell-missed').length).toBe(3);
    });

    it("shouldn't contain any missed payments with 0 values for missed payments", () => {
      const { queryAllByTestId } = setup({
        customers: missedPaymentsOnly,
        activePaymentCategoriesFilters: ['missed'],
      });

      const tableValues = queryAllByTestId('results-table-body-cell-missed').map((element) => element.textContent);
      expect(tableValues.includes('0')).toBeFalsy();
    });
  });

  describe('Defaulted Payments', () => {
    const setup = (props: ResultsListProps) => render(
      <Component
        {...propsDefault}
        {...props}
      />,
    );

    it('renders the results table', () => {
      const { getByTestId } = setup({
        customers: defaultedPaymentsOnly,
        activePaymentCategoriesFilters: ['defaulted'],
      });

      expect(getByTestId('results-table')).toBeInTheDocument();
    });

    it('shows all rows for defaulted payments', () => {
      const { queryAllByTestId } = setup({
        customers: defaultedPaymentsOnly,
        activePaymentCategoriesFilters: ['defaulted'],
      });

      expect(queryAllByTestId('results-table-body-row').length).toBe(3);
    });

    it('shows all rows for defaulted payments', () => {
      const { queryAllByTestId } = setup({
        customers: defaultedPaymentsOnly,
        activePaymentCategoriesFilters: ['defaulted'],
      });

      expect(queryAllByTestId('results-table-body-row').length).toBe(3);
      expect(queryAllByTestId('results-table-body-cell-defaulted').length).toBe(3);
    });

    it("shouldn't contain any missed payments with 0 values for missed payments", () => {
      const { queryAllByTestId } = setup({
        customers: defaultedPaymentsOnly,
        activePaymentCategoriesFilters: ['defaulted'],
      });

      const tableValues = queryAllByTestId('results-table-body-cell-defaulted').map((element) => element.textContent);
      expect(tableValues.includes('0')).toBeFalsy();
    });
  });

  test.todo('Two enabled');
  test.todo('Three enabled --> Same as no filter enabled');
});
