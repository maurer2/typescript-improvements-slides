/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Component from './StatisticsToggle';
import type { StatisticsToggleProps } from './types';

describe('Statistic Toggle', () => {
  const mockOnChange = jest.fn();

  const propsDefault: StatisticsToggleProps = {
    count: 10,
    category: 'category1',
    value: 'regular',
    isActive: false,
    onChange: mockOnChange,
  };

  const setup = (props?: StatisticsToggleProps) => render(
    <Component
      {...propsDefault}
      {...props}
    />,
  );

  it('renders the component', () => {
    const { getByTestId } = setup();

    expect(getByTestId('statistic-toggle')).toBeInTheDocument();
  });

  it('shows props in markup', () => {
    const { getByText, getByRole } = setup();

    expect(getByText('category1')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();

    expect(getByRole('checkbox')).toBeInTheDocument();
  });

  it('triggers onChange callback on click', async () => {
    const { getByRole } = setup();

    await userEvent.click(getByRole('checkbox'));

    expect(mockOnChange).toHaveBeenCalled();
  });
});
