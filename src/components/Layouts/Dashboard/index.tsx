import { Outlet, useNavigate } from "react-router-dom";
import Button from "../../Common/Form/Button";
import Input from "../../Common/Form/Input";
import Icon from "../../Common/Icon";
import DarkMode from "../../Theme/Switcher";
import SideBar from "./SideBar";
import styles from "./style.module.css";
import List from "./../../Common/List";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import NestedModals from "../../Common/Modal/NestedModals";
import { logout, selectUser } from "../../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import ProfileImage from "../../Common/ProfileImage";

const DashboardLayout: React.FC = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const portals = document.getElementById("portals") as Element;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const handleChange = (name: string, value: string) => {
    console.log(name, value);
  };

  const handleClose = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {}, [user]);
  return (
    <div className="flex px-2XL">
      <div className="flex-grow flex-col w-full overflow-hidden">
        <Outlet />
      </div>
      <SideBar>
        <h2 className={`${styles.navbarTitle} mb-[27px] mt-XL`}>
          <Link to="/workspaces">کوئرا تسک منیجر</Link>
        </h2>
        <div className="flex justify-between">
          <Icon icon="chevron_down" />
          <span className="font-bold font-base">ورک‌ اسپیس‌ها</span>
        </div>
        <Input
          className="pr-L my-5 border-none bg-lightgray_100 h-XL text-xs"
          placeholder="جستجو کنید"
          name="search"
          id="search"
          type="text"
          hasLabel={false}
          hasIcon={true}
          icon={{
            icon: "search",
          }}
          onChange={(name, value) => handleChange(name, value)}
        />
        <Button
          text="ساختن اسپیس جدید"
          onClick={() => {
            setIsModalOpen(true);
          }}
          type="button"
          className="bg-lightgray_300 text-black h-L text-sm leading-normal self-stretch rounded-md"
          hasIcon={true}
          icon={{
            icon: "plus_square",
            color: "black",
            className: "ml-1",
          }}
        />
        <List />

        <div className="mt-2XL mb-L flex flex-col gap-S">
          <Link to="/information">
            <ProfileImage
              firstName={user.first_name}
              lastName={user.last_name}
              showName={true}
            />
          </Link>
          <div className="flex justify-between items-center">
            <DarkMode />
            <span
              className="flex items-center cursor-pointer"
              onClick={handleClose}
            >
              خروج
              <Icon icon="door" color="#818181" />
            </span>
          </div>
        </div>
      </SideBar>
      {createPortal(
        <NestedModals
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />,
        portals
      )}
    </div>
  );
};

export default DashboardLayout;
