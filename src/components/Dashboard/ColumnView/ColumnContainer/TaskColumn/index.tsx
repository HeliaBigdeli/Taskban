import { useState } from "react";
import AddMore from "./AddMore";
import API_URL from "../../../../../constants/api.url";
import { useNavigate, useParams } from "react-router-dom";
interface ITaskColumnProps {
  title: string;
  count: number;
}
const TaskColumn: React.FC<ITaskColumnProps> = ({
  title,
  count,
}): JSX.Element => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div
      className="flex w-[250px] py-XS px-[12px] justify-between items-center rounded-2xl border-t-2 border-[#FD7E14] shadow-taskColumn"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <AddMore isShown={isShown} />

      <section
        //onClick={navigate(`${API_URL.WorkSpaces}${params.wid}/${API_URL.Projects}${params.pid}/${API_URL.Boards}${}`)}
        className="flex items-center gap-1 "
      >
        <div className="flex pt-0.5 px-1 flex-col justify-center items-center gap-2.5 rounded-[100px] bg-[#F4F4F4] text-black text-xs font-normal">
          {count}
        </div>
        <span className="text-black text-base font-medium">{title}</span>
      </section>
    </div>
  );
};

export default TaskColumn;
