import { useRef } from "react";
import ColumnContainer from "./ColumnContainer";
import { useDraggable } from "react-use-draggable-scroll";
import style from "./style.module.css";

const ColumnView: React.FC = (): JSX.Element => {
  const ref = useRef<any>();
  const { events } = useDraggable(ref);

  return (
    <div
      ref={ref}
      {...events}
      className={`flex gap-S overflow-auto h-full mr-S ${style.scroll}`}
      style={{ direction: "rtl" }}
    >
      <ColumnContainer />
      <ColumnContainer />
      <ColumnContainer />
      <ColumnContainer />
      <ColumnContainer />
    </div>
  );
};

export default ColumnView;
