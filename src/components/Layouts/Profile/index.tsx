import Button from "../../Common/Form/Button";
import SideBar from "../Dashboard/SideBar";
import styles from "../Auth/Header/style.module.css"
import { Outlet } from "react-router-dom";
import IconItem from "../../Common/IconItem";
const ProfileLayout :React.FC = ():JSX.Element => {
  const handleClick = () => {

  };
  return (
    <div className="flex px-2XL flex-row-reverse">
      <SideBar >
      <h2 className={`${styles.navbarTitle} mb-[75px] mt-XL`}>
          کوئرا تسک منیجر
        </h2>
        <div className="flex flex-col items-end ">
        <Button text="بازگشت" type="button" hasIcon={true} onClick={handleClick}
          className="bg-brand-primary text-white h-L text-xl rounded-md w-[113px] justify-start mb-[36px] p-[4px]"
          icon={{
            icon: "chevron_right",
            color: "white",
            className: "ml-1"
          }}/>

         <ul className="w-full justify-start">
          <IconItem text="اطلاعات فردی" url="information" icon="edit"></IconItem>
          <IconItem text="اطلاعات حساب" url="account" icon="edit"></IconItem>
          <IconItem text="تنظیمات" url="setting" icon="setting"></IconItem>
        </ul>
          </div>
          
      </SideBar>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}

export default ProfileLayout;