import { useParams } from "react-router-dom";
import Icon from "../../../../../Common/Icon";
import { useEffect, useState } from "react";
import useAxios from "../../../../../../hooks/useAxios";
import API_URL from "../../../../../../constants/api.url";
import TaskInfoModal from "../../../../TaskInfoModal";
import { useSelector } from "react-redux";
import { taskUpdate } from "../../../../../../features/update/updateSlice";
import { tasks } from "../../../../../../constants/url";
interface IDescriptionProps {
  taskId: number;
  boardId: number;
  boardTitle: string;
}
const Description: React.FC<IDescriptionProps> = ({
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
    <>
      <div
        onClick={() => {
          setShowTaskModal(!showTaskModal);
        }}
        className="flex cursor-pointer w-[70px] px-2.5 justify-center items-center gap-2.5 text-xs font-normal text-[#0E0E0E]"
      >
        <Icon icon="paragraph" size={16} color="#BDC0C6" />
      </div>
      {showTaskModal && taskInfo && (
        <TaskInfoModal
          modal={showTaskModal}
          setModal={setShowTaskModal}
          taskInfo={taskInfo}
          boardTitle={boardTitle}
          boardId={boardId}
        />
      )}
    </>
  );
};

export default Description;
