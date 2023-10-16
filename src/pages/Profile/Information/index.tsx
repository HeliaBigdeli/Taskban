
import Button from "../../../components/Common/Form/Button";
import Input from "../../../components/Common/Form/Input";
import Profile from "../../../components/Common/ProfileThumb";
import { selectUser } from "../../../features/authSlice";
import { required, validate } from "../../../utils/validator";
import { useState } from "react";
import { useSelector } from 'react-redux'

const members = [
  {
    id: 1,
    first_name: 'test',
    last_name: 'test',
    thumbnail: ""
  },
  {
    id: 2,
    first_name: '22',
    last_name: '33',
    thumbnail: ""
  },
  {
    id: 3,
    first_name: '55',
    last_name: '66',
    thumbnail: ""
  }
]

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
  const user = useSelector(selectUser)

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
          <span className="ml-S">
            <Profile size={100} addIcon={true} members={members} />
          </span>
          <div className="py-[6px] flex flex-col justify-between item-center">
            {/* <Button
              text="ویرایش تصویر پروفایل"
              type="button"
              onClick={handleClick}
              hasIcon={false}
              className="text-brand-primary text-xl font-medium border border-brand-primary h-[55px] rounded-lg w-[212px] p-[10px] mb-S"
            /> */}
            <label className="text-brand-primary text-xl font-medium border border-brand-primary h-[55px] rounded-lg w-[212px] p-[10px]  cursor-pointer border-box text-center">ویرایش تصویر پروفایل<input type="file" id="profileImg" hidden />  </label>
            <p className="text-lightgray text-xs text-center font-normal mt-S">
              این تصویر برای عموم قابل نمایش است
            </p>
          </div>
        </div>
        <div className="w-[354px] mt-L">
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

export default Account;