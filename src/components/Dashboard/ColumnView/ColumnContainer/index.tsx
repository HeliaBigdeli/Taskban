import { useEffect, useRef, useState } from "react";
import TaskCard from "./TaskCard";
import TaskColumn from "./TaskColumn";
import Draggable from "react-draggable";
import { useDraggable } from "react-use-draggable-scroll";
import style from "../style.module.css";

const ColumnContainer: React.FC = (): JSX.Element => {
  // const [maxHeight, setMaxHeight] = useState<boolean>(true);
  // const eventHandler = (e, data) => {
  //   e.stopPropagation();
  // };
  const ref = useRef<any>();
  const { events } = useDraggable(ref, {
    isMounted: true,
  });

  // useEffect(() => {
  //   if (ref.current!.offsetHeight > 750) {
  //     setMaxHeight(false);
  //   }
  // }, []);
  return (
    <div
      className="flex shrink-0 flex-col items-start gap-S   "
      style={{ direction: "ltr" }}
    >
      <TaskColumn />
      <div
        ref={ref}
        {...events}
        className={`flex  w-[255px] pt-0.5 flex-col items-center gap-3 h-[700px] overflow-y-auto ${style.scroll} `}
      >
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default ColumnContainer;
