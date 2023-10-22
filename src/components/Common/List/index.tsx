import Item from "./Item";
import { useSelector } from "react-redux";
import { selectWorkspace } from "../../../features/workspace/workspaceSlice";
import { IWorkspace } from "../../../interfaces/workspace";
import { useEffect } from "react";

const List: React.FC = (): JSX.Element => {
  const state = useSelector(selectWorkspace);

  useEffect(() => {}, [state.workspaces]);

  return (
    <ul>
      {state.workspaces?.map((item: IWorkspace) => (
        <Item key={item.id} {...item} projectsData={item.projects} />
      ))}
    </ul>
  );
};

export default List;
