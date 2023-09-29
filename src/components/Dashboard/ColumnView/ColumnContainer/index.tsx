import TaskCard from "./TaskCard";
import TaskColumn from "./TaskColumn";

const ColumnContainer: React.FC = (): JSX.Element => {
  return (
    <div
      className="flex shrink-0 flex-col items-start gap-S"
      style={{ direction: "ltr" }}
    >
      <TaskColumn />
      <div className="flex flex-col items-start gap-3">
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default ColumnContainer;
