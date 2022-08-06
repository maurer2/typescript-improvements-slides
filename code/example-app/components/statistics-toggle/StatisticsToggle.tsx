import React, { ReactElement, useId } from 'react';
import classNames from 'classnames';

import { StatisticsToggleProps } from './types';

function StatisticsToggle({
  count,
  category,
  value,
  isActive,
  onChange,
}: StatisticsToggleProps): ReactElement {
  const id: string = useId();

  function handleChange(): void {
    onChange(value);
  }

  return (
    <label
      onChange={handleChange}
      htmlFor={id}
      className={classNames('flex gap-4 p-4 h-full cursor-pointer border text-lg', {
        'border-red-500': isActive,
      })}
    >
      <span className="block">{count}</span>
      <span className="block">{category}</span>
      <input
        className="hidden"
        type="checkbox"
        id={id}
        value={value}
      />
    </label>
  );
}

export default StatisticsToggle;
