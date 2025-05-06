import {
    isEmailValid,
    isPasswordValid,
    doPasswordsMatch,
    isDateValid,
  } from '../utils/validation';
  
  describe('Validation Functions', () => {
    test('valid email passes', () => {
      expect(isEmailValid('test@example.com')).toBe(true);
    });
  
    test('invalid email fails', () => {
      expect(isEmailValid('testexample.com')).toBe(false);
    });
  
    test('valid password passes', () => {
      expect(isPasswordValid('123456')).toBe(true);
    });
  
    test('short password fails', () => {
      expect(isPasswordValid('123')).toBe(false);
    });
  
    test('matching passwords pass', () => {
      expect(doPasswordsMatch('abc123', 'abc123')).toBe(true);
    });
  
    test('non-matching passwords fail', () => {
      expect(doPasswordsMatch('abc123', 'abc321')).toBe(false);
    });
  
    test('valid date passes', () => {
      expect(isDateValid('01/01/2000')).toBe(true);
    });
  
    test('invalid date fails', () => {
      expect(isDateValid('2000-01-01')).toBe(false);
    });
  });
  