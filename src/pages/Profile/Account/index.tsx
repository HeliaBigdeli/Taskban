import Button from "../../../components/Common/Form/Button";
import Input from "../../../components/Common/Form/Input";
import { useState, useEffect } from 'react'
import {
  required,
  email,
  validate,
  strong,
  minLength,
} from "../../../utils/validator/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const rules = {
  email: [required, email],
  username: [required],
  currentPassword: [required],
  newPassword: [required, strong, minLength(8)],
  confirmNewPassword: [required]
};

type Values = {
  [key: string]: string;
};

const Information: React.FC = (): JSX.Element => {
  const [errors, setErrors] = useState<string[]>([]);
  const [values, setValues] = useState<Values>({
    email: "",
    currentPassword: "",
    username: "",
    newPassword: "",
    confirmNewPassword: ""
  });

  useEffect(() => {
    errors?.map((error) => {
      toast.error(error, {
        position: "bottom-left",
        autoClose: 3000,
      });
    });
  }, [errors]);

  const handleChange = (name: string, value: string) => {
    setValues({ ...values, [name]: value });
  };

  const handleClick = () => {
    const resultErrors = validate(values, rules);
    setErrors(resultErrors);
    
    if (values.newPassword != values.confirmNewPassword) {
      toast.error("تکرار رمز عبور جدید با رمز عبور جدید مطابقت ندارد", {
        position: "bottom-left",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex flex-row-reverse">
      <div className="w-[354px] mt-[160px] mr-[58px]">
        <h2 className="text-[31px] text-bold text-right mb-[32px]" >اطلاعات حساب</h2>
        <form className="flex flex-col gap-S">
          <Input
            name="email"
            id="email"
            type="email"
            label="ایمیل"
            hasLabel={true}
            className="h-XL"
            onChange={(name, value) => handleChange(name, value)}
          />
          <Input
            name="username"
            id="username"
            type="text"
            label="نام کاربری"
            hasLabel={true}
            className="h-XL"
            onChange={(name, value) => handleChange(name, value)}
          />

          <Input
            name="currentPassword"
            id="currentPassword"
            type="password"
            label="رمز عبور فعلی"
            className="h-XL"
            hasLabel={true}
            onChange={(name, value) => handleChange(name, value)}
          />
          <Input
            name="newPassword"
            id="newPassword"
            type="password"
            label="رمز عبور جدید"
            className="h-XL"
            hasLabel={true}
            onChange={(name, value) => handleChange(name, value)}
          />
          <Input
            name="confirmNewPassword"
            id="confirmNewPassword"
            type="password"
            label="تکرار رمز عبور جدید"
            className="h-XL"
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
      <ToastContainer style={{ width: "400px" }} />
    </div>
  );
}

export default Information;
