import { useState } from "react";
import AddMore from "./AddMore";
interface ITaskColumnProps {
  title: string;
  count: number;
  boardId: number
}
const TaskColumn: React.FC<ITaskColumnProps> = ({ title, count, boardId }): JSX.Element => {
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <div
      className="flex w-[250px] py-XS px-[12px] justify-between items-center rounded-2xl border-t-2 border-[#FD7E14] shadow-taskColumn"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <AddMore isShown={isShown} boardId={boardId}/>

      <section className="flex items-center gap-1 ">
        <div className="flex pt-0.5 px-1 flex-col justify-center items-center gap-2.5 rounded-[100px] bg-[#F4F4F4] text-black text-xs font-normal">
          {count}
        </div>
        <span className="text-black text-base font-medium">{title}</span>
      </section>
    </div>
  );
};

export default TaskColumn;
