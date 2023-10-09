import { useState } from "react";
import Icon from "../../../../../Common/Icon";
import TaskInfoModal from "../../../../TaskInfoModal";

interface IMoreProps {
  isShown: boolean;
}
const More: React.FC<IMoreProps> = ({ isShown }): JSX.Element => {
  const [projectModal, setProjectModal] = useState<boolean>(false);

  const handleProjectModal = () => { 
    setProjectModal(!projectModal);
  };

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
      {projectModal && (
        <TaskInfoModal modal={projectModal} setModal={handleProjectModal} />
      )}
    </div>
  );
};
export default More;
