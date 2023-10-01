import Button from "../../Common/Form/Button";
import SideBar from "../Dashboard/SideBar";
import styles from "../Auth/Header/style.module.css";
import { Outlet } from "react-router-dom";
import Icon from "../../Common/Icon";
const ProfileLayout: React.FC = (): JSX.Element => {
  const handleClick = () => {};
  return (
    <div className="flex px-2XL flex-row-reverse">
      <SideBar>
        <h2 className={`${styles.navbarTitle} mb-[75px] mt-XL`}>
          کوئرا تسک منیجر
        </h2>
        <div className="flex flex-col items-end ">
          <Button
            text="بازگشت"
            type="button"
            hasIcon={true}
            onClick={handleClick}
            className="bg-brand-primary text-white h-L text-xl rounded-md w-[113px] justify-start mb-[36px] p-[4px]"
            icon={{
              icon: "chevron_right",
              color: "white",
              className: "ml-1",
            }}
          />

          <ul className="w-full justify-start">
            <span>
              اطلاعات فردی
              <Icon icon="edit" />
            </span>
            <span>
              اطلاعات حساب <Icon icon="user" />
            </span>
            <span>
              تنظیمات <Icon icon="setting" />
            </span>
          </ul>
        </div>
      </SideBar>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
