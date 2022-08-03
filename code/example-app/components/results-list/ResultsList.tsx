import React, { ReactElement } from 'react';

import { ResultsListProps } from './props';

function ResultsList({ customers }: ResultsListProps): ReactElement {
  console.log(customers);

  return (
    <table className="table-auto border-collapse border border-slate-400">
      <thead className="">
        <tr>
          <th className="border border-slate-400">First name</th>
          <th className="border border-slate-400">Last name</th>
          <th className="border border-slate-400">Age</th>
          <th className="border border-slate-400">Missed Payments</th>
          <th className="border border-slate-400">Defaulted Payments</th>
        </tr>
      </thead>
      <tbody>
        {customers.map(({
          id, firstName, lastName, age, missedPayments, defaultedPayments,
        }) => (
          <tr key={id}>
            <td className="border border-slate-400">{firstName}</td>
            <td className="border border-slate-400">{lastName}</td>
            <td className="border border-slate-400">{age}</td>
            <td className="border border-slate-400">{missedPayments}</td>
            <td className="border border-slate-400">{defaultedPayments}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultsList;
