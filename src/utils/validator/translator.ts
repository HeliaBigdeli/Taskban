type Values = {
    [key: string] : string
}
const dictionary:Values = {
    fullName: 'نام کامل',
    email: 'ایمیل',
    password: 'رمز عبور',
    rules: 'قوانین و مقررات',
    username:'نام کاربری',
    currentPassword:'رمز عبور فعلی',
    newPassword:'رمز عبور جدید',
    confirmNewPassword:'تکرار رمز عبور جدید'
}

const Translator = (input: string): string => {
    return dictionary[input]
}

export default Translator;