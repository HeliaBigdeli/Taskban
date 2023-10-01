import { useState } from "react";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
interface ITaskListProps {
  color?: string;
}
const TaskList: React.FC<ITaskListProps> = ({ color }): JSX.Element => {
  const [isShown, setIsShown] = useState<boolean>(true);
  const handleShow = () => {
    setIsShown(!isShown);
  };

  return (
    <div className={` flex w-full flex-col items-start gap-5`}>
      <ListHeader color={color} handleShow={handleShow} />
      <div
        className={`flex ${
          !isShown && "hidden"
        } w-full flex-col items-start gap-5 `}
      >
        <ListItem color={color} />
        <ListItem color={color} />
      </div>
    </div>
  );
};

export default TaskList;
