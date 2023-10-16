import { createPortal } from "react-dom";
import Modal from "../../Common/Modal";
import Button from "../../Common/Form/Button";
import Icon from "../../Common/Icon";
import { useState } from "react";
import DatePickerModal from "../DatePickerModal";
import Textarea from "../../Common/Form/Textarea";
import Input from "../../Common/Form/Input";
import IconItem from '../../Common/IconItem'
import Select from "../../Common/Form/Select";
import ShareModal from "../ShareModal";

const portals = document.getElementById("portals") as Element;
interface IProps {
  modal: boolean;
  setModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
interface Itag {
  id: number
  title: string,
  color: string
}
const TaskModal: React.FC<IProps> = ({ modal, setModal }): JSX.Element => {
  const [tags, setTags] = useState([
    { id: 1, title: "درس", color: "indigo_secondary" },
    { id: 2, title: "کاژر", color: "blue_secondary" },
    { id: 3, title: "پروژه", color: "indigo_secondary" },
  ])
  const priority = [
    { id: 1, text: "فوری", color: "red" },
    { id: 2, text: "بالا", color: "yellow" },
    { id: 3, text: "متوسط", color: "blue" },
    { id: 4, text: "پایین", color: "gray" },
  ];

  const [datePickerModal, setDatePickerModal] = useState<boolean>(false);
  const [shareModal, setShareModal] = useState<boolean>(false);
  const [projects, setProjectsState] = useState([
    { id: 1, color: "yellow", title: "پروژه اول" },
    { id: 2, color: "yellow", title: "پروژه دوم" },
    { id: 3, color: "yellow", title: "پروژه سوم" },
    { id: 4, color: "yellow", title: "پروژه چهارم" },
  ])
  const [newTags, setNewTagsState] = useState<Itag[]>([])
  const [tagDropdown, setTagDropdown] = useState<boolean>(false);
  const [data, setData] = useState(tags);
  const [showPriority, setShowPriority] = useState<boolean>(false);
  const [showTagEdit, setShowTagEdit] = useState(false)
  const [searchValue, setSearchValue] = useState<string>("");
  const [values, setVlaues] = useState<{}>({
    description: "",
    priority: "",
    tag: searchValue,
    memebers: [],
    projectName: "",
  });


  const handleDatePickerModal = () => {
    setDatePickerModal(!datePickerModal);
  };

  const handleShowModal = () => {
    setModal(!modal);
  };
  const handleShareModal = () => {
    setShareModal(!shareModal);
  };

  const dropdownToggele = () => {
    setData(tags);
    setTagDropdown(!tagDropdown);
    showPriority && setShowPriority(false)
  };
  const togglePriority = () => {
    setShowPriority(!showPriority);
    tagDropdown && setTagDropdown(false)
  };
  const keyDownHandler = (e) => {
    if (e.key === 'Enter') {
      if (data.length === tags.length) {
        setNewTagsState([...newTags, { id: 0, color: "blue_secondary", title: searchValue }])
      }
    }
  }
  const handleSearch = (name: string, value: string) => {
    setSearchValue(value);
    const data = tags.filter((item) => {
      return (item.title.includes(value));
    });
    setData(data);
  };
  const getPriority = (value: string) => {
    setVlaues({ ...values, priority: value });
  };

  return (
    <>
      {createPortal(
        <Modal
          style={{ padding: "32px" }}
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
              <Select items={projects} name={"projects"} onChange={() => { }} className="w-[158px] h-[37px] rounded-md border border-[#E9EBF0] text-right py-[8px] pr-[5px] pl-[4px]" ></Select>
              <span>برای</span>
              <div className="border-dashed border-2 rounded-full border-[#c1c1c1] w-[34px] h-[34px] flex justify-center items-center" onClick={() => { setShareModal(!shareModal) }} >
                <Icon icon="user_add" color="#c1c1c1" />
              </div>
            </div>
            <Textarea
              className="w-full py-[19px] px-L rounded-xl text-right h-[191px] resize-none border border-[#E2E2E2] outline-none"
              id="description"
              name="description"
              onChange={() => { }}
              placeholder="توضیحاتی برای این تسک بنویسید"
            />
            <div className="flex flex-row-reverse items-center">
              <span className="ml-S font-medium">افزودن پیوست</span>
              <label className="flex flex-row items-center text-base font-medium border border-brand-primary h-[36px] rounded-lg w-[112px] py-[4px] px-[8px] gap-[4px] cursor-pointer text-center">
                آپلود فایل
                <Icon icon="attach" color="#208d8e" />
                <input type="file" id="profileImg" hidden />{" "}
              </label>
            </div>
            <div className="flex flex-row-reverse justify-between">
              <div className="flex flex-row gap-[24px]">
                <div
                  className="cursor-pointer border-dashed border-2 rounded-full border-[#c1c1c1] w-[50px] h-[50px] flex justify-center items-center relative"
                  onClick={dropdownToggele} onKeyDown={(e) => keyDownHandler(e)}
                >
                  <Icon icon="tag" color="#c1c1c1" />
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    id="myDropdown"
                    className={`flex flex-col gap-XS ${tagDropdown ? "inline-block" : "hidden"
                      } absolute overflow: auto w-[173px] h-auto z-2 bg-white p-XS bottom-10 shadow-select rounded-lg `}
                  >
                    {newTags.map((item) => {
                      return (
                        <div className="flex flex-row-reverse justify-between">
                          <span
                            className={`bg-${item.color} text-${item.color} px-XS rounded-[14px]`}
                          >
                            {item.title}
                          </span>
                          <Icon icon="dots" color="#BDBDBD"></Icon>
                        </div>
                      )
                    }

                    )}
                    <div>
                      <Input
                        autoFocus={true}
                        className="pr-L border-none bg-[#E9E9E9] h-L outline-none text-xs mb-[4px]"
                        placeholder="جستجو یا ساختن تگ"
                        name="search"
                        id="search"
                        type="text"
                        hasLabel={false}
                        hasIcon={true}
                        icon={{
                          icon: "search",
                          color: "#BDBDBD",
                          size: 24,
                        }}

                        onChange={(name, value) => handleSearch(name, value)}
                        inputValue={searchValue}
                      />
                      {/* <span className={`text-sm ${searchValue ? 'black' : 'text-lightgray'} font-b`}>{searchValue || 'انتخاب کنید'}</span> */}
                    </div>
                    {data.map((item) => (
                      <div className="flex flex-row-reverse justify-between">
                        <span 
                          className={`bg-${item.color} text-${item.color} px-XS rounded-[14px]`}
                        >
                          {item.title}
                        </span>

                        <Icon icon="dots" color="#BDBDBD"></Icon>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  onClick={handleDatePickerModal}
                  className="cursor-pointer border-dashed border-2 rounded-full border-[#c1c1c1] w-[50px] h-[50px] flex justify-center items-center"
                >
                  <Icon icon="calender_full" color="#c1c1c1" />
                </div>
                <div
                  onClick={togglePriority}
                  className="cursor-pointer border-dashed border-2 rounded-full border-[#c1c1c1] w-[50px] h-[50px] flex justify-center items-center relative"
                >
                  <Icon icon="flag" color="#c1c1c1" />
                  <div
                    id="myDropdown"
                    className={`flex flex-col gap-XS ${showPriority ? "inline-block" : "hidden"
                      } absolute overflow: auto w-[158px] h-auto z-2 bg-white p-XS bottom-10 shadow-select rounded-lg`}
                  >
                    <ul className="flex flex-col gap-XS">

                      {priority.map((item) => {
                        return (
                          <IconItem text={item.text} color={item.color} icon={"flag"} url="" />
                        )
                      })}
                    </ul>
                    <Button
                      type={"button"}
                      onClick={() => { }}
                      hasIcon={true}
                      icon={{
                        icon: "close",
                        color: "#E45454",
                      }}
                      text="حذف اولویت"
                    />
                  </div>
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
      {datePickerModal && (
        <DatePickerModal
          modal={datePickerModal}
          setModal={handleDatePickerModal}
        />
      )}
      {shareModal && (
        <ShareModal modal={shareModal} setModal={handleShareModal} />
      )}
    </>
  );
};

export default TaskModal;
