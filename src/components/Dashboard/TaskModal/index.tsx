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
import Select from "../../Common/Form/Select";
import useAxios from "../../../hooks/useAxios";
import { useParams } from "react-router-dom";
import { tasks } from "../../../constants/url";

const portals = document.getElementById("portals") as Element;
interface IProps {
  boardId?: number;
  modal: boolean;
  setModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const TaskModal: React.FC<IProps> = ({
  modal,
  setModal,
  boardId,
}): JSX.Element => {
  const params = useParams();
  const [tags, setTags] = useState(tag);
  const [datePickerModal, setDatePickerModal] = useState<boolean>(false);
  const [shareModal, setShareModal] = useState<boolean>(false);
  const [response, error, loading, fetcher] = useAxios();
  const [values, setVlaues] = useState<{}>({
    description: "",
    priority: 1,
    // attachment: "",
    thumbnail: "",
    name: "test",
    order: 2,
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

  const handleFile = (name, value) => {
    
  };

  const handleSubmit = async () => {
    await fetcher(
      "post",
      tasks.post({ wid: params.wid, pid: params.pid, bid: boardId }),
      values
    );
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
              <Select
                name="tag"
                onChange={() => {}}
                items={tag}
                className="w-[200px]"
                searchPlaceholder="جستجو"
              />
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
              rows={1}
              name="description"
              onChange={() => {}}
              placeholder="توضیحاتی برای این تسک بنویسید"
            />
            <File
              onChangeFile={(name, value) => {
                handleFile(name, value);
              }}
              id="atachment"
              name="atachment"
              hasLabel={true}
              label="افزودن پیوست"
            />
            <File
              onChangeFile={(name, value) => {
                handleFile(name, value);
              }}
              id="thumbnail"
              name="thumbnail"
              hasLabel={true}
              label="افزودن کاور"
            />
            <div className="flex flex-row-reverse justify-between items-center">
              <div className="flex flex-row gap-M">
                <div className="cursor-pointer border-dashed border-2 rounded-full border-[#c1c1c1] w-[50px] h-[50px] flex justify-center items-center">
                  <Dropdown
                    type="icon"
                    icon={{ icon: "tag", color: "#c1c1c1" }}
                  >
                    {tags?.map((item) => {
                      return (
                        <DropdownItem
                          key={item.id}
                          title={item.name}
                          bgcolor={item.color}
                          id={item.id}
                        />
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
                      id={1}
                      title="فوری"
                      hasIcon={true}
                      icon={{ icon: "flag", color: "#FB0606" }}
                    />
                    <DropdownItem
                      id={2}
                      title="بالا"
                      hasIcon={true}
                      icon={{ icon: "flag", color: "#FFE605" }}
                    />
                    <DropdownItem
                      id={3}
                      title="متوسط"
                      hasIcon={true}
                      icon={{ icon: "flag", color: "#09DBCE" }}
                    />
                    <DropdownItem
                      id={4}
                      title="پایین"
                      hasIcon={true}
                      icon={{ icon: "flag", color: "#B2ACAC" }}
                    />
                  </Dropdown>
                </div>
              </div>
              <Button
                text="ساختن تسک"
                onClick={handleSubmit}
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
        <ShareModal
          modal={shareModal}
          setModal={handleShareModal}
          title="اشتراک گذاری تسک"
        />
      )}
    </>
  );
};

export default TaskModal;
