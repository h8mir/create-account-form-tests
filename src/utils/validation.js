export const isEmailValid = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
};

export const isPasswordValid = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;
    return regex.test(password);
};

export const doPasswordsMatch = (password, confirmPassword) => {
    return password === confirmPassword;
};

export const isDateValid = (date) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;
    return regex.test(date);
};
