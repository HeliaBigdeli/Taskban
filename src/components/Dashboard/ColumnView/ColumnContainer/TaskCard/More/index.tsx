import Icon from "../../../../../Common/Icon";
import TaskInfoModal from "../../../../TaskInfoModal";
import { useState } from "react";

interface IMoreProps {
  isShown: boolean;
}

const More: React.FC<IMoreProps> = ({ isShown }): JSX.Element => {
  const [taskModalModal, setDatePickerModal] = useState<boolean>(false);
  const handleTaskModalModal = () => {
    setDatePickerModal(!taskModalModal);
  };
  return (
    <div
      className={`${!isShown ? "h-0" : "h-10"} overflow-hidden transition-all `}
    >
      <hr className="w-[217px] h-[1px] bg-[#EFF0F0] mb-S"/>
      <section className="flex justify-between items-center self-stretch" onClick={handleTaskModalModal}>
          <Icon size={20} icon="dots" className="cursor-pointer"/>
        <div className="flex w-4 h-4 justify-center items-center">
          <Icon size={20} icon="check_circle" className="cursor-pointer"/>
        </div>
      </section>
      {taskModalModal && (
        <TaskInfoModal
          modal={taskModalModal}
          setModal={handleTaskModalModal}
        />
      )}
    </div>
  );
};
export default More;
