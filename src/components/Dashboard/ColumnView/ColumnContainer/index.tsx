import { useRef } from "react";
import TaskCard from "./TaskCard";
import TaskColumn from "./TaskColumn";
import { useDraggable } from "react-use-draggable-scroll";
import style from "../style.module.css";

interface IColumnContainerProps {
  setMouseDown: React.Dispatch<React.SetStateAction<boolean>>;
  cloumnTitle: string;
  id: number;
  tasks: {
    id: number;
    title: string;
    img: string;
  }[];
}
const ColumnContainer: React.FC<IColumnContainerProps> = ({
  id,
  cloumnTitle,
  tasks,
  setMouseDown,
}): JSX.Element => {
  const ref = useRef<any>();

  const { events } = useDraggable(ref, {
    isMounted: true,
  });
  const handleClick = (e: React.MouseEvent<EventTarget>) => {
    if (e.target === e.currentTarget) setMouseDown(true);
    else setMouseDown(false);
  };

  return (
    <div
      className="flex shrink-0  flex-col items-start gap-S   "
      style={{ direction: "ltr" }}
    >
      <TaskColumn title={cloumnTitle} />

      <div
        ref={ref}
        {...events}
        onMouseDownCapture={handleClick}
        className={`flex  w-[255px] pt-0.5 flex-col items-center gap-3 h-[750px] overflow-y-auto ${style.scroll} `}
      >
        {tasks.map(({ id, ...item }) => {
          return <TaskCard {...item} key={id} />;
        })}
      </div>
    </div>
  );
};

export default ColumnContainer;
