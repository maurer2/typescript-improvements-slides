// https://github.com/microsoft/TypeScript/pull/36696

export interface InterfaceParent {
  value: string;
  value2: null | string;
}
export interface InterfaceChild extends InterfaceParent {
  value: string; // ok
  // value: string | number; // error
  // value: null; // error
  value2: string; // ok
  // value2: number; // error
  // value2: null; // ok
}

export type TypeParent = {
  value: string;
};
export type TypeParent2 = {
  value: null | string;
};

export type TypeChild = TypeParent & {
  value: string;
};
export type TypeChild2 = TypeParent2 & {
  value: string;
};

export type TypeChildNumber = TypeParent & {
  value: number;
};
export type TypeChildNumber2 = TypeParent2 & {
  value: number | null;
};

export type TypeChildUnion = TypeParent & {
  value: string | number | null;
};
export type TypeChildUnion2 = TypeParent2 & {
  value: string | number | null;
};

export type TypeChildNull = TypeParent & {
  value: null;
};
export type TypeChildNull2 = TypeParent2 & {
  value: null;
};
