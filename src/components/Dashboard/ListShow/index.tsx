import { useState } from "react";
import Icon from "../../Common/Icon";
import TaskList from "./TaskList";

const ListShow: React.FC = (): JSX.Element => {
  const [isShown, setIsShown] = useState<boolean>(true);

  return (
    <div style={{ direction: "rtl" }} className={` pr-S `}>
      <div className="flex items-center gap-XS my-L">
        <button className="h-6 inline" onClick={() => setIsShown(!isShown)}>
          <Icon icon="chevron_down_circle" size={24} />
        </button>
        <span className="text-black text-xl font-extrabold">پروژه اول</span>
      </div>
      <div
        className={`${
          !isShown ? "opacity-0 -z-10" : "opacity-100 z-10"
        } relative flex w-[1011px] flex-col items-end gap-XL mr-6 ml-12 transition-all duration-300 `}
      >
        <TaskList />
        <TaskList color="orange" />
        <TaskList color="green" />
      </div>
    </div>
  );
};

export default ListShow;
