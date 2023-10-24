import { createPortal } from "react-dom";
import Modal from "../../Common/Modal";
import Button from "../../Common/Form/Button";
import Icon from "../../Common/Icon";
import { useEffect, useState } from "react";
import DatePickerModal from "../DatePickerModal";
import File from "../../Common/Form/File";
import Textarea from "../../Common/Form/Textarea";
import MembersThumb from "../../Common/MembersThumb";
import { ITask } from "../../../interfaces/task";
import API_URL from "../../../constants/api.url";
import { Link, useParams } from "react-router-dom";
import { AXIOS } from "../../../config/axios.config";
import { useDispatch, useSelector } from "react-redux";
import { addBoard, addTask } from "../../../features/update/updateSlice";
import Input from "../../Common/Form/Input";
import { selectUser } from "../../../features/auth/authSlice";
import { IComment } from "../../../interfaces/comments";
import Comments from "./Comments";
import { dateConvert } from "../../../utils/dateConvert";
import { flagColor } from "../../../utils/flagColor";
import Dropdown from "../../Common/Dropdown";
import DropdownItem from "../../Common/Dropdown/DropdownItem";

const portals = document.getElementById("portals") as Element;

interface IProps {
  taskInfo: ITask;
  boardTitle: string;
  boardId: number;
  modal: boolean;
  setModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const TaskInfoModal: React.FC<IProps> = ({
  modal,
  setModal,
  taskInfo,
  boardTitle,
  boardId,
}): JSX.Element => {
  const [datePickerModal, setDatePickerModal] = useState<boolean>(false);
  const [values, setValues] = useState<ITask>(taskInfo);
  const [commentText, setCommentText] = useState<string>("");
  const [commentList, setCommentList] = useState<IComment[]>([]);
  const [isShow, setisShow] = useState<boolean>(false);
  useEffect(() => {
    fetch();
  }, []);
  const params = useParams();

  const url = `${API_URL.WorkSpaces}${params.wid}/${API_URL.Projects}${params.pid}/${API_URL.Boards}${boardId}/${API_URL.Tasks}${taskInfo.id}/`;

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const fetch = async () => {
    try {
      const res = await AXIOS.get(`${url}comments/`);
      setCommentList(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDatePickerModal = () => {
    setDatePickerModal(!datePickerModal);
  };
  const handleShowModal = async () => {
    const { members, id, deadline, ...data } = values;

    try {
      await AXIOS.patch(
        url,
        {
          ...data,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setModal(!modal);
      dispatch(addTask());
    } catch (error) {
      console.log(error);
      setModal(!modal);
    }
  };
  const handleChange = (value: string) => {
    setValues({ ...values, description: value });
  };
  const handleFile = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };
  console.log(user);
  const handleRemoveAttachment = () => {
    setValues({
      ...values,
      attachment: "",
    });
  };
  const handleSubmit = async () => {
    if (!commentText) return;
    try {
      await AXIOS.post(`${url}comments/`, {
        attachment: null,
        author: user.user_id,
        text: commentText,
      });
      fetch();
    } catch (error) {
      console.log(error);
    }
    setisShow(false);
  };

  const handleDropDown = (id, title) => {
    setValues({
      ...values,
      priority: id,
    });
  };
  const { weekday, year, day, month } = dateConvert(values.deadline);

  return (
    <>
      {createPortal(
        <Modal
          contentTopGap="gap-0"
          modal={modal}
          setModal={handleShowModal}
          hasHeader={false}
          header={{ text: "", order: 3 }}
          hasBackIcon={false}
          backIcon={{ order: 2 }}
          hasCloseIcon={true}
          closeIcon={{ order: 1 }}
        >
          <div className="flex flex-col gap-M divide-y divide-lightgray_300 w-[1100px]">
            <div className="flex flex-row justify-between divide-x divide-lightgray_300">
              <div className="flex w-[50%] justify-end px-S grow gap-L">
                <div className="flex flex-col">
                  <span className="text-sm text-right">ددلاین</span>
                  <span dir="rtl" className="font-bold">
                    {weekday}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-right">ساخته شده در</span>
                  <span dir="rtl" className="font-bold">
                    {day}
                    &nbsp;
                    {month}
                    &nbsp;
                    {year}
                  </span>
                </div>
              </div>
              <div className="flex w-[50%] px-S">
                <Button
                  type="button"
                  text="اشتراک گذاری"
                  onClick={() => {}}
                  className="mr-auto font-bold items-center"
                  hasIcon={true}
                  icon={{ icon: "share" }}
                />
                <div className="flex items-center justify-between">
                  <div
                    className="mr-2XL cursor-pointer border-dashed  border-2   rounded-full  w-[40px] h-[40px] flex justify-center items-center"
                    style={{ borderColor: flagColor(values.priority) }}
                  >
                    <Dropdown
                      type="icon"
                      icon={{
                        icon: "flag",
                        color: flagColor(values.priority),
                      }}
                    >
                      <DropdownItem
                        id={4}
                        title="فوری"
                        onClick={(id, title) => handleDropDown(id, title)}
                        hasIcon={true}
                        icon={{ icon: "flag", color: flagColor(4) }}
                      />
                      <DropdownItem
                        id={3}
                        title="بالا"
                        onClick={(id, title) => handleDropDown(id, title)}
                        hasIcon={true}
                        icon={{ icon: "flag", color: flagColor(3) }}
                      />
                      <DropdownItem
                        id={2}
                        title="متوسط"
                        onClick={(id, title) => handleDropDown(id, title)}
                        hasIcon={true}
                        icon={{ icon: "flag", color: flagColor(2) }}
                      />
                      <DropdownItem
                        id={1}
                        title="پایین"
                        onClick={(id, title) => handleDropDown(id, title)}
                        hasIcon={true}
                        icon={{ icon: "flag", color: flagColor(1) }}
                      />
                    </Dropdown>
                  </div>

                  <MembersThumb members={values.members} hasAddIcon={true} />
                  <Button
                    type="button"
                    name="status"
                    onClick={() => {}}
                    text={boardTitle}
                    className={` p-1 bg-darkred rounded-md text-white w-[120px] h-[30px]`}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row justify-between divide-x divide-lightgray_300">
                <div className="flex flex-col  h-[80vh] lg:h-[60vh] xl:h-[40vh]  w-[50%] relative">
                  {!isShow && (
                    <div className="h-3/4 overflow-auto flex flex-col items-end ">
                      {commentList?.map((item) => {
                        return (
                          <Comments
                            {...item}
                            key={item.id}
                            first_name={user.first_name}
                            last_name={user.last_name}
                          />
                        );
                      })}
                    </div>
                  )}
                  <div className="relative  w-full shadow-comment rounded mt-auto flex  justify-end ">
                    <div className="  absolute left-4 top-2 z-10">
                      {" "}
                      <Icon icon="comment" color="#AEAEAE" />
                    </div>
                    <div
                      className="w-full"
                      onFocus={() => {
                        setisShow(true);
                      }}
                      onBlur={() => {
                        setisShow(false);
                      }}
                    >
                      {" "}
                      <Textarea
                        name="comment"
                        id="comment"
                        placeholder="کامنت"
                        inputValue={commentText}
                        onChange={(name, value) => {
                          setCommentText(value);
                        }}
                        className={`w-full block  pt-2 pl-9 ${
                          isShow ? " pb-20 h-32" : "pb-2 h-10"
                        } lg:${isShow && "  h-44"} xl:${
                          isShow && "  h-52"
                        } rounded-lg transition-all outline-none border-none   `}
                        // style={{ height: isShow ? "200px" : "40px" }}
                      />
                      {
                        <Button
                          text="ثبت کامنت"
                          onClick={handleSubmit}
                          type="button"
                          className={`${
                            isShow ? "z-20" : "-z-20"
                          } bg-brand-primary text-white text-xs rounded-md absolute bottom-5 py-1.5 px-3  left-5 font-extrabold`}
                        />
                      }
                    </div>
                  </div>
                </div>
                <div className="flex w-[50%] px-S">
                  <div className="felx flex-col pt-M w-full">
                    <div className="flex justify-end text-brand-primary">
                      <div className="cursor-pointer border-dashed border-2 rounded-full border-[#c1c1c1] w-[40px] h-[40px] flex justify-center items-center">
                        <Icon icon="tag" color="#c1c1c1" />
                      </div>
                    </div>
                    <h4 className="text-right mt-2 text-black text-2xl font-extrabold">
                      {values.name}
                    </h4>
                    <Textarea
                      className="my-S"
                      rows={6}
                      inputValue={values.description}
                      name="description"
                      id="description"
                      onChange={(name, value) => {
                        handleChange(value);
                      }}
                    />
                    {!values.attachment ? (
                      <File
                        inputValue={values.attachment || ""}
                        onChangeFile={(name, value) => {
                          handleFile(name, value);
                        }}
                        id="attachment"
                        name="attachment"
                        hasIcon={true}
                        icon="attach"
                        text="افزودن پیوست"
                        styles="flex flex-row items-center text-base font-medium border border-brand-primary h-[36px] rounded-lg py-[4px] px-[8px] gap-[4px] cursor-pointer text-center"
                      />
                    ) : (
                      <div className="flex justify-end items-center gap-2">
                        <Link
                          to={values.attachment}
                          className="flex flex-row items-center text-base font-medium border border-brand-primary h-[36px] rounded-lg py-[4px] px-[8px] gap-[4px] cursor-pointer text-center"
                        >
                          پیوست فایل
                          <Icon icon="attach" color="#208d8e" />
                        </Link>
                        <button
                          onClick={handleRemoveAttachment}
                          className="mt-1"
                        >
                          <Icon icon="trash" color="#FA5252" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>,
        portals
      )}
      {DatePickerModal && (
        <DatePickerModal
          onChangeDate={() => {}}
          modal={datePickerModal}
          setModal={handleDatePickerModal}
        />
      )}
    </>
  );
};

export default TaskInfoModal;
