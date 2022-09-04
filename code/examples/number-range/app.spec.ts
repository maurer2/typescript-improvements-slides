import { getRandomSortCode } from './app';

describe('getRandomSortCode', () => {
  it('should return a valid sort code', () => {
    const sortCode = getRandomSortCode();
    expect(sortCode.length).toBe(3);

    const isValidSortCode = sortCode.every((sortCodePart) => {
      return sortCodePart > 0 && sortCodePart < 100;
    });
    expect(isValidSortCode).toBeTruthy();
  });

  test.each([...Array(100)])(
    "should return a valid sort code - repeated",
    () => {
      const sortCode = getRandomSortCode();
      expect(sortCode.length).toBe(3);

      const isValidSortCode = sortCode.every((sortCodePart) => {
        return sortCodePart > 0 && sortCodePart < 100;
      });
      expect(isValidSortCode).toBeTruthy();
    }
  );

  it.todo('check recursion depth/call counter');
});
