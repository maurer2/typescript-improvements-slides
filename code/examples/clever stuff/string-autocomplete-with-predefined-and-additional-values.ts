// https://www.totaltypescript.com/typescript-5-3#:~:text=Automatic%20Loose%20Autocomplete%20on%20strings
// https://stackoverflow.com/questions/69793164/typescript-weird-type-intersection-of-string
type EventNames =
  | "click"
  | "focus"
  | "blur"
  | (string & {});

type EventManager = Record<EventNames, unknown> & {
  value1: EventNames,
  value2: EventNames,
};

const x: EventManager = {
  name: 'name',
  click: true,
  focus: false,
  blur: false,
  value1: 'blur',
  value2: 'oasis'
}
