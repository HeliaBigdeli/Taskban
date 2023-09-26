import { useRef } from "react";
import ColumnContainer from "./ColumnContainer";
import { useDraggable } from "react-use-draggable-scroll";
import style from "./style.module.css";

const ColumnShow: React.FC = (): JSX.Element => {
  const ref = useRef<any>();
  const { events } = useDraggable(ref);

  return (
    <div
      ref={ref}
      {...events}
      className={`flex  gap-S overflow-auto h-full  ${style.scrool}`}
    >
      <ColumnContainer />
      <ColumnContainer />
      <ColumnContainer />
      <ColumnContainer />
      <ColumnContainer />
    </div>
  );
};

export default ColumnShow;
