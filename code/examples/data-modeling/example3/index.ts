import { loans } from './data';

const [loanJSON, loan] = loans;

console.log(loanJSON);
console.log(JSON.stringify(loan, (_, value) => {
  let valueTransformed: string;
  typeof value === 'bigint'
    ? valueTransformed = value.toString()
    : valueTransformed = value

  return valueTransformed
}, 4));
