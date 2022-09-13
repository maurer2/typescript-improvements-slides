// adapted from https://github.com/maurer2/loansome
import currency from 'currency.js';

export type LoanStringlyTyped = {
  id: string;
  title: string;
  tranche: string;
  available_amount: string;
  annualised_return: string;
  term_remaining: string;
  ltv: string;
  loan_value: string;
};

export type Loan = Omit<LoanStringlyTyped, 'available_amount' | 'annualised_return' | 'loan_value' | 'term_remaining'> & {
  available_amount: currency,
  annualised_return: currency,
  loan_value: currency
  term_remaining: Date;
};

