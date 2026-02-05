import type { Counter, DateTime, CounterAction, DateTimeAction } from './types.ts';
import { ActionNames } from './action-types.ts';

export function updateCounter(counter: Counter): CounterAction {
  const action: CounterAction = {
    type: ActionNames.UPDATE_COUNTER, // discriminant property
    payload: counter,
  };

  return action;
}

export function updateDateTime(dateTime: DateTime): DateTimeAction {
  const action: DateTimeAction = {
    type: ActionNames.UPDATE_DATETIME, // discriminant property
    payload: dateTime,
  };

  return action;
}
