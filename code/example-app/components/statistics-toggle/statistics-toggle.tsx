import React, { ReactElement, useId, FormEvent } from 'react';

import { StatisticsToggleProps } from './props';

function StatisticsToggle({
  count, category, value, onChange,
}: StatisticsToggleProps): ReactElement {
  const id: string = useId();

  function handleChange(event: FormEvent<HTMLLabelElement>): void {
    onChange(value);
    console.log(event);
  }

  return (
    <label onChange={handleChange} htmlFor={id}>
      <span>{count}</span>
      <span>{category}</span>
      <input type="checkbox" id={id} value={value} />
    </label>
  );
}

export default StatisticsToggle;
