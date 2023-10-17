import { useEffect, useRef, useState } from "react";
import WorkSpacesItem from "./WorkSpaceItem";
import { useDraggable } from "react-use-draggable-scroll";
import style from "./style.module.css";
import Icon from "../../../Common/Icon";
import { AXIOS } from "../../../../config/axios.config";

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
  const [projects, setProjects] = useState<any>([]);

  const { events } = useDraggable(ref);
  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    try {
      const response = await AXIOS.get(`workspaces/${id}/projects/`);
      setProjects(response.data);
      console.log(response.data);
    } catch (error) {}
  };
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
          <button className="h-6 mt-1">
            <Icon icon="plus_square" color={colorVariants.btn} size={24} />
          </button>
        </div>

        <div className="flex items-start gap-L my-L">
          {projects.length &&
            projects.map((item) => {
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
