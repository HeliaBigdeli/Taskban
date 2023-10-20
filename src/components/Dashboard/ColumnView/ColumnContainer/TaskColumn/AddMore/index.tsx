import Dropdown from "../../../../../Common/Dropdown";
import DropdownItem from "../../../../../Common/Dropdown/DropdownItem";
import Icon from "../../../../../Common/Icon";
import TaskModal from "../../../../TaskModal";
import { useState } from "react";

interface IAddMoreProps {
  isShown: boolean;
  boardId: number
}
const AddMore: React.FC<IAddMoreProps> = ({ isShown, boardId }): JSX.Element => {
  const [taskModal, setTaskModal] = useState<boolean>(false);

  const handleTaskModal = () => {
    setTaskModal(!taskModal);
  };

  const handleEditName = () => {};
  const handleCopyLink = () => {};
  const handleRemove = () => {};

  return (
    <section
      className={`${
        !isShown ? "opacity-0" : "opacity-100"
      } flex items-center gap-1 transition-all`}
    >
      <Icon
        size={24}
        icon="plus"
        className="cursor-pointer"
        onClick={handleTaskModal}
      />
      <Dropdown type="icon" icon={{ icon: "dots" }}>       
        <DropdownItem
          title="ویرایش نام ستون "
          hasIcon={true}
          icon={{ icon: "edit" }}
          onClick={handleEditName}
        />
        <DropdownItem
          title="افزودن تسک"
          hasIcon={true}
          icon={{ icon: "plus" }}
          onClick={handleTaskModal}
        />
        <DropdownItem
          title="کپی لینک"
          hasIcon={true}
          icon={{ icon: "archive" }}
          onClick={handleCopyLink}
        />
        <DropdownItem
          title="حذف"
          hasIcon={true}
          icon={{ icon: "trash"}}
          onClick={handleRemove}
        />      
      </Dropdown>
      {taskModal && <TaskModal modal={taskModal} setModal={handleTaskModal} boardId={boardId} />}
    </section>
  );
};
export default AddMore;
