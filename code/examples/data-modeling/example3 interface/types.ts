// adapted from https://github.com/maurer2/loansome
import type currency from 'currency.js';

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
  ltv: bigint;
  loan_value: currency;
}
