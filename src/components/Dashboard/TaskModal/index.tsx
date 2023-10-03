import { createPortal } from "react-dom";
import Modal from "../../Common/Modal";

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
          modal={modal}
          setModal={handleShowModal}
          hasCloseIcon={true}
          closeIcon={{ order: 1 }}
          hasHeader={true}
          backIcon={{ order: 2 }}
          hasBackIcon={false}
          hasColor= {true}
          coloredSquare= "lightgray_300"
          header={{ order: 3, text: 'عنوان تسک' }}
        >
            new task modal        
        </Modal>,
        portals
      )}
    </>
  );
};

export default TaskModal;
