import React, { ReactElement, useCallback, Fragment } from 'react';
import classNames from 'classnames';

import type { ResultsListProps } from './types';
import type { Customer } from '../../types/customer';
import type { PaymentCategories } from '../../types/payment';

function ResultsList({ customers, activePaymentCategoriesFilters }: ResultsListProps): ReactElement {
  const ResultsListRow = useCallback((customer: Customer, activeFilters: PaymentCategories[]): ReactElement | null => {
    const {
      firstName, lastName, age, regularPayments, missedPayments, defaultedPayments,
    } = customer;

    let showRow: boolean = (activeFilters.length === 0 || activeFilters.length === 3);

    if (!showRow) {
      if (defaultedPayments > 0 && activeFilters.includes('regular')) {
        showRow = true;
      }
      if (missedPayments > 0 && activeFilters.includes('missed')) {
        showRow = true;
      }
      if (defaultedPayments > 0 && activeFilters.includes('defaulted')) {
        showRow = true;
      }
    }

    return showRow ? (
      <tr>
        <td className="p-2 border">{firstName}</td>
        <td className="p-2 border">{lastName}</td>
        <td className="p-2 border">{age}</td>
        <td className="p-2 border">{regularPayments}</td>
        <td
          className={classNames('p-2 border', {
            'text-yellow-500': missedPayments > 0,
          })}
        >
          {missedPayments}
        </td>
        <td
          className={classNames('p-2 border', {
            'text-red-500': defaultedPayments > 0,
          })}
        >
          {defaultedPayments}
        </td>
      </tr>
    ) : null;
  }, []);

  return (
    <table className="w-full table-fixed border border-collapse">
      <thead>
        <tr>
          <th className="p-2 border">First name</th>
          <th className="p-2 border">Last name</th>
          <th className="p-2 border">Age</th>
          <th className="p-2 border">Regular Payments</th>
          <th className="p-2 border">Missed Payments</th>
          <th className="p-2 border">Defaulted Payments</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <Fragment key={customer.id}>{ResultsListRow(customer, activePaymentCategoriesFilters)}</Fragment>
        ))}
      </tbody>
      <tfoot className="sticky bottom-0 bg-white">
        <tr>
          <td colSpan={6} className="p-2 border text-right font-bold">x Loaded</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default ResultsList;
