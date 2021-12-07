export const fullNameValidator = name =>
    /^[A-Za-z]+$/.test(name) && 20 > name.length

export const emailValidator = email =>
    /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)

export const passwordValidator = password =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)

export const confirmPasswordValidator = (password, confirmPassword) =>
    password === confirmPassword