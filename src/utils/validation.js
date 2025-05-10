export const isEmailValid = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
};

export function isPasswordValid(password) {
    const minLength = /.{6,}/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasNumber = /[0-9]/;
    const hasSpecialChar = /[^A-Za-z0-9]/;
  
    return (
      minLength.test(password) &&
      hasUpperCase.test(password) &&
      hasLowerCase.test(password) &&
      hasNumber.test(password) &&
      hasSpecialChar.test(password)
    );
  }

export const doPasswordsMatch = (password, confirmPassword) => {
    return password === confirmPassword;
};

export const isDateValid = (date) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;
    return regex.test(date);
};
