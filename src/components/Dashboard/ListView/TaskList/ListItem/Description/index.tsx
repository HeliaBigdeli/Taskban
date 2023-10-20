import { useParams } from "react-router-dom";
import Icon from "../../../../../Common/Icon";
import { useEffect, useState } from "react";
import useAxios from "../../../../../../hooks/useAxios";
import API_URL from "../../../../../../constants/api.url";
import TaskInfoModal from "../../../../TaskInfoModal";

interface IDescriptionProps {
  taskId: number;
  boardId: number;
}
const Description: React.FC<IDescriptionProps> = ({
  taskId,
  boardId,
}): JSX.Element => {
  const [showTaskModal, setShowTaskModal] = useState<boolean>(false);
  const [taskInfo, taskInfoError, taskinfoLoading, getTaskInfo] = useAxios();
  const [comments, commentsError, commentsLoading, getComments] = useAxios();
  const params = useParams();
  const handleshowTaskModal = () => {
    const url = `${API_URL.WorkSpaces}${params.wid}/${API_URL.Projects}${params.pid}/${API_URL.Boards}${boardId}/${API_URL.Tasks}${taskId}/`;
    getTaskInfo("get", url);
    getComments("get", `${url}comments/`);

    setShowTaskModal(!showTaskModal);
  };
  useEffect(() => {}, [taskInfo, comments]);

  return (
    <>
      <div
        onClick={handleshowTaskModal}
        className="flex cursor-pointer w-[70px] px-2.5 justify-center items-center gap-2.5 text-xs font-normal text-[#0E0E0E]"
      >
        <Icon icon="paragraph" size={16} color="#BDC0C6" />
      </div>
      {showTaskModal && taskInfo && (
        <TaskInfoModal
          modal={showTaskModal}
          setModal={handleshowTaskModal}
          taskInfo={taskInfo}
          comments={comments}
        />
      )}
    </>
  );
};

export default Description;
