import Button from "../../../components/Common/Form/Button";
import Input from "../../../components/Common/Form/Input";
import ProfileImage from "../../../components/Common/ProfileImage";
import { selectUser } from "../../../features/authSlice";
import { required, validate } from "../../../utils/validator";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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
  const user = useSelector(selectUser);

  const handleChange = (name: string, value: string) => {
    setValues({ ...values, [name]: value });
  };
  const handleClick = () => {
    const resultErrors = validate(values, rules);
    setErrors(resultErrors);
  };

  useEffect(() => {
  }, [user])

  return (
    <div className="flex flex-row-reverse">       
      <div className="mt-[160px] mr-[58px]">
        <h2 className="text-[31px] text-bold text-right mb-L">اطلاعات فردی</h2>
        <div className="flex flex-row-reverse items-center">
          <span className="ml-S">
            <ProfileImage
              size={100}
              firstName={user.first_name}
              lastName={user.last_name}
              img={user.thumbnail}
            />
          </span>
          <div className="py-[6px] flex flex-col">
            <label className="text-brand-primary text-xl font-medium border border-brand-primary h-[55px] rounded-lg w-[212px] p-[10px] cursor-pointer border-box text-center">
              ویرایش تصویر پروفایل
              <Input
                hidden={true}
                type="file"
                id="thumbnail"
                name="thumbnail"
                onChange={() => { }}
              />
            </label>
            <p className="text-lightgray text-xs text-center mt-S">
              این تصویر برای عموم قابل نمایش است
            </p>
          </div>
        </div>
        <form className="flex flex-col gap-S w-full mt-L">
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
  );
};

export default Account;
