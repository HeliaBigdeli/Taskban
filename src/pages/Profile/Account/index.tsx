import Button from "../../../components/Common/Form/Button";
import Input from "../../../components/Common/Form/Input";
import { required, validate } from "../../../utils/validator";
import { useState } from "react";
const rules = {
  email: [required],
  username: [required],
  password: [required],
  newPassword: [required],
  commitNewPassword: [required],
};

type Values = {
  [key: string]: string;
};
const Account: React.FC = (): JSX.Element => {
  const [errors, setErrors] = useState<string[]>([]);
  const [values, setValues] = useState<Values>({
    email: "",
    password: "",
    username: "",
    newPassword: "",
    commitNewPassword: "",
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
      <div className="mt-[160px] mr-[58px]">
        <h2 className="text-[31px] text-bold text-right mb-L">
          اطلاعات فردی
        </h2>
        <div className="flex flex-row-reverse justify-start items-center">
          <span className="rounded-full w-[100px] h-[100px] bg-[#FFF3BF] ml-S"></span>
          <div className="py-[6px]">
            <Button
              text="ویرایش تصویر پروفایل"
              type="button"
              onClick={handleClick}
              hasIcon={false}
              className="text-brand-primary text-xl font-medium border border-brand-primary h-[55px] rounded-lg w-[212px] p-[10px] mb-S"
            />
            <p className="text-lightgray text-xs text-center font-normal">
              این تصویر برای عموم قابل نمایش است
            </p>
          </div>
        </div>
        <form className="flex flex-col gap-S">
          <Input
            name="firstname"
            id="firstname"
            type="text"
            label="نام"
            hasLabel={true}
            className="h-XL"
            onChange={(name, value) => handleChange(name, value)}
          />
          <Input
            name="lastname"
            id="lastname"
            type="text"
            label="نام خانوادگی"
            hasLabel={true}
            className="h-XL"
            onChange={(name, value) => handleChange(name, value)}
          />

          <Input
            name="telNumber"
            id="telNumber"
            type="number"
            label="شماره موبایل"
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
    </div>
  );
};

export default Account;
