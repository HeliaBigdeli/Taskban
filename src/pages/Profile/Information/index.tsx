import Button from "../../../components/Common/Form/Button";
import Input from "../../../components/Common/Form/Input";
import ProfileImage from "../../../components/Common/ProfileImage";
import { updateAccount, selectUser } from "../../../features/auth/authSlice";
import { required, validate } from "../../../utils/validator";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { errorToaster } from "../../../utils/toaster";
import useAxios from "../../../hooks/useAxios";
import API_URL from "../../../constants/api.url";
import { useDispatch } from "react-redux";
import { accounts, update } from "../../../constants/url";
import { toast } from "react-toastify";
import { AXIOS } from "../../../config/axios.config";
import File from "../../../components/Common/Form/File";
const rules = {
  first_name: [required],
  last_name: [required],
  phone_number: [required],
};

type Values = {
  [key: string]: string;
};

const Information: React.FC = (): JSX.Element => {
  const user = useSelector(selectUser);
  const [response, error, loading, fetcher] = useAxios();
  const [userResponse, userError, userLoading, userfetcher] = useAxios();

  const [errors, setErrors] = useState<string[]>([]);
  const dispatch = useDispatch();
  const [values, setValues] = useState<Values>({
    first_name: "",
    last_name: "",
    phone_number: "",
    thumbnail: "",
    email: "",
    username: "",
  });

  useEffect(() => {
    if (!userResponse?.first_name) {
      userfetcher("get", `${API_URL.Register}${user.user_id}/`);
    }
    setValues(userResponse);

  }, [userResponse?.first_name, response]);

  const handleChange = (name: string, value: string) => {
    setValues({ ...values, [name]: value });
  };

  const handleClick = async () => {
    const resultErrors = validate(values, rules);
    if (resultErrors.length) {
      errorToaster(resultErrors);
    } else {
      const url = update.patch({
        aid: user.user_id,
      });
      setValues({
        ...values,
        email: userResponse.email,
        username: userResponse.username,
      });
      try {
        const res = await AXIOS.patch(url, values, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        if (res?.status === 200) {
          toast.success(res?.statusText);
          dispatch(updateAccount(res.data));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleFile = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-row-reverse">
      <div className="mt-[125px] mr-[58px]">
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
            <File
              inputValue={values?.thumbnail}
              onChangeFile={(name, value) => {
                handleFile(name, value);
              }}
              id="thumbnail"
              name="thumbnail"
              hasLabel={false}
              text="ویرایش تصویر پروفایل"
              hasIcon={false}
              styles="text-brand-primary text-xl font-medium border border-brand-primary h-[55px] rounded-lg w-[212px] p-[10px] cursor-pointer border-box text-center"
            />
            <p className="text-lightgray text-xs text-center mt-S">
              این تصویر برای عموم قابل نمایش است
            </p>
          </div>
        </div>
        <form className="flex flex-col gap-S w-full mt-L">
          <Input
            inputValue={values?.first_name}
            name="first_name"
            id="first_name"
            type="text"
            label="نام"
            hasLabel={true}
            className="h-XL"
            onChange={(name, value) => handleChange(name, value)}
          />
          <Input
            inputValue={values?.last_name}
            name="last_name"
            id="last_name"
            type="text"
            label="نام خانوادگی"
            hasLabel={true}
            className="h-XL"
            onChange={(name, value) => handleChange(name, value)}
          />

          <Input
            inputValue={values?.phone_number}
            name="phone_number"
            id="phone_number"
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

export default Information;
