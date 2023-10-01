import { useRef } from "react";
import Button from "../../../Common/Form/Button";
import WorkSpacesItem from "./WorkSpaceItem";
import { useDraggable } from "react-use-draggable-scroll";
import style from "./style.module.css";


interface IWorkSpaceProps {
  title: string;
  color?: string;
  noBtn?: boolean;
}
const WorkSpace: React.FC<IWorkSpaceProps> = ({
  title,
  color,
  noBtn,
}): JSX.Element => {
   const ref = useRef<any>();
   const { events } = useDraggable(ref);


  const colorVariants = {
    blue: "linear-gradient(250deg, #228BE6 0%, rgba(34, 139, 230, 0.50) 100%)",
    green: "linear-gradient(250deg, #40C057 0%, rgba(64, 192, 87, 0.50) 100%)",
    orange: "linear-gradient(250deg, #FAB005 0%, rgba(250, 176, 5, 0.50) 100%)",
  };
  return (
    <div
      ref={ref}
      {...events}
      className={`overflow-auto w-full ${style.scroll}`}
      style={{ direction: "rtl" }}
    >
      <div className="shrink-0 ">
        <h4 className="text-right text-2xl leading-8 font-extrabold">
          {title}
        </h4>
        <div className="flex items-start gap-L my-L">
          {noBtn ? (
            <Button text="ali" type="button" onClick={() => {}} />
          ) : (
            <>
              {" "}
              <WorkSpacesItem
                color={colorVariants[color as keyof typeof colorVariants]}
              />
              <WorkSpacesItem
                color={colorVariants[color as keyof typeof colorVariants]}
              />
              <WorkSpacesItem
                color={colorVariants[color as keyof typeof colorVariants]}
              />
              <WorkSpacesItem
                color={colorVariants[color as keyof typeof colorVariants]}
              />
              <WorkSpacesItem
                color={colorVariants[color as keyof typeof colorVariants]}
              />
            </>
          )}
        </div>
        <div className=" w-full h-0.5 bg-gray-secondary"></div>
      </div>
    </div>
  );
};

export default WorkSpace;
