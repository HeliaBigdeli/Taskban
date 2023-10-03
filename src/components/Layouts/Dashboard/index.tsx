import { Outlet } from "react-router-dom";
import Button from "../../Common/Form/Button";
import Input from "../../Common/Form/Input";
import Icon from "../../Common/Icon";
import DarkMode from "../../Theme/Switcher";
import Header from "./Header";
import SideBar from "./SideBar";
import styles from "./style.module.css";
import List from "./../../Common/List";
import { useState } from "react";
import { createPortal } from "react-dom";
import NestedModals from "./NestedModals";
import { Link } from 'react-router-dom'

const data = [
  {
    id: 1,
    text: "درس مدیریت پروژه",
    hasProject: true,
    color: "indigo_secondary",
  },
  { id: 2, text: "کارهای شخصی", hasProject: false, color: "indigo_secondary" },
  { id: 3, text: "درس کامپایلر", hasProject: true, color: "lightgray_300" },
  { id: 4, text: "پروژه کوئرا", hasProject: false, color: "blue_secondary" },
];

const DashboardLayout: React.FC = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const portals = document.getElementById("portals") as Element;

  const handleChange = (name: string, value: string) => {
    console.log(name, value);
  };

  return (
    <div className="flex px-2XL">
      <div className="flex-grow flex-col w-full overflow-hidden">
        <Header />
        <Outlet />
      </div>
      <SideBar>
        <h2 className={`${styles.navbarTitle} mb-[27px] mt-XL`}>
          <Link to="/workspace">
            کوئرا تسک منیجر
          </Link>
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
        <List data={data}></List>
        <Button
          text="ساختن پروژه جدید"
          onClick={() => {}}
          type="button"
          className="text-brand-primary h-L text-sm font-bold leading-normal self-stretch rounded-md border border-brand-primary mb-L"
        />
        <div className="mt-auto mb-L flex flex-col gap-S">
          <div className="text-right font-bold">
            نیلوفر موجودی
            <span className="w-[30px] h-[30px] bg-indigo_secondary rounded-full p-1 ml-1 text-indigo_primary">
              NM
            </span>
          </div>
          <div className="flex justify-between items-center">
            <DarkMode />
            <span className="flex items-center">
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