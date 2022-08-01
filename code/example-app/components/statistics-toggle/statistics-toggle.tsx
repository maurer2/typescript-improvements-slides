import React, { ReactElement, useId, FormEvent } from 'react';

import { StatisticsToggleProps } from './props';

function StatisticsToggle({
  count,
  category,
  value,
  onChange,
}: StatisticsToggleProps): ReactElement {
  const id: string = useId();

  function handleChange(event: FormEvent<HTMLLabelElement>): void {
    onChange(value);
    console.log(event);
  }

  return (
    <label onChange={handleChange} htmlFor={id} className="block h-full cursor-pointer">
      <span className="block">{count}</span>
      <span className="block">{category}</span>
      <input className="block" type="checkbox" id={id} value={value} />
    </label>
  );
}

export default StatisticsToggle;
