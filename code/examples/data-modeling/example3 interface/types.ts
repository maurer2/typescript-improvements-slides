// adapted from https://github.com/maurer2/loansome
import currency from 'currency.js';

// JSON
export interface LoanStringlyTyped {
  id: string;
  title: string;
  tranche: string;
  available_amount: string;
  annualised_return: string;
  term_remaining: string;
  ltv: number;
  loan_value: string;
}

export interface Loan
  extends Omit<LoanStringlyTyped, 'available_amount' | 'annualised_return' | 'term_remaining' | 'ltv' | 'loan_value'> {
  available_amount: currency;
  annualised_return: currency;
  term_remaining: Date;
  ltv: BigInt;
  loan_value: currency;
}


// Test
interface Mau {
  value: string;
}
// interface MauMau extends Mau {
//   value: number; // Error
// }

type MauT = {
  value: string;
}
type MauTMauT = MauT & {
  value: number; // No Error
}
type MauTMau = Mau & {
  value: number; // No Error
}

// const mauTMau: MauTMauT = {
//   value: 5, // Error
// }
