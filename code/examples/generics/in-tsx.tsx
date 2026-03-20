/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useId } from 'react';

type GenericKeyValueEntryProps<T extends string> = {
  entryKey: T;
  value: string;
};

function GenericKeyValueEntry<T extends string>({ entryKey, value }: GenericKeyValueEntryProps<T>) {
  const id = useId();

  return (
    <div>
      <dt id={id}>{entryKey}</dt>
      <dd aria-labelledby={id}>{value}</dd>
    </div>
  );
}

// No key constraints
function KeyValueList() {
  return (
    <dl>
      <GenericKeyValueEntry entryKey="key1" value="value1" />
      <GenericKeyValueEntry entryKey="key2" value="value2" />
      <GenericKeyValueEntry entryKey="key3" value="value3" /> {/* no error */}
    </dl>
  );
}

const settings = [
  { key: 'key1', value: 'value1' },
  { key: 'key2', value: 'value2' },
  { key: 'key2', value: 'value2' },
  // { quay: 'quay', value: 'value' }, // error
] as const satisfies {
  key: string;
  value: string;
}[];
type SettingsKeys = (typeof settings)[number]['key'];

// inline type annotations
function SettingsKeyValueList1() {
  return (
    <dl>
      <GenericKeyValueEntry<SettingsKeys> entryKey="key1" value="value1" />
      <GenericKeyValueEntry<SettingsKeys> entryKey="key2" value="value2" />
      <GenericKeyValueEntry<SettingsKeys> entryKey="key3" value="value3" /> {/* error */}
    </dl>
  );
}

// helper component to preset type
function SettingsKeyValueEntry(props: { entryKey: SettingsKeys; value: string }) {
  return <GenericKeyValueEntry<SettingsKeys> {...props} />;
}

function SettingsKeyValueList2() {
  return (
    <dl>
      <SettingsKeyValueEntry entryKey="key1" value="value1" />
      <SettingsKeyValueEntry entryKey="key2" value="value2" />
      <SettingsKeyValueEntry entryKey="key3" value="value3" /> {/* error */}
    </dl>
  );
}
