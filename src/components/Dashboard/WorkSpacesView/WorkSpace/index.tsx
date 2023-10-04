import { useRef } from "react";
import WorkSpacesItem from "./WorkSpaceItem";
import { useDraggable } from "react-use-draggable-scroll";
import style from "./style.module.css";
import Icon from "../../../Common/Icon";

interface IWorkSpaceProps {
  title: string;
  color?: string;
}
const WorkSpace: React.FC<IWorkSpaceProps> = ({
  title,
  color,
}): JSX.Element => {
  const ref = useRef<any>();
  const { events } = useDraggable(ref);

  const colorVariants = {
    blue: {
      grad: "linear-gradient(250deg, #228BE6 0%, rgba(34, 139, 230, 0.50) 100%)",
      btn: "#228BE6",
    },
    green: {
      grad: "linear-gradient(250deg, #40C057 0%, rgba(64, 192, 87, 0.50) 100%)",
      btn: "#40C057",
    },
    orange: {
      grad: "linear-gradient(250deg, #FAB005 0%, rgba(250, 176, 5, 0.50) 100%)",
      btn: "#FAB005",
    },
    red: {
      grad: "linear-gradient(250deg, #FA5252 0%, #fa5252bf 100%)",
      btn: "#FA5252",
    },
  };
  return (
    <div
      ref={ref}
      {...events}
      className={`overflow-auto w-full ${style.scroll}`}
      style={{ direction: "rtl" }}
    >
      <div className="shrink-0 ">
        <div className="flex items-center gap-2">
          <h4 className="text-right text-2xl leading-8 font-extrabold">
            {title}
          </h4>
          <button className="h-6 mt-1">
            <Icon
              icon="plus_square"
              color={colorVariants[color as keyof typeof colorVariants].btn}
              size={24}
            />
          </button>
        </div>

        <div className="flex items-start gap-L my-L">
          <WorkSpacesItem
            color={colorVariants[color as keyof typeof colorVariants].grad}
          />
          <WorkSpacesItem
            color={colorVariants[color as keyof typeof colorVariants].grad}
          />
          <WorkSpacesItem
            color={colorVariants[color as keyof typeof colorVariants].grad}
          />
          <WorkSpacesItem
            color={colorVariants[color as keyof typeof colorVariants].grad}
          />
          <WorkSpacesItem
            color={colorVariants[color as keyof typeof colorVariants].grad}
          />
        </div>
        <div className=" w-full h-0.5 bg-gray-secondary"></div>
      </div>
    </div>
  );
};

export default WorkSpace;
