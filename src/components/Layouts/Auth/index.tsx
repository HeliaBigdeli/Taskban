import { Outlet } from "react-router-dom";
import Header from "./Header";
import styles from "./style.module.css";
// import { useEffect, useState } from "react";
// import { selectSetting } from "../../../features/setting/settingSlice";
// import {useSelector} from "react-redux"

const AuthLayout: React.FC = (): JSX.Element => {
  // const appSetting=useSelector(selectSetting)
  // const [color,setColor]=useState(appSetting.theme)
  // const root = document.documentElement;
  // useEffect(() => {
  //  root.style.setProperty("--color-primary", color);
  // },[appSetting.theme])
  return (
    <div className={styles.background}>
      <span className={`${styles.skewBackground} dark:bg-[#323232]`}></span>
      <Header />
      <div className="flex justify-center items-center h-screen relative">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
