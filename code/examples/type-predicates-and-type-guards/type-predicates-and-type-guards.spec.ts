import { getRandomCustomers } from './data';
import { isCustomerWithDefaultedPayments, isCustomerWithMissedPayments, isCustomerRegular } from './types';
import { Customer } from './types';

describe('check type guards for correct categorization', () => {
  let customers: ReadonlyArray<Customer>;

  beforeAll(() => {
    customers = getRandomCustomers(1000);
  });

  it('should only show list of CustomerWithDefaultedPayments when calling isCustomerWithDefaultedPayments type guard', () => {
    const customersWithDefaultedPayments = customers.filter(isCustomerWithDefaultedPayments);
    const isEveryDefaultedPaymentLargerThanZero = customersWithDefaultedPayments.every(
      ({ defaultedPayments }) => defaultedPayments > 0,
    );
    const isEveryHasDefaultedPaymentsTrue = customersWithDefaultedPayments.every(
      ({ hasDefaultedPayments }) => hasDefaultedPayments,
    );

    expect(isEveryDefaultedPaymentLargerThanZero).toBeTruthy();
    expect(isEveryHasDefaultedPaymentsTrue).toBeTruthy();
  });

  it('should only show list of CustomerWithMissedPayments when calling isCustomerWithMissedPayments type guard', () => {
    const CustomerWithMissedPayments = customers.filter(isCustomerWithMissedPayments);
    const isEveryDefaultedPaymentZero = CustomerWithMissedPayments.every(
      ({ defaultedPayments }) => defaultedPayments === 0,
    );
    const isEveryMissedPaymentLargerThanZero = CustomerWithMissedPayments.every(
      ({ missedPayments }) => missedPayments > 0,
    );
    const isEveryHasDefaultedPaymentsFalse = CustomerWithMissedPayments.every(
      ({ hasDefaultedPayments }) => !hasDefaultedPayments,
    );
    const isEveryHasMissedPaymentsTrue = CustomerWithMissedPayments.every(({ hasMissedPayments }) => hasMissedPayments);

    expect(isEveryDefaultedPaymentZero).toBeTruthy();
    expect(isEveryMissedPaymentLargerThanZero).toBeTruthy();
    expect(isEveryHasDefaultedPaymentsFalse).toBeTruthy();
    expect(isEveryHasMissedPaymentsTrue).toBeTruthy();
  });

  it('should only show list of CustomerRegular when calling isCustomerRegular type guard', () => {
    const CustomerRegular = customers.filter(isCustomerRegular);
    const isEveryDefaultedPaymentZero = CustomerRegular.every(({ defaultedPayments }) => defaultedPayments === 0);
    const isEveryMissedPaymentZero = CustomerRegular.every(({ missedPayments }) => missedPayments === 0);
    const isEveryHasDefaultedPaymentsFalse = CustomerRegular.every(({ hasDefaultedPayments }) => !hasDefaultedPayments);
    const isEveryHasMissedPaymentsFalse = CustomerRegular.every(({ hasMissedPayments }) => !hasMissedPayments);

    expect(isEveryDefaultedPaymentZero).toBeTruthy();
    expect(isEveryMissedPaymentZero).toBeTruthy();
    expect(isEveryHasDefaultedPaymentsFalse).toBeTruthy();
    expect(isEveryHasMissedPaymentsFalse).toBeTruthy();
  });
});
