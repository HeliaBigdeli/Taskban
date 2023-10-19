import Icon from "../../Common/Icon";
import { useRef, useState } from "react";
import styles from "./style.module.css";

const Switcher: React.FC = () => {
  const myIconRef = useRef<HTMLElement>(null);
  const myBtnRef = useRef<HTMLElement>(null);
  const [theme, setTheme] = useState(true);

  const handleClick = () => {
    setTheme(!theme);
    myIconRef.current?.classList.toggle(`${styles.darkBG}`);
    myBtnRef.current?.classList.toggle("justify-end");
  };

  return (
    <span
      ref={myBtnRef}
      onClick={handleClick}
      className="flex items-center justify-end w-[65px] bg-lightgray_200 rounded-md cursor-pointer"
    >
      <Icon
        ref={myIconRef}
        icon={theme === true ? "sun" : "moon"}
        color="#818181"
        className={`bg-white m-1 rounded-md p-[3px]`}
      />
    </span>
  );
};

export default Switcher;
