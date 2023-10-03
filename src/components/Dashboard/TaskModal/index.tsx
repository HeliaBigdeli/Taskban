import { createPortal } from "react-dom";
import Modal from "../../Common/Modal";
import DatePicker from "../../Common/DatePicker";

const portals = document.getElementById("portals") as Element;

interface IProps {
  modal: boolean;
  setModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const TaskModal: React.FC<IProps> = ({ modal, setModal }): JSX.Element => {
  const handleShowModal = () => {
    setModal(!modal);
  };

  return (
    <>
      test
      {createPortal(
        <Modal
          className="p-0"
          modal={modal}
          setModal={handleShowModal}
          hasCloseIcon={false}
          closeIcon={{ order: 1 }}
          hasHeader={false}
          backIcon={{ order: 2 }}
          hasBackIcon={false}
          hasColor={false}
          coloredSquare="lightgray_300"
          header={{ order: 3, text: "عنوان تسک" }}
        >
          <DatePicker />
        </Modal>,
        portals
      )}
    </>
  );
};

export default TaskModal;
