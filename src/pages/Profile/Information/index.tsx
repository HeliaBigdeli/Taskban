import Button from "../../../components/Common/Form/Button";
import Input from "../../../components/Common/Form/Input";
import ProfileImage from "../../../components/Common/ProfileImage";
import { updateAccount, selectUser, login } from "../../../features/authSlice";
import { required, validate } from "../../../utils/validator";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { errorToaster } from "../../../utils/toaster";
import useAxios from "../../../hooks/useAxios";
import API_URL from "../../../constants/api.url";
import { useDispatch } from "react-redux";

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
    if (!userResponse?.username) {
      userfetcher("get", `${API_URL.Register}${user.user_id}/`);
    }
    //setValues(userResponse)
    if (response) {
        dispatch(updateAccount(response))
      }
  }, [userResponse?.username,response]);

  const handleChange = (name: string, value: string) => {
    setValues({ ...values, [name]: value });
  };
  
  const handleClick = async () => {
    const resultErrors = validate(values, rules);
    if (resultErrors.length) {
      errorToaster(resultErrors);
    } else {
      await fetcher("patch", `${API_URL.Register}${user.user_id}/`, {
        ...values,
        email: userResponse.email,
        username: userResponse.username,
      });
      
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }
  const uploadImage =async (e) => {
    console.log(e.target.files[0])
    if (e.target.files && e.target.files[0]){
        const file = e.target.files[0]
          const base64 = await convertBase64(file)
          console.log(base64)
             setValues({ ...values, thumbnail:String(base64)});
    };
    
    // }
    //  const formData=new FormData();
    //  const image= e.target.files[0];
    //  console.log(formData)
    //  formData.append('thumbnail',image)
    //  console.log("")
     
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
            <label className="text-brand-primary text-xl font-medium border border-brand-primary h-[55px] rounded-lg w-[212px] p-[10px] cursor-pointer border-box text-center">
              ویرایش تصویر پروفایل
              <input
                hidden={true}
                type="file"
                id="thumbnail"
                name="thumbnail"
                onChange={(e) => uploadImage(e)}
                accept=".png, .jpg, .jpeg"
              />
            </label>
            <p className="text-lightgray text-xs text-center mt-S">
              این تصویر برای عموم قابل نمایش است
            </p>
          </div>
        </div>
        <form className="flex flex-col gap-S w-full mt-L">
          <Input
            inputValue={values.first_name}
            name="first_name"
            id="first_name"
            type="text"
            label="نام"
            hasLabel={true}
            className="h-XL"
            onChange={(name, value) => handleChange(name, value)}
          />
          <Input
            inputValue={values.last_name}
            name="last_name"
            id="last_name"
            type="text"
            label="نام خانوادگی"
            hasLabel={true}
            className="h-XL"
            onChange={(name, value) => handleChange(name, value)}
          />

          <Input
            inputValue={values.phone_number}
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


