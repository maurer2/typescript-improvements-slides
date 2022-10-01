export const ActionNames = {
  UPDATE_COUNTER: 'UPDATE_COUNTER',
  UPDATE_DATETIME: 'UPDATE_DATETIME',
} as const;

export type ActionNamesTypes = keyof typeof ActionNames;
