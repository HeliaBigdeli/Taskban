import { useEffect } from "react";
import WorkSpacesView from "../../../components/Dashboard/WorkSpacesView";
import useAxios from "../../../hooks/useAxios";
import { projects, workspaces } from "../../../constants/url";
import { addProjects, all } from "../../../features/workspace/workspaceSlice";
import { useDispatch } from "react-redux";
import { AXIOS } from "../../../config/axios.config";

const WorkSpaces: React.FC = (): JSX.Element => {
  const [response, error, loading, fetcher] = useAxios();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!response) {
      fetcher("get", workspaces.gets());
    }
    if (response) {
      dispatch(all(response));
      response.forEach((ws) => {
        AXIOS.get(projects.gets({ wid: ws.id })).then((res) => {
          dispatch(addProjects({ id: ws.id, response: res.data }));
        });
      });
    }
  }, [response]);

  return <WorkSpacesView />;
};

export default WorkSpaces;
