import WorkSpace from "./WorkSpace";
import { useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import API_URL from "../../../constants/api.url";
import { workSpaceUpdate } from "../../../features/updateSlice";
import { useSelector } from "react-redux";

const WorkSpacesView: React.FC = (): JSX.Element => {
  const [response, error, loading, fetcher] = useAxios();
  const update = useSelector(workSpaceUpdate);

  useEffect(() => {
    fetcher("get", API_URL.WorkSpaces);
  }, [update]);

  return (
    <div className="w-full h-full pt-14 pr-8 ">
      <div className="flex flex-col items-end gap-L">
        {response?.map((item) => {
          return <WorkSpace key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default WorkSpacesView;
