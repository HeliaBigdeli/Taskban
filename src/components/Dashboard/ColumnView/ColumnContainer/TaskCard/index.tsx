import Checkmark from "./Checkmark";
import Tag from "../../../../Dashboard/Tag";
import { useState } from "react";
import More from "./More";
import Icon from "../../../../Common/Icon";
import { Draggable } from "react-beautiful-dnd";
import { ITask } from "../../../../../interfaces/task";
import MembersThumb from "../../../../Common/MembersThumb";

interface ITaskCardProps extends ITask {
  index: number;
  boardId: number;
  boardTitle: string;
}

const TaskCard: React.FC<ITaskCardProps> = ({
  thumbnail,
  name,
  id,
  index,
  boardId,
  priority,
  boardTitle,
  deadline,
  members,
}): JSX.Element => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const flagColor = {
    1: "#82C91E",
    2: "#15AABF",
    3: "#FAB005",
    4: "#FA5252",
  };
  const d = new Date(deadline);
  const currentDate = new Date().getTime();
  const fullDate = new Intl.DateTimeFormat("fa-IR")
    .format(d)
    .substring(5, 9)
    .replace("/", " / ");
  const month = new Intl.DateTimeFormat("fa-IR", { month: "short" }).format(d);
  const day = new Intl.DateTimeFormat("fa-IR", { day: "numeric" }).format(d);

  const diffDays = Math.floor(
    (d.getTime() - currentDate) / (1000 * 60 * 60 * 24)
  );

  const weekday =
    diffDays === 0
      ? "امروز"
      : diffDays === 1
      ? "فردا"
      : diffDays === 2
      ? "پس فردا"
      : new Intl.DateTimeFormat("fa-IR", { weekday: "short" }).format(d);
  return (
    <Draggable draggableId={`${boardTitle + id} `} index={index}>
      {(provided) => (
        <article
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="flex w-[249px] mx-4 p-S flex-col items-end gap-S rounded-2xl bg-white shadow-taskCard"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {thumbnail && (
            <img
              src={thumbnail}
              alt="task-img"
              className={`h-[134px] self-stretch rounded-[4px] bg-lightgray  bg-cover bg-no-repeat`}
            />
          )}
          <section className="flex justify-between items-start gap-2.5 self-stretch">
            <div className="m-3.5">
              <MembersThumb members={members} size={24} />
            </div>
            <div className="flex flex-col items-end gap-2.5 ">
              <span className="text-[#534D60] text-xs  font-normal">
                اسم لیست
              </span>
              <span className=" text-[#0E0E0E] text-xs  font-normal">
                {name}
              </span>
            </div>
          </section>

          <section className="flex items-start gap-XS">
            <Checkmark date={fullDate} />
            <div className="flex justify-end items-center gap-0.5">
              <span
                className="text-[#343434] text-xs tracking-wide  font-normal"
                style={{ direction: "rtl" }}
              >
                {day}
                &nbsp;
                {month}
                &nbsp; &#45; &nbsp;
                {weekday}
              </span>
              <Icon icon="flag" size={14} color={flagColor[priority]} />
            </div>
          </section>
          <section className="flex items-start gap-XS">
            <Tag color="grape" text="پروژه" />
            <Tag color="blue" text="درس" />
          </section>
          <More
            isShown={isShown}
            taskId={id}
            boardId={boardId}
            boardTitle={boardTitle}
          />
        </article>
      )}
    </Draggable>
  );
};
export default TaskCard;
