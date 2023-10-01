import Button from "../../../components/Common/Form/Button";
import Input from "../../../components/Common/Form/Input";
import {useState} from 'react'
import { required, validate } from "../../../utils/validator";
const rules = {
  email: [required],
  username: [required],
  password: [required],
  newPassword:[required],
  commitNewPassword:[required]
};

type Values = {
  [key: string]: string;
};

const Information: React.FC = ():JSX.Element => {
  const [errors, setErrors] = useState<string[]>([]);
  const [values, setValues] = useState<Values>({
    email: "",
    password: "",
    username:"",
    newPassword:"",
    commitNewPassword:""
  });
  const handleChange = (name: string, value: string) => {
    setValues({ ...values, [name]: value });
  };

  const handleClick = () => {
    const resultErrors = validate(values, rules);
    setErrors(resultErrors);
  };

    return (
      <div className="flex flex-row-reverse">
      <div className="w-[354px] mt-[170px] mr-[58px]">
       <h2 className="text-[31px] text-bold text-right mb-[32px]" >اطلاعات حساب</h2>
        <form >
        <Input
            name="email"
            id="email"
            type="email"
            label="ایمیل"
            hasLabel={true}
            className="h-XL mb-S"
            onChange={(name, value) => handleChange(name, value)}
          />
            <Input
            name="username"
            id="username"
            type="text"
            label="نام کاربری"
            hasLabel={true}
            className="h-XL mb-S"
            onChange={(name, value) => handleChange(name, value)}
          />

           <Input
            name="password"
            id="password"
            type="password"
            label="رمز عبور فعلی"
            className="h-XL mb-S"
            hasLabel={true}
            onChange={(name, value) => handleChange(name, value)}
          />
          <Input
            name="newPassword"
            id="newPassword"
            type="password"
            label="رمز عبور جدید"
            className="h-XL mb-S"
            hasLabel={true}
            onChange={(name, value) => handleChange(name, value)}
          />
          <Input
            name="commitNewPassword"
            id="commitNewPassword"
            type="password"
            label="تکرار رمز عبور جدید"
            className="h-XL mb-S"
            hasLabel={true}
            onChange={(name, value) => handleChange(name, value)}
          />
           <Button
            text="ثبت تغییرات"
            type="button"
            onClick={handleClick}
            hasIcon={false}
            className="text-white text-sm font-black leading-normal h-XL self-stretch rounded-md bg-brand-primary w-full mt-M"
          />
        </form>
        </div>
      </div>
    );
  }
  
export default Information;