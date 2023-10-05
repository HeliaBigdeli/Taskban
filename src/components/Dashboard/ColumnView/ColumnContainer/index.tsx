import { useEffect, useRef, useState } from "react";
import TaskCard from "./TaskCard";
import TaskColumn from "./TaskColumn";
import Draggable from "react-draggable";

const ColumnContainer: React.FC = (): JSX.Element => {
  const [maxHeight, setMaxHeight] = useState<boolean>(true);
  const eventHandler = (e, data) => { 
    e.stopPropagation();
  };
  const ref = useRef<any>(null);
  useEffect(() => {
    if (ref.current!.offsetHeight > 750) {
      setMaxHeight(false);
    }
  }, []);
  return (
    <Draggable
      disabled={maxHeight}
      axis="y"
      onDrag={eventHandler}
      defaultPosition={{ x: 0, y: 0 }}
    >
      <div
        className="flex shrink-0 flex-col items-start gap-S"
        ref={ref}
        style={{ direction: "ltr" }}
      >
        <TaskColumn />
        <div className="flex flex-col items-start gap-3">
          <TaskCard />
          <TaskCard />
          <TaskCard />         
        </div>
      </div>
    </Draggable>
  );
};

export default ColumnContainer;
