import WorkSpace from "./WorkSpace";
import { useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import { workSpaceUpdate } from "../../../features/updateSlice";
import { useSelector } from "react-redux";
import { workspaces } from "../../../constants/url";

const WorkSpaces: React.FC = (): JSX.Element => {
  const [response, error, loading, fetcher] = useAxios();
  const update = useSelector(workSpaceUpdate);

  useEffect(() => {
    fetcher("get", workspaces.gets());
  }, [update]);

  return (
    <div className="w-full h-full pt-12 pr-8 ">
      <div className="flex flex-col items-end gap-L">
        {response?.map((item) => {
          return <WorkSpace key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default WorkSpaces;
