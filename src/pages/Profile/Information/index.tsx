
import Button from "../../../components/Common/Form/Button";
import Input from "../../../components/Common/Form/Input";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import {
  required,
  email,
  validate,
  strong,
  minLength,
} from "../../../utils/validator/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

=======
import ProfileImage from "../../../components/Common/ProfileImage";
import { required, validate } from "../../../utils/validator";
import { useState,useRef } from "react";
>>>>>>> 73e26f9d712f70a634d3bc832f7016f35aa5c1fb
const rules = {
  email: [required],
  username: [required],
<<<<<<< HEAD
  currentPassword: [required],
  newPassword: [required, strong, minLength(8)],
  confirmNewPassword: [required],
=======
  password: [required],
  newPassword: [required],
  commitNewPassword: [required],
>>>>>>> 73e26f9d712f70a634d3bc832f7016f35aa5c1fb
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
<<<<<<< HEAD
    confirmNewPassword: "",
=======
    commitNewPassword: "",
>>>>>>> 73e26f9d712f70a634d3bc832f7016f35aa5c1fb
  });
  const handleChange = (name: string, value: string) => {
    setValues({ ...values, [name]: value });
  };
  const handleClick = () => {
    const resultErrors = validate(values, rules);
    setErrors(resultErrors);
<<<<<<< HEAD

    if (values.newPassword != values.confirmNewPassword) {
      toast.error("تکرار رمز عبور جدید با رمز عبور جدید مطابقت ندارد", {
        position: "bottom-left",
        autoClose: 3000,
      });
    }
=======
>>>>>>> 73e26f9d712f70a634d3bc832f7016f35aa5c1fb
  };

  return (
    <div className="flex flex-row-reverse">
<<<<<<< HEAD
      

      <div className="w-[354px] mt-[160px] mr-[58px]">
        <h2 className="text-[31px] text-bold text-right mb-[32px]">
          اطلاعات حساب
        </h2>
=======
      <div className="mt-[160px] mr-[58px]">
        <h2 className="text-[31px] text-bold text-right mb-L">
          اطلاعات فردی
        </h2>
        <div className="flex flex-row-reverse justify-start items-center">
          <span className=" ml-S">
          <ProfileImage firstName={"Niloufar"} lastName={"Mojoodi"} size={100} nameColor={true}/>
          </span>
          <div className="py-[6px] flex flex-col justify-between item-center">
            {/* <Button
              text="ویرایش تصویر پروفایل"
              type="button"
              onClick={handleClick}
              hasIcon={false}
              className="text-brand-primary text-xl font-medium border border-brand-primary h-[55px] rounded-lg w-[212px] p-[10px] mb-S"
            /> */}
             <label className="text-brand-primary text-xl font-medium border border-brand-primary h-[55px] rounded-lg w-[212px] p-[10px]  cursor-pointer border-box text-center">ویرایش تصویر پروفایل<input type="file" id="profileImg"  hidden/>  </label>
            <p className="text-lightgray text-xs text-center font-normal mt-S">
              این تصویر برای عموم قابل نمایش است
            </p>
          </div>
        </div>
        <div className="w-[354px] mt-L">
>>>>>>> 73e26f9d712f70a634d3bc832f7016f35aa5c1fb
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
            type="tel"
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
    </div>
  );
};

<<<<<<< HEAD
export default Information;
=======
export default Account;
>>>>>>> 73e26f9d712f70a634d3bc832f7016f35aa5c1fb
