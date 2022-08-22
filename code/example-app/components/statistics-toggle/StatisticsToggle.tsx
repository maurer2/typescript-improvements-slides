import classNames from 'classnames';
import React, { useId } from 'react';

import type { ReactElement } from 'react';
import type { StatisticsToggleProps } from './types';

function StatisticsToggle({ count, category, value, isActive, onChange }: StatisticsToggleProps): ReactElement {
  const id: string = useId();

  function handleChange(): void {
    onChange(value);
  }

  return (
    <label
      onChange={handleChange}
      htmlFor={id}
      className={classNames('p-4 block h-full border select-none cursor-pointer', {
        'bg-gray-100': isActive,
      })}
      data-testid="statistic-toggle"
    >
      <dl className="flex flex-row-reverse gap-4 items-center">
        <dt className="grow">{category}</dt>
        <dd className="text-lg">{count}</dd>
      </dl>

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
