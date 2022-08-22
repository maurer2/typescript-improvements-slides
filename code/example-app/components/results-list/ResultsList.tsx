import classNames from 'classnames';
import React, { Fragment, useCallback, useMemo } from 'react';

import type { ReactElement } from 'react';
import type { CustomerOverview, PaymentCategories } from '../../types';
import type { ResultsListProps } from './types';

function ResultsList({ customers, activePaymentCategoriesFilters }: ResultsListProps): ReactElement {
  const ResultsListRow = useCallback((customer: CustomerOverview, activeFilters: PaymentCategories[]): ReactElement => {
    const { firstName, lastName, missedPayments, defaultedPayments, totalPayments } = customer;

    return (
      <tr data-testid="results-table-body-row">
        <td className="p-2 border">{firstName}</td>
        <td className="p-2 border">{lastName}</td>
        <td
          className={classNames('p-2 border', {
            'text-yellow-500': missedPayments > 0,
            'bg-gray-100': activeFilters.includes('missed'),
          })}
          data-testid="results-table-body-cell-missed"
        >
          {missedPayments}
        </td>
        <td
          className={classNames('p-2 border', {
            'text-red-500': defaultedPayments > 0,
            'bg-gray-100': activeFilters.includes('defaulted'),
          })}
          data-testid="results-table-body-cell-defaulted"
        >
          {defaultedPayments}
        </td>
        <td
          className="p-2 border"
          data-testid="results-table-body-cell-regular"
        >
          {totalPayments}
        </td>
      </tr>
    );
  }, []);

  const filteredCustomers: CustomerOverview[] = useMemo(() => {
    // don't filter results if no filter is enabled
    if (!activePaymentCategoriesFilters.length) {
      return customers;
    }

    if (activePaymentCategoriesFilters.includes('missed') && activePaymentCategoriesFilters.includes('defaulted')) {
      return customers.filter((customer) => Boolean(customer.missedPayments) && Boolean(customer.defaultedPayments));
    }

    if (activePaymentCategoriesFilters.includes('missed')) {
      return customers.filter((customer) => Boolean(customer.missedPayments));
    }

    return customers.filter((customer) => Boolean(customer.defaultedPayments));
  }, [customers, activePaymentCategoriesFilters]);

  return (
    <table
      className="w-full table-fixed border border-collapse"
      data-testid="results-table"
    >
      <thead>
        <tr>
          <th className="p-2 border whitespace-nowrap">First name</th>
          <th className="p-2 border whitespace-nowrap">Last name</th>
          <th
            className={classNames('p-2 border whitespace-nowrap', {
              'bg-gray-100': activePaymentCategoriesFilters.includes('missed'),
            })}
          >
            Missed payments
          </th>

          <th
            className={classNames('p-2 border whitespace-nowrap', {
              'bg-gray-100': activePaymentCategoriesFilters.includes('defaulted'),
            })}
          >
            Defaulted payments
          </th>
          <th className="p-2 border whitespace-nowrap">Total payments</th>
        </tr>
      </thead>
      <tbody>
        {filteredCustomers.map((customer) => (
          <Fragment key={customer.id}>{ResultsListRow(customer, activePaymentCategoriesFilters)}</Fragment>
        ))}
      </tbody>
      <tfoot className="sticky bottom-0">
        <tr>
          <td
            colSpan={5}
            className="p-2 border-t text-right font-bold bg-gray-100"
          >
            {filteredCustomers.length} results loaded
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default ResultsList;
