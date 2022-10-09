export type Person = {
  name: string;
  realName: string;
};

export type PersonWithInitials = Person & {
  initials: string;
};
