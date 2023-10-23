import { useState } from "react";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import { IBoard } from "../../../../interfaces/board";

const TaskList: React.FC<IBoard> = ({
  name,
  tasks_count,
  tasks,
  id,
}): JSX.Element => {
  const [isShown, setIsShown] = useState<boolean>(true);
  const handleShow = () => {
    setIsShown(!isShown);
  };
  const height = `${65 * tasks_count - 40}px`;
  return (
    <div className={` flex w-full flex-col items-start gap-5`}>
      <ListHeader
        handleShow={handleShow}
        title={name}
        tasks_count={tasks_count}
      />
      <div
        className={`flex  overflow-hidden w-full flex-col transition-all duration-300 items-start gap-5 `}
        style={{ height: `${!isShown ? "0px" : height}` }}
      >
        {tasks?.map((item) => {
          return <ListItem key={item.id} {...item} boardId={id} boardTitle={name} />;
        })}
      </div>
    </div>
  );
};

export default TaskList;
