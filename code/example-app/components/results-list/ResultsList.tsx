import React, { ReactElement } from 'react';

import { ResultsListProps } from './props';

function ResultsList({ children }: ResultsListProps): ReactElement {
  console.log(children);

  return (
    <ul>
      <li>
        Test
      </li>
    </ul>
  );
}

export default ResultsList;
