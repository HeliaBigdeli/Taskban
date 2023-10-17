import WorkSpace from "./WorkSpace";
import useAxios from "../../../hooks/useAxios";
import { useEffect, useState } from "react";
import { AXIOS } from "../../../config/axios.config";

const WorkSpacesView: React.FC = (): JSX.Element => {
  const [workspaces, setWorkspaces] = useState<any>([]);
  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    try {
      const response = await AXIOS.get("workspaces/");
      setWorkspaces(response.data);
    } catch (error) {}
  };
  return (
    <div className="w-full h-full pt-16 pr-8 ">
      <div className="flex flex-col items-end gap-L h-[800px]">
        {workspaces.length && workspaces.map((item) => {
          return <WorkSpace key={item.id} {...item} />
        })}
        
      </div>
    </div>
  );
};

export default WorkSpacesView;
