import Icon from "../../Common/Icon";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Switcher: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const handleLightClick = () => {
    toggleTheme();
    document.body.classList.toggle("dark");
  };

  const handleDarkClick = () => {
    toggleTheme();
    document.body.classList.toggle("dark");
  };

  return (
    <>
      {isDarkTheme === false && (
        <span
          onClick={handleLightClick}
          className="flex items-center justify-end w-[65px] bg-lightgray_200 rounded-md cursor-pointer"
        >
          <Icon
            icon="sun"
            color="#818181"
            className={`bg-white m-1 rounded-md p-[3px]`}
          />
        </span>
      )}
      {isDarkTheme === true && (
        <span
          onClick={handleDarkClick}
          className="flex items-center justify-start w-[65px] bg-lightgray_200 rounded-md cursor-pointer"
        >
          <Icon
            icon="moon"
            color="#818181"
            className={`bg-[#323232] m-1 rounded-md p-[3px]`}
          />
        </span>
      )}
    </>
  );
};

export default Switcher;
