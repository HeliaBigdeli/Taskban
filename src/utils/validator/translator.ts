type Values = {
    [key: string] : string
}
const dictionary:Values = {
    fullName: 'نام کامل',
    email: 'ایمیل',
    password: 'رمز عبور',
    rules: 'قوانین و مقررات'
}

const Translator = (input: string): string => {
    return dictionary[input]
}

export default Translator;