import Modal from "../../../Modal";
import { IAlert } from "../../../../../interfaces/modals";
import Button from "../../../Form/Button";

const AlertModal: React.FC<IAlert> = ({
  isAlertOpen,
  setIsAlertOpen,
  alertText,
  handleYes,
}): JSX.Element => {
  const handleNo = () => {
    setIsAlertOpen(false);
  };

  return (
    <Modal
      modal={isAlertOpen}
      setModal={setIsAlertOpen}
      hasBackIcon={false}
      backIcon={{ order: 1 }}
      hasCloseIcon={false}
      closeIcon={{ order: 3 }}
      hasHeader={true}
      header={{
        order: 2,
        text: alertText,
      }}
    >
      <div className="flex justify-evenly items-center">
        <Button
          type="button"
          onClick={handleYes}
          text="بله"
          className="bg-green-primary px-5 py-1 rounded-lg text-white"
        />
        <Button
          type="button"
          onClick={handleNo}
          text="خیر"
          className="bg-red-primary px-5 py-1 rounded-lg text-white"
        />
      </div>
    </Modal>
  );
};

export default AlertModal;
