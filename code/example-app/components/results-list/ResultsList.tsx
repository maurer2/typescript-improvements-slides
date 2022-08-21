import classNames from 'classnames';
import React, { Fragment, useCallback } from 'react';

import type { ReactElement } from 'react';
import type { CustomerOverview, PaymentCategories } from '../../types';
import type { ResultsListProps } from './types';

function ResultsList({ customers, activePaymentCategoriesFilters }: ResultsListProps): ReactElement {
  const ResultsListRow = useCallback(
    (customer: CustomerOverview, activeFilters: PaymentCategories[]): ReactElement | null => {
      const { firstName, lastName, missedPayments, defaultedPayments, totalPayments } = customer;

      let showRow: boolean = activeFilters.length === 0 || activeFilters.length === 3;

      if (!showRow) {
        if (missedPayments > 0 && activeFilters.includes('missed')) {
          showRow = true;
        }
        if (defaultedPayments > 0 && activeFilters.includes('defaulted')) {
          showRow = true;
        }
      }

      return showRow ? (
        <tr data-testid="results-table-body-row">
          <td className="p-2 border">{firstName}</td>
          <td className="p-2 border">{lastName}</td>
          <td
            className={classNames('p-2 border', {
              'text-yellow-500': missedPayments > 0,
            })}
            data-testid="results-table-body-cell-missed"
          >
            {missedPayments}
          </td>
          <td
            className={classNames('p-2 border', {
              'text-red-500': defaultedPayments > 0,
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
      ) : null;
    },
    []
  );

  return (
    <table
      className="w-full table-fixed border border-collapse"
      data-testid="results-table"
    >
      <thead>
        <tr>
          <th className="p-2 border">First name</th>
          <th className="p-2 border">Last name</th>
          <th className="p-2 border">Missed Payments</th>
          <th className="p-2 border">Defaulted Payments</th>
          <th className="p-2 border">Total Payments</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <Fragment key={customer.id}>{ResultsListRow(customer, activePaymentCategoriesFilters)}</Fragment>
        ))}
      </tbody>
      <tfoot className="sticky bottom-0 bg-white">
        <tr>
          <td
            colSpan={5}
            className="p-2 border text-right font-bold"
          >
            x Loaded
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default ResultsList;
