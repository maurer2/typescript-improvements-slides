import React, { ReactElement, useId } from 'react';
import classNames from 'classnames';

import { StatisticsToggleProps } from './types';

function StatisticsToggle({
  count, category, value, isActive, onChange,
}: StatisticsToggleProps): ReactElement {
  const id: string = useId();

  function handleChange(): void {
    onChange(value);
  }

  return (
    <label
      onChange={handleChange}
      htmlFor={id}
      className={classNames('p-4 flex gap-4 items-center h-full border select-none cursor-pointer', {
        'border-red-500': isActive,
      })}
    >
      <span className="text-lg">{count}</span>
      <span>{category}</span>
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
