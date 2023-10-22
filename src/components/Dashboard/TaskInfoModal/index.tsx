import { createPortal } from "react-dom";
import Modal from "../../Common/Modal";
import Button from "../../Common/Form/Button";
import Icon from "../../Common/Icon";
import { useEffect, useState } from "react";
import DatePickerModal from "../DatePickerModal";
import Textarea from "../../Common/Form/Textarea";
import MembersThumb from "../../Common/MembersThumb";
import { ITask } from "../../../interfaces/task";
import API_URL from "../../../constants/api.url";
import { useParams } from "react-router-dom";
import { AXIOS } from "../../../config/axios.config";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../../features/updateSlice";
import Input from "../../Common/Form/Input";
import { selectUser } from "../../../features/authSlice";
import { IComment } from "../../../interfaces/comments";
import Comments from "./Comments";

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
    const res = await AXIOS.get(`${url}comments/`);
    setCommentList(res.data);
    
  };
  console.log(commentList);
  const handleDatePickerModal = () => {
    setDatePickerModal(!datePickerModal);
  };

  const handleShowModal = async () => {
    setModal(!modal);
    const { members, id, deadline, ...data } = values;

    await AXIOS.patch(url, {
      ...data,
    });
    dispatch(addTask());
  };
  const handleChange = (value: string) => {
    setValues({ ...values, description: value });
  };
  const handleSubmit = async () => {
    if (!commentText) return;

    await AXIOS.post(`${url}comments/`, {
      attachment: null,
      author: user.user_id,
      text: commentText,
    });
    fetch();
  };
  const flagColor = {
    1: "#82C91E",
    2: "#15AABF",
    3: "#FAB005",
    4: "#FA5252",
  };
  const d = new Date(taskInfo.deadline);
  const currentDate = new Date().getTime();
  const month = new Intl.DateTimeFormat("fa-IR", { month: "short" }).format(d);
  const day = new Intl.DateTimeFormat("fa-IR", { day: "numeric" }).format(d);
  const diffDays = Math.floor(
    (d.getTime() - currentDate) / (1000 * 60 * 60 * 24)
  );
  const weekday =
    diffDays === 0 ? (
      "امروز"
    ) : diffDays === 1 ? (
      "فردا"
    ) : diffDays === 2 ? (
      "پس فردا"
    ) : (
      <>
        {day}
        &nbsp;
        {month}
      </>
    );

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
              <div className="flex w-[50%] justify-end px-S grow gap-M">
                <div className="flex flex-col">
                  <span className="text-sm text-right">ددلاین</span>
                  <span dir="rtl" className="font-bold">
                    {weekday}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-right">ساخته شده در</span>
                  <span dir="rtl" className="font-bold">
                    1 اردیبهشت 1402
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
                <div className="flex items-center gap-S">
                  <div
                    className="mr-S cursor-pointer border-dashed border-2 rounded-full  w-[40px] h-[40px] flex justify-center items-center"
                    style={{ borderColor: flagColor[taskInfo.priority] }}
                  >
                    <Icon icon="flag" color={flagColor[taskInfo.priority]} />
                  </div>
                  <MembersThumb members={values.members} hasAddIcon={false} />
                  <Button
                    type="button"
                    name="status"
                    onClick={() => {}}
                    text={boardTitle}
                    className="bg-darkred p-1 rounded-md text-white w-[120px] h-[30px]"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row justify-between divide-x divide-lightgray_300">
                <div className="flex flex-col  w-[50%] relative">
                  {!isShow ? (
                    <div className="h-1/4 overflow-hidden">
                      {commentList?.map((item) => {
                        return <Comments {...item} key={item.id} />;
                      })}
                    </div>
                  ):<><div className="h-1/4"></div></>}
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
                          isShow ? " pb-20" : "pb-2"
                        }  rounded-lg transition-all outline-none border-none   `}
                        style={{ height: isShow ? "200px" : "40px" }}
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
                      {taskInfo.name}
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
                    <div className="flex justify-end text-brand-primary">
                      اضافه کردن پیوست
                      <Icon icon="plus_square" color="#208d8e" />
                    </div>
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
          modal={datePickerModal}
          setModal={handleDatePickerModal}
        />
      )}
    </>
  );
};

export default TaskInfoModal;
