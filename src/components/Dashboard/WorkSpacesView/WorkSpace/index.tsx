import { useEffect, useRef } from "react";
import WorkSpacesItem from "./WorkSpaceItem";
import { useDraggable } from "react-use-draggable-scroll";
import style from "./style.module.css";
import Icon from "../../../Common/Icon";
import API_URL from "../../../../constants/api.url";
import useAxios from "../../../../hooks/useAxios";

interface IWorkSpaceProps {
  name: string;
  color: string;
  id: number;
}
const WorkSpace: React.FC<IWorkSpaceProps> = ({
  name,
  color,
  id,
}): JSX.Element => {
  const ref = useRef<any>();
  const { events } = useDraggable(ref);

  const [response, error, loading, fetcher] = useAxios();

  useEffect(() => {
    fetcher('get', `${API_URL.WorkSpaces}${id}/${API_URL.Projects}`);
  }, []);

  const colorVariants = {
    grad: `linear-gradient(250deg, ${color} 0%, ${color}90 100%)`,
    btn: color,
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
            {name}
          </h4>
          <Icon icon="plus_square" color={colorVariants.btn} size={24} />
        </div>

        <div className="flex items-start gap-L my-L">
          {response?.map((item) => {
            return (
              <WorkSpacesItem
                key={item.id}
                {...item}
                workspace_id={id}
                color={colorVariants.grad}
              />
            );
          })}
        </div>
        <div className=" w-full h-0.5 bg-gray-secondary"></div>
      </div>
    </div>
  );
};

export default WorkSpace;
