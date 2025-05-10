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
      expect(isPasswordValid('Abc123!')).toBe(true);
    });
  
    test('short password fails', () => {
      expect(isPasswordValid('A1!')).toBe(false); 
    });
  
    test('password without uppercase fails', () => {
      expect(isPasswordValid('abc123!')).toBe(false);
    });
  
    test('password without lowercase fails', () => {
      expect(isPasswordValid('ABC123!')).toBe(false);
    });
  
    test('password without number fails', () => {
      expect(isPasswordValid('Abcdef!')).toBe(false);
    });
  
    test('password without special character fails', () => {
      expect(isPasswordValid('Abc1234')).toBe(false);
    });
  
    test('matching passwords pass', () => {
      expect(doPasswordsMatch('Abc123!', 'Abc123!')).toBe(true);
    });
  
    test('non-matching passwords fail', () => {
      expect(doPasswordsMatch('Abc123!', 'Abc321!')).toBe(false);
    });
  
    test('valid date passes', () => {
      expect(isDateValid('01/01/2000')).toBe(true);
    });
  
    test('invalid date fails', () => {
      expect(isDateValid('2000-01-01')).toBe(false);
    });
  });
  
