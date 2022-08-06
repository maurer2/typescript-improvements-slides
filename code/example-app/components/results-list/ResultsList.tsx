import React, { ReactElement } from 'react';

import { ResultsListProps } from './types';

function ResultsList({ customers }: ResultsListProps): ReactElement {
  console.log(customers);

  return (
    <table className="w-full table-fixed border-collapse border">
      <thead className="">
        <tr>
          <th className="border ">First name</th>
          <th className="border ">Last name</th>
          <th className="border ">Age</th>
          <th className="border ">Missed Payments</th>
          <th className="border ">Defaulted Payments</th>
        </tr>
      </thead>
      <tbody>
        {customers.map(({
          id, firstName, lastName, age, missedPayments, defaultedPayments,
        }) => (
          <tr key={id}>
            <td className="border ">{firstName}</td>
            <td className="border ">{lastName}</td>
            <td className="border ">{age}</td>
            <td className="border ">{missedPayments}</td>
            <td className="border ">{defaultedPayments}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultsList;
