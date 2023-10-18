import ListView from "../../../components/Dashboard/ListView";
import CalenderView from "../../../components/Dashboard/CalenderView";
import ColumnView from "../../../components/Dashboard/ColumnView";
import { useSelector } from "react-redux";
import { selectView } from "../../../features/viewSlice";
import { useEffect } from "react";

const Boards: React.FC = (): JSX.Element => {
  const view: string = useSelector(selectView);

  useEffect(() => {}, [view]);

  switch (view) {
    case "list":
      return <ListView />;
    case "calender":
      return <CalenderView />;
    default:
      return <ColumnView />;
  }
};

export default Boards;
