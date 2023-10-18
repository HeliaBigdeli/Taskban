import { useEffect, useState } from "react";
import Icon from "../../../../../Common/Icon";
import TaskInfoModal from "../../../../TaskInfoModal";
import { useParams } from "react-router-dom";
import useAxios from "../../../../../../hooks/useAxios";
import API_URL from "../../../../../../constants/api.url";

interface IMoreProps {
  isShown: boolean;
  taskId: number;
  boardId: number;
}
const More: React.FC<IMoreProps> = ({ isShown, taskId, boardId }): JSX.Element => {
  const [projectModal, setProjectModal] = useState<boolean>(false);
  const [taskInfo, taskInfoError, taskinfoLoading, getTaskInfo] = useAxios()
  const [comments, commentsError, commentsLoading, getComments] = useAxios()
  const params = useParams()

  const handleProjectModal = () => {
    const url = `${API_URL.WorkSpaces}${params.wid}/${API_URL.Projects}${params.pid}/${API_URL.Boards}${boardId}/${API_URL.Tasks}${taskId}/`;
    getTaskInfo('get', url)
    getComments('get', `${url}comments/`)

    setProjectModal(!projectModal);
  };

  useEffect(() => {   
  }, [taskInfo, comments])

  return (
    <div
      className={`${!isShown ? "h-0" : "h-10"} overflow-hidden transition-all `}
    >
      <div className="w-[217px] h-[1px] bg-[#EFF0F0] mb-S" />
      <section className="flex justify-between items-center self-stretch ">
        <span onClick={handleProjectModal} className="cursor-pointer">
          <Icon size={20} icon="dots" />
        </span>
        <div className="flex w-4 h-4 justify-center items-center cursor-pointer">
          <Icon size={20} icon="check_circle" />
        </div>
      </section>
      {projectModal && taskInfo && (
        <TaskInfoModal modal={projectModal} setModal={handleProjectModal} taskInfo={taskInfo} comments={comments} />
      )}
    </div>
  );
};
export default More;
