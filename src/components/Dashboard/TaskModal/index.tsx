import { createPortal } from "react-dom";
import Modal from "../../Common/Modal";
import Button from "../../Common/Form/Button";
import Icon from "../../Common/Icon";
import { useState } from "react";
import DatePickerModal from "../DatePickerModal";
import Textarea from "../../Common/Form/Textarea";
import Select from "../../Common/Form/Select";
import Input from "../../Common/Form/Input";
const portals = document.getElementById("portals") as Element;

interface IProps {
  modal: boolean;
  setModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const TaskModal: React.FC<IProps> = ({ modal, setModal }): JSX.Element => {
  const tag = [
    { id: 1, title: "درس", color: "indigo_secondary" },
    { id: 2, title: "کار", color: "blue_secondary" },
    { id: 3, title: "پروژه", color: "indigo_secondary" },
  ];
  const [datePickerModal, setDatePickerModal] = useState<boolean>(false);
  const [tagDropdown, setTagDropdown] = useState<boolean>(false);
  const [data, setData] = useState(tag)
  const [priorityModal, setPriorityModal] = useState<boolean>(false);
  const [values, setVlaues] = useState<{}>({
    description: ""
  })

  const handleDatePickerModal = () => {
    setDatePickerModal(!datePickerModal);
  };
  const handlePriorityModal = () => {
    setPriorityModal(!priorityModal);
  };

  const handleShowModal = () => {
    setModal(!modal);
  };
 const dropdownToggele=()=>{
  setTagDropdown(!tagDropdown)
 }
 const handleSearch = (value: string) => {
  const data = value? tag.filter((item) => {
    return item.title.includes(value) 
  }):tag
  setData(data)
}

  return (
    <>
      {createPortal(
        <Modal
          style={{padding:"32px"}}
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
          <div className="flex flex-col w-[1153px] gap-[40px]">
            <div className="flex flex-row-reverse items-center gap-[8px]">
              <span>در</span>
              <div className="w-[158px] h-[37px] rounded-md border border-[#E9EBF0] text-right py-[8px] pr-[5px] pl-[4px]">پروژه اول</div>
              <span>برای</span>
              <div className="border-dashed border-2 rounded-full border-[#c1c1c1] w-[34px] h-[34px] flex justify-center items-center">
                <Icon icon="user_add" color="#c1c1c1" />
              </div>
            </div>
            <Textarea className="w-full py-[19px] px-L rounded-xl text-right h-[191px] resize-none border border-[#E2E2E2] outline-none"
              id="description"
              name="description"
              onChange={() => { }}
              placeholder="توضیحاتی برای این تسک بنویسید"
            />
            <div className="flex flex-row-reverse items-center">
              <span className="ml-S font-medium">افزودن پیوست</span>
              <label className="flex flex-row items-center text-brand-primary text-base font-medium border border-brand-primary h-[36px] rounded-lg w-[112px] py-[4px] px-[8px] gap-[4px] cursor-pointer text-center">آپلود فایل<Icon icon="attach" color="#208d8e" /><input type="file" id="profileImg" hidden /> </label>
            </div>
            <div className="flex flex-row-reverse justify-between">
              <div className="flex flex-row gap-[24px]">
                <div className="cursor-pointer border-dashed border-2 rounded-full border-[#c1c1c1] w-[50px] h-[50px] flex justify-center items-center relative"onClick={dropdownToggele}>
                    <Icon icon="tag" color="#c1c1c1" />
                    <div id="myDropdown" className={`flex flex-col gap-XS ${tagDropdown? "inline-block":"hidden"} absolute overflow: auto w-[173px] h-[160px] z-2 bg-white p-XS bottom-10 shadow-select rounded-lg`} >
                      <div>
                      <Input
                           autoFocus={true}
                           className="pr-L border-none bg-lightgray_200 h-XL outline-none placeholder-text-xs h-[32px]"
                           placeholder="جستجو یا ساختن تگ"
                           name="search"
                           id="search"
                           type="text"
                           hasLabel={false}
                           hasIcon={true}
                           icon={{
                             icon: "search",
                             color: "#BDBDBD",
                             size:24
                           }}
                           onChange={handleSearch}
                             />
                     
                      </div>
                      {data.map((item)=>
                        <div className="flex flex-row-reverse justify-between" >
                          <span className={`bg-${item.color} text-${item.color} px-XS rounded-[14px]`}>{item.title}</span>
                          <Icon icon="dots"></Icon></div>
                      )}
                    </div>
                </div>
                <div
                  onClick={handleDatePickerModal}
                  className="cursor-pointer border-dashed border-2 rounded-full border-[#c1c1c1] w-[50px] h-[50px] flex justify-center items-center">
                  <Icon icon="calender_full" color="#c1c1c1" />
                </div>
                <div onClick={handlePriorityModal} className="cursor-pointer border-dashed border-2 rounded-full border-[#c1c1c1] w-[50px] h-[50px] flex justify-center items-center">
                  <Icon icon="flag" color="#c1c1c1" />
                </div>
              </div>
              <Button
                text="ساختن تسک"
                onClick={() => { }}
                type="button"
                className="z-20 bg-brand-primary text-white h-L text-sm leading-normal self-stretch rounded-md p-S"
                hasIcon={false}
                icon={{
                  icon: "plus_square",
                  color: "white",
                  className: "ml-1",
                }}
              />
            </div>
          </div>
        </Modal>,
        portals
      )}
      {datePickerModal && <DatePickerModal modal={datePickerModal} setModal={handleDatePickerModal} />}
    </>
  );
};

export default TaskModal;
