import WorkSpacesView from "../../../components/Dashboard/WorkSpacesView";
import useWorkspace from "../../../hooks/workspace";

const WorkSpaces: React.FC = (): JSX.Element => {
  useWorkspace() 
  return <WorkSpacesView />;
};

export default WorkSpaces;
