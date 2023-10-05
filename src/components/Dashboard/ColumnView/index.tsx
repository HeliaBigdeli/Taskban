import { useRef, useState } from "react";
import ColumnContainer from "./ColumnContainer";
import { useDraggable } from "react-use-draggable-scroll";
import style from "./style.module.css";
import Button from "../../Common/Form/Button";
import Icon from "../../Common/Icon";
import TaskModal from "../TaskModal";

const ColumnView: React.FC = (): JSX.Element => {
  const ref = useRef<any>();

  const [mouseDown, setMouseDown] = useState<boolean>(true);
  const [taskModal, setTaskModal] = useState<boolean>(false);
  const { events } = useDraggable(ref, {
    isMounted: mouseDown,
  });
  const handleTaskModal = () => {
    setTaskModal(!taskModal);
  };
  const handleClick = (e: React.MouseEvent<EventTarget>) => {
    if (e.target === e.currentTarget) setMouseDown(true);
    else setMouseDown(false);
  };

  return (
    <>
      <div
        ref={ref}
        {...events}
        onMouseDownCapture={handleClick}
        className={`flex items-start gap-6 overflow-x-auto overflow-y-hidden  px-S ${style.scroll}`}
        style={{ direction: "rtl" }}
      >
        <ColumnContainer />
        <ColumnContainer />
        <ColumnContainer />
        <ColumnContainer />
        <ColumnContainer />
        <button className="flex w-[250px] h-[44px] py-XS px-[12px]  items-center rounded-2xl shrink-0  shadow-taskColumn text-base font-medium">
          <Icon icon="plus" color="#1E1E1E" size={20} />
          ساختن برد جدید
        </button>
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
      </div>
      {taskModal && <TaskModal modal={taskModal} setModal={handleTaskModal} />}
    </>
  );
};

export default ColumnView;
