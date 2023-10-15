import { useState } from "react";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
interface ITaskListProps {
  color?: string;
  name: string;
  is_archive: boolean;
  tasks_count: number;

  id: number;
  tasks: {
    id: number;
    name: string;
    img: string;
  }[];
}
const TaskList: React.FC<ITaskListProps> = ({
  color,
  name,
  tasks_count,
  tasks,
}): JSX.Element => {
  const [isShown, setIsShown] = useState<boolean>(true);
  const handleShow = () => {
    setIsShown(!isShown);
  };
const height = `${70 * tasks_count}px`;
  return (
    <div className={` flex w-full flex-col items-start gap-5`}>
      <ListHeader
        color={color}
        handleShow={handleShow}
        title={name}
        tasks_count={tasks_count}
      />
      <div
        className={`flex  overflow-hidden w-full flex-col transition-all duration-300 items-start gap-5 `}
        style={{ height: `${!isShown ? "0px" : height}` }}
      >
        {tasks.map((item) => {
          return <ListItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default TaskList;
