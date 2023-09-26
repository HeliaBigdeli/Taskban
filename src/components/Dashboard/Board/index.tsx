import DashboardLayout from "../../Layouts/Dashboard";
import ColumnShow from "../ColumnShow";

const Board: React.FC = (): JSX.Element => {
  return (
    <DashboardLayout title="پروژه" hasHeader={true}>
      <ColumnShow />
    </DashboardLayout>
  );
};

export default Board;
