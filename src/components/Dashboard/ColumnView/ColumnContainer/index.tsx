import TaskCard from "./TaskCard";
import TaskColumn from "./TaskColumn";
import style from "../style.module.css";
import { Droppable } from "react-beautiful-dnd";

interface ITask {
  id: number;
  name: string;
  img: string;
}

interface IColumnContainerProps {
  setMouseDown: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  is_archive: boolean;
  id: number;
  tasks: ITask[];
}

const ColumnContainer: React.FC<IColumnContainerProps> = ({
  id,
  name,
  tasks,
  is_archive,
  setMouseDown,
}): JSX.Element => {
  const handleClick = (e: React.MouseEvent<EventTarget>) => {
    if (e.target === e.currentTarget) setMouseDown(true);
    else setMouseDown(false);
  };

  return (
    <div
      className="flex shrink-0  flex-col items-center gap-S"
      style={{ direction: "ltr" }}
    >
      <TaskColumn title={name} count={tasks.length} />

      <Droppable droppableId={name} type="group">
        {(provided) => (
          <div
            onMouseDownCapture={handleClick}
            className={`flex w-[290px] pt-0.5 flex-col items-center gap-3 h-[750px] overflow-y-auto overflow-x-hidden ${style.customScrool} `}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((item, index) => {
              return (
                <TaskCard
                  boardId={id}
                  {...item}
                  title={item.name}
                  key={item.id}
                  index={index}
                  boardTitle={name}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ColumnContainer;
