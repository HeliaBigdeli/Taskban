import DashboardLayout from "../../Layouts/Dashboard";
import ColumnView from "../ColumnView";
import ListShow from "../ListShow";

const Board: React.FC = (): JSX.Element => {
  return (
    <DashboardLayout >
      <ColumnView />
      {/* <ListShow/> */}
    </DashboardLayout>
  );
};

export default Board;

