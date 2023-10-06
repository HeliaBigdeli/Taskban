import { createPortal } from "react-dom";
import Modal from "../../Common/Modal";
import Button from "../../Common/Form/Button";
import Icon from "../../Common/Icon";
import { useState } from "react";
import DatePickerModal from "../DatePickerModal";
import Textarea from "../../Common/Form/Textarea";

const portals = document.getElementById("portals") as Element;

interface IProps {
  modal: boolean;
  setModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const TaskInfoModal: React.FC<IProps> = ({ modal, setModal }): JSX.Element => {
  const [datePickerModal, setDatePickerModal] = useState<boolean>(false);
  const handleDatePickerModal = () => {
    setDatePickerModal(!datePickerModal);
  };

  const handleShowModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {createPortal(
        <Modal
          style={{}}
          modal={modal}
          setModal={handleShowModal}
          hasHeader={false}
          header={{ text: "", order: 3 }}
          hasBackIcon={false}
          backIcon={{ order: 2 }}
          hasCloseIcon={true}
          closeIcon={{ order: 1 }}
        >
          <div className="flex flex-row-reverse w-[1100px] justify-between">
            <div className="flex w-[50%]">
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-end">
                  {/* <ProfileImage /> */}
                  <Button
                    type="button"
                    name="status"
                    onClick={() => {}}
                    text="test"
                    className="bg-darkred p-1 rounded-md text-white w-[100px]"
                  />
                </div>
                {/* <div className="cursor-pointer border-dashed border-2 rounded-full border-[#c1c1c1] w-[40px] h-[40px] flex justify-center items-center">
                  <Icon icon="flag" color="#c1c1c1" />
                </div> */}
                <div className="w-full">
                  <Textarea
                    // value={value}
                    name="description"
                    id="description"
                    onChange={() => {}}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end w-[50%]">
              {/* <div className="flex flex-col">
                <div>1</div>
                <div>2</div>
              </div> */}
            </div>
          </div>
        </Modal>,
        portals
      )}
      {DatePickerModal && (
        <DatePickerModal
          modal={datePickerModal}
          setModal={handleDatePickerModal}
        />
      )}
    </>
  );
};

export default TaskInfoModal;
