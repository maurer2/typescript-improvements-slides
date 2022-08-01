import React, { ReactElement } from 'react';

import { StatisticsToggleProps } from './props';

function StatisticsToggle({ children }: StatisticsToggleProps): ReactElement {
  function handleClick() {
    console.log('click', children);
  }
  return (
    <button type="button" onClick={handleClick}>
      Click
    </button>
  );
}

export default StatisticsToggle;
