import { useEffect, useState } from "react";
import ColorPicker from "../../../components/Common/ColorPicker";
import Button from "../../../components/Common/Form/Button";
import Switcher from "../../../components/Theme/Switcher";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { useDispatch } from "react-redux";
import { errorToaster } from "../../../utils/toaster";
import { setting } from "../../../constants/url";
import { AXIOS } from "../../../config/axios.config";
import { toast } from "react-toastify";
import {
  selectSetting,
  updateSetting,
} from "../../../features/setting/settingSlice";

const Setting: React.FC = (): JSX.Element => {
  const [color, setColor] = useState("");
  //const theme = useSelector(selectSetting);
  //const dispatch = useDispatch();
  // const getTheme=async()=>{
  //   const url=setting.get()
  //   const res=await AXIOS.get(url)
  //   setColor(res.data[0].theme)
  // }
  // useEffect(() => {
  //   getTheme()
  // }, []);

  const handleClick = async () => {
    const url = setting.post();
    try {
      const res = await AXIOS.post(url, { theme: color });
      if (res?.status === 201) {
        toast.success("تغییرات به درستی انجام شد");
        // localStorage.setItem("color", JSON.stringify(color));
        //dispatch(updateSetting(res.data[0].theme))
        //return `--color-primary: ${res.data[0].theme}`
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex justify-end">
      <div className="flex flex-col mt-[125px] mr-[58px]">
        <h2 className="text-[31px] text-bold text-right mb-L">تنظیمات</h2>
        <h3 className="dark:text-[#bac4c8] text-right text-normal text-black mb-XS">
          انتخاب تم
        </h3>
        <div>
          <div className="flex flex-row-reverse items-center">
            <ColorPicker
              onClick={(data) => setColor(data.code || "")}
              hasDisableIcon={false}
              selected={color}
            />
          </div>
          {/* <ColorPicker
            onClick={(e) => onClick()}
            hasDisableIcon={false}
          ></ColorPicker>  */}
        </div>
        <div className="my-M flex flex-row-reverse">
          <Switcher />
        </div>
        <Button
          text="ثبت تغییرات"
          type="button"
          onClick={handleClick}
          hasIcon={false}
          className="text-white text-sm font-black leading-normal h-XL self-stretch rounded-md bg-brand-primary"
        />
      </div>
    </div>
  );
};

export default Setting;
function useSelector(selectUser: any) {
  throw new Error("Function not implemented.");
}
