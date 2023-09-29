import DashboardLayout from "../../Layouts/Dashboard";
import ColumnShow from "../ColumnShow";
import ListShow from "../ListShow";

const Board: React.FC = (): JSX.Element => {
  return (
    <DashboardLayout title="پروژه" hasHeader={true}>
      <ColumnShow />
      {/* <ListShow/> */}
    </DashboardLayout>
  );
};

export default Board;
