import { useEffect, useState } from "react";
import Icon from "../../../../../Common/Icon";
import TaskInfoModal from "../../../../TaskInfoModal";
import { useParams } from "react-router-dom";
import useAxios from "../../../../../../hooks/useAxios";
import { task_comments, tasks } from "../../../../../../constants/url";
import { taskUpdate } from "../../../../../../features/update/updateSlice";
import { useSelector } from "react-redux";

interface IMoreProps {
  isShown: boolean;
  taskId: number;
  boardId: number;
  boardTitle: string;
}
const More: React.FC<IMoreProps> = ({
  isShown,
  taskId,
  boardId,
  boardTitle,
}): JSX.Element => {
  const [showTaskModal, setShowTaskModal] = useState<boolean>(false);
  const [taskInfo, taskInfoError, taskinfoLoading, getTaskInfo] = useAxios();
  const params = useParams();
  const tasksList = useSelector(taskUpdate);

  const handleshowTaskModal = async () => {
    getTaskInfo(
      "get",
      tasks.get({
        wid: params.wid,
        pid: params.pid,
        bid: boardId,
        tid: taskId,
      })
    );
  };

   useEffect(() => {
     handleshowTaskModal();
   }, [tasksList]);

  return (
    <div
      className={`${!isShown ? "h-0" : "h-10"} overflow-hidden transition-all `}
    >
      <div className="w-[217px] h-[1px] bg-[#EFF0F0] mb-S" />
      <section className="flex justify-between items-center self-stretch ">
        <span
          onClick={() => {
            setShowTaskModal(!showTaskModal);
          }}
          className="cursor-pointer"
        >
          <Icon size={20} icon="dots" />
        </span>
        <div className="flex w-4 h-4 justify-center items-center cursor-pointer">
          <Icon size={20} icon="check_circle" />
        </div>
      </section>
      {showTaskModal && taskInfo && (
        <TaskInfoModal
          modal={showTaskModal}
          setModal={setShowTaskModal}
          taskInfo={taskInfo}
          boardTitle={boardTitle}
          boardId={boardId}
        />
      )}
    </div>
  );
};
export default More;
