import Button from "../../Common/Form/Button";
import SideBar from "../Dashboard/SideBar";
import styles from "../Auth/Header/style.module.css";
import { Link, Outlet } from "react-router-dom";
import IconItem from "../../Common/IconItem";

const ProfileLayout: React.FC = (): JSX.Element => {
  const handleClick = () => { 
    
  };
  return (
    <div className="flex px-2XL">
      <div className="flex-grow flex-col w-full overflow-hidden">
        <Outlet />
      </div>
      <SideBar>
        <h2 className={`${styles.navbarTitle} mb-[75px] mt-XL`}>
          کوئرا تسک منیجر
        </h2>
        <div className="flex flex-col items-end ">
          <Link to="/workspace">
          <Button text="بازگشت" type="button" hasIcon={true} onClick={handleClick}
            className="bg-brand-primary text-white text-xl rounded-md w-[113px] h-XL justify-start mb-[36px] p-[4px]"
            icon={{
              icon: "arrow_right",
              color: "white",
              className: "ml-1"
            }} /></Link>
          <ul className="flex flex-col w-full justify-start gap-L">
            <IconItem text="اطلاعات فردی" url="information" icon="profile_edit"></IconItem>
            <IconItem text="اطلاعات حساب" url="account" icon="profile_check"></IconItem>
            <IconItem text="تنظیمات" url="setting" icon="setting"></IconItem>
          </ul>
        </div>
      </SideBar>
    </div>
  );
};

export default ProfileLayout;
