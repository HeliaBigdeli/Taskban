import { useRef } from "react";
import ColumnContainer from "./ColumnContainer";
import { useDraggable } from "react-use-draggable-scroll";
import style from "./style.module.css";
import Button from "../../Common/Form/Button";
import Icon from "../../Common/Icon";

const ColumnView: React.FC = (): JSX.Element => {
  const ref = useRef<any>();
  const { events } = useDraggable(ref);

  return (
    <div
      ref={ref}
      {...events}
      className={`flex gap-S overflow-auto h-full px-S ${style.scroll}`}
      style={{ direction: "rtl" }}
    >
      <ColumnContainer />
      <ColumnContainer />
      <ColumnContainer />
      <ColumnContainer />
      <ColumnContainer />
      <button className="flex w-[250px] h-[44px] py-XS px-[12px]  items-center rounded-2xl shrink-0  shadow-taskColumn text-base font-medium">
        <Icon icon="plus" color="#1E1E1E" size={20}/>
        ساختن برد جدید
      </button>
      <Button
        text="تسک جدید"
        onClick={() => {}}
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
  );
};

export default ColumnView;
