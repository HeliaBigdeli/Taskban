import { useState, useEffect } from "react";
import Icon from "../../Common/Icon";
import TaskList from "./TaskList";
import Button from "../../Common/Form/Button";
import TaskModal from "../TaskModal";
import { IProps, IData } from "../../../interfaces/board";
import { boardUpdate } from "../../../features/updateSlice";
import { useSelector } from "react-redux";

const ListShow: React.FC<IProps> = ({ data }): JSX.Element => {
  const [listTasks, setListTaks] = useState<IData[]>(data);
  const [isShown, setIsShown] = useState<boolean>(true);
  const [taskModal, setTaskModal] = useState<boolean>(false);
  const update = useSelector(boardUpdate);

  const handleTaskModal = () => {
    setTaskModal(!taskModal);
  };

  useEffect(() => {
    setListTaks(data);
  }, [data, update]);

  return (
    <div style={{ direction: "rtl" }} className={`pr-S`}>
      <div className="flex items-center gap-XS my-L">
        <button className="h-6 inline" onClick={() => setIsShown(!isShown)}>
          <Icon icon="chevron_down_circle" size={24} />
        </button>
        <span className="text-black text-xl font-extrabold">پروژه اول</span>
      </div>
      <div
        className={`${
          !isShown ? "opacity-0 -z-10" : "opacity-100 z-10"
        } relative flex flex-col items-end gap-XL mr-6 ml-12 transition-all duration-300 `}
      >
        {listTasks?.map((item) => {
          return <TaskList key={item.id} {...item} />;
        })}
      </div>
      <Button
        text="تسک جدید"
        onClick={handleTaskModal}
        type="button"
        className="z-20 bg-brand-primary text-white w-[118px] text-sm flex-row-reverse justify-center items-center rounded-md fixed bottom-[30px] py-XS px-3 gap-1 left-2XL font-extrabold"
        hasIcon={true}
        icon={{
          icon: "plus_square",
          color: "white",
          size: 24,
        }}
      />
      {taskModal && <TaskModal modal={taskModal} setModal={handleTaskModal} />}
    </div>
  );
};

export default ListShow;
