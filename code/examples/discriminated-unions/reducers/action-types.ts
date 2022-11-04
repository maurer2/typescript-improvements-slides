export const ActionNames = {
  UPDATE_COUNTER: 'UPDATE_COUNTER',
  UPDATE_DATETIME: 'UPDATE_DATETIME',
} as const;

// export type ActionNamesTypes = keyof typeof ActionNames;

// Simplified for slides
export type ActionNamesTypes = 'UPDATE_COUNTER' | 'UPDATE_DATETIME';
