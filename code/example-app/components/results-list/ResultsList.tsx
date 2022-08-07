import React, { ReactElement, useCallback, Fragment } from 'react';
import classNames from 'classnames';

import { ResultsListProps } from './types';

function ResultsList({ customers, activePaymentCategories }: ResultsListProps): ReactElement {
  const ResultsListRow = useCallback((customer: typeof customers[number]): ReactElement => {
    const {
      firstName, lastName, age, regularPayments, missedPayments, defaultedPayments,
    } = customer;

    // const hasRegularPayments = regularPayments > 0;
    const hasMissedPayments = missedPayments > 0;
    const hasDefaultedPayments = defaultedPayments > 0;

    return (
      <tr>
        <td className="border">{firstName}</td>
        <td className="border">{lastName}</td>
        <td className="border">{age}</td>
        <td className="border">{regularPayments}</td>
        <td
          className={classNames('border', {
            'text-yellow-500': hasMissedPayments,
          })}
        >
          {missedPayments}
        </td>
        <td
          className={classNames('border', {
            'text-red-500': hasDefaultedPayments,
          })}
        >
          {defaultedPayments}
        </td>
      </tr>
    );
  }, []);

  return (
    <table className="w-full table-fixed border border-collapse">
      <thead>
        <tr>
          <th className="border">First name</th>
          <th className="border">Last name</th>
          <th className="border">Age</th>
          <th className="border">Regular Payments</th>
          <th className="border">Missed Payments</th>
          <th className="border">Defaulted Payments</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <Fragment key={customer.id}>{ResultsListRow(customer)}</Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default ResultsList;
