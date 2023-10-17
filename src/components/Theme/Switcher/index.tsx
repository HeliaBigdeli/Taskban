import Icon from "../../Common/Icon";
import { useRef } from "react";

const Switcher: React.FC = () => {
  const myIconRef = useRef<HTMLElement>(null);
  const myBtnRef = useRef<HTMLElement>(null);

  const handleClick = () => {
    myIconRef.current?.classList.toggle("bg-[#323232]");
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
        icon="sun"
        color="#818181"
        className="bg-white m-1 rounded-md p-[3px]"
      />
    </span>
  );
};

export default Switcher;
