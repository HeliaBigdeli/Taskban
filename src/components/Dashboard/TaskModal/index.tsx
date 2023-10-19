import { createPortal } from "react-dom";
import Modal from "../../Common/Modal";
import Button from "../../Common/Form/Button";
import Icon from "../../Common/Icon";
import { useState } from "react";
import DatePickerModal from "../DatePickerModal";
import Textarea from "../../Common/Form/Textarea";
import ShareModal from "../ShareModal";
import { tag } from "../../../constants/list";
import Dropdown from "../../Common/Dropdown";
import DropdownItem from "../../Common/Dropdown/DropdownItem";
import File from "../../Common/Form/File";

const portals = document.getElementById("portals") as Element;
interface IProps {
  modal: boolean;
  setModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
interface Itag {
  id: number;
  title: string;
  color: string;
}
const TaskModal: React.FC<IProps> = ({ modal, setModal }): JSX.Element => {
  const [tags, setTags] = useState(tag);
  const [datePickerModal, setDatePickerModal] = useState<boolean>(false);
  const [shareModal, setShareModal] = useState<boolean>(false);
  const [newTags, setNewTagsState] = useState<Itag>();
  const [data, setData] = useState(tags);
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

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      if (data.length === tags.length) {
        setNewTagsState({
          ...newTags,
          id: tags.length + 1,
          color: "blue_secondary",
          title: searchValue,
        });
      }
    }
  };
  const handleSearch = (name: string, value: string) => {
    setSearchValue(value);
    const data = tags.filter((item) => {
      return item.title.includes(value);
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
          <div className="flex flex-col w-[1153px] gap-M">
            <div className="flex flex-row-reverse items-center gap-[8px]">
              <span>در</span>
              <span>برای</span>
              <div
                className="border-dashed border-2 rounded-full border-[#c1c1c1] w-[34px] h-[34px] flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setShareModal(!shareModal);
                }}
              >
                <Icon icon="user_add" color="#c1c1c1" />
              </div>
            </div>
            <Textarea
              className="w-full py-[19px] px-L rounded-xl text-right resize-none border border-[#E2E2E2] outline-none"
              id="description"
              rows={5}
              name="description"
              onChange={() => {}}
              placeholder="توضیحاتی برای این تسک بنویسید"
            />
            <File
              onChange={() => {}}
              id="thumbnail"
              name="thumbnail"
              hasLabel={true}
              label="افزودن پیوست"
            />
            <File
              onChange={() => {}}
              id="atachment"
              name="atachment"
              hasLabel={true}
              label="افزودن کاور"
            />
            <div className="flex flex-row-reverse justify-between items-center">
              <div className="flex flex-row gap-M">
                <div
                  className="cursor-pointer border-dashed border-2 rounded-full border-[#c1c1c1] w-[50px] h-[50px] flex justify-center items-center"
                  onKeyDown={(e) => keyDownHandler(e)}
                >
                  <Dropdown
                    type="icon"
                    icon={{ icon: "tag", color: "#c1c1c1" }}
                  >
                    {tags?.map((item) => {
                      return (
                        <DropdownItem title={item.title} bgcolor={item.color} />
                      );
                    })}
                  </Dropdown>
                </div>
                <div
                  onClick={handleDatePickerModal}
                  className="cursor-pointer border-dashed border-2 rounded-full border-[#c1c1c1] w-[50px] h-[50px] flex justify-center items-center"
                >
                  <Icon icon="calender_full" color="#c1c1c1" />
                </div>
                <div className="cursor-pointer border-dashed border-2 rounded-full border-[#c1c1c1] w-[50px] h-[50px] flex justify-center items-center">
                  <Dropdown
                    type="icon"
                    icon={{ icon: "flag", color: "#c1c1c1" }}
                  >
                    <DropdownItem
                      title="فوری"
                      hasIcon={true}
                      icon={{ icon: "flag", color: "#FB0606" }}
                    />
                    <DropdownItem
                      title="بالا"
                      hasIcon={true}
                      icon={{ icon: "flag", color: "#FFE605" }}
                    />
                    <DropdownItem
                      title="متوسط"
                      hasIcon={true}
                      icon={{ icon: "flag", color: "#09DBCE" }}
                    />
                    <DropdownItem
                      title="پایین"
                      hasIcon={true}
                      icon={{ icon: "flag", color: "#B2ACAC" }}
                    />
                  </Dropdown>
                </div>
              </div>
              <Button
                text="ساختن تسک"
                onClick={() => {}}
                type="button"
                className="bg-brand-primary text-white h-L text-sm rounded-md px-M"
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