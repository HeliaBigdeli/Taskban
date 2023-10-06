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

const TaskModal: React.FC<IProps> = ({ modal, setModal }): JSX.Element => {
  const [datePickerModal, setDatePickerModal] = useState<boolean>(false);
  const [values, setVlaues] = useState<{}>({
    description: "",
  });

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
          hasHeader={true}
          header={{ text: "عنوان تسک", order: 3 }}
          hasBackIcon={false}
          backIcon={{ order: 2 }}
          hasCloseIcon={true}
          hasColor={true}
          coloredSquare="lightgray_300"
          closeIcon={{ order: 1 }}
        >
          <div className="flex flex-col w-[1153px] gap-[40px] px-[12px] pb-[12px]">
            <div className="flex flex-row-reverse items-center gap-[8px]">
              <span>در</span>
              <div className="w-[158px] h-[37px] rounded-md border border-[#E9EBF0] text-right py-[8px] pr-[5px] pl-[4px]">
                پروژه اول
              </div>
              <span>برای</span>
              <div className="border-dashed border-2 rounded-full border-[#c1c1c1] w-[34px] h-[34px] flex justify-center items-center">
                <Icon icon="user_add" color="#c1c1c1" />
              </div>
            </div>
            <Textarea
              className="w-full py-[19px] px-L rounded-xl text-right h-[191px] resize-none border border-[#E2E2E2] outline-none"
              id="description"
              name="description"
              onChange={() => {}}
              placeholder="توضیحاتی برای این تسک بنویسید"
            />
            <div className="flex flex-row-reverse items-center">
              <span className="ml-S font-medium">افزودن پیوست</span>
              <label className="flex flex-row items-center text-brand-primary text-base font-medium border border-brand-primary h-[36px] rounded-lg w-[112px] py-[4px] px-[8px] gap-[4px] cursor-pointer text-center">
                آپلود فایل
                <Icon icon="attach" color="#208d8e" />
                <input type="file" id="profileImg" hidden />{" "}
              </label>
            </div>
            <div className="flex flex-row-reverse justify-between">
              <div className="flex flex-row gap-[24px]">
                <div className="cursor-pointer border-dashed border-2 rounded-full border-[#c1c1c1] w-[50px] h-[50px] flex justify-center items-center">
                  <Icon icon="tag" color="#c1c1c1" />
                </div>
                <div
                  onClick={handleDatePickerModal}
                  className="cursor-pointer border-dashed border-2 rounded-full border-[#c1c1c1] w-[50px] h-[50px] flex justify-center items-center"
                >
                  <Icon icon="calender_full" color="#c1c1c1" />
                </div>
                <div className="cursor-pointer border-dashed border-2 rounded-full border-[#c1c1c1] w-[50px] h-[50px] flex justify-center items-center">
                  <Icon icon="flag" color="#c1c1c1" />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Button
                  text="ساختن تسک"
                  onClick={() => {}}
                  type="button"
                  className="z-20 bg-brand-primary text-white h-L text-sm leading-normal rounded-md p-S"
                  hasIcon={false}
                  icon={{
                    icon: "plus_square",
                    color: "white",
                    className: "ml-1",
                  }}
                />
              </div>
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

export default TaskModal;
