import { RootState } from "../../../app/store";
import WorkSpacesView from "../../../components/Dashboard/WorkSpacesView";
import selectToken from "../../../features/authSlice";
import { useSelector } from "react-redux";

const WorkSpaces: React.FC = (): JSX.Element => {
  const token = useSelector((state: RootState) => state.auth.access);

  return <WorkSpacesView />;
};

export default WorkSpaces;
