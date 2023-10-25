import { dayOfWeek } from "../../../../constants/dayOfWeek";
import Icon from "../../../Common/Icon";
import moment from "moment-jalaali";
import Modal from "../../../Common/Modal";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Input from "../../../Common/Form/Input";
import Button from "../../../Common/Form/Button";
import { ITask } from "../../../../interfaces/task";
import { selectBoard } from "../../../../features/board/boardSlice";
import { useSelector } from "react-redux";
import Select from "../../../Common/Form/Select";
import useAxios from "../../../../hooks/useAxios";
import { tasks } from "../../../../constants/url";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addTask } from "../../../../features/update/updateSlice";
import { useDispatch } from "react-redux";
import { selectTask } from "../../../../features/task/taskSlice";

const portals = document.getElementById("portals") as Element;

interface IDates {
  key: string;
  day: string;
  showBtn: boolean;
  value: string;
  disable: boolean;
  task?: ITask[];
}

interface IProps {
  monthName: string;
  type: string;
  today: number;
  dates: IDates[];
  currentMonth: number;
  onMouseEnter: (x: string, y: string) => void;
  onMouseLeave: (x: string, y: string) => void;
  onclick: ({ }) => void;
}

const Table: React.FC<IProps> = ({
  monthName,
  type,
  today,
  dates,
  currentMonth,
  onMouseEnter,
  onMouseLeave,
  onclick,
}): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);
  const [currentDay, setCurrentDay] = useState<number>(today);
  const boards = useSelector(selectBoard).boards;
  const [response, error, loading, fetcher] = useAxios();
  const [bId, setBid] = useState();
  const params = useParams();
  const dispatch = useDispatch();
  const allTasks = useSelector(selectTask).tasks
  const [values, setVlaues] = useState({
    priority: 1,
    name: "",
    order: 1,
    deadline: "",
    board_id: "",
  });

  const handleShowModal = (date) => {
    setCurrentDay(date.day);
    setModal(!modal);
  };

  const handleClick = (date, day) => {
    onclick({
      day,
      date,
      convertedDate:
        type === "jalali"
          ? moment(date, "jYYYY/jM/jD").format("YYYY-M-D HH:mm:ss")
          : moment(date, "YYYY/M/D").format("jYYYY/jM/jD HH:mm:ss"),
    });
  };

  const handleSubmit = () => {
    fetcher(
      "post",
      tasks.post({
        wid: params.wid,
        pid: params.pid,
        bid: bId,
      }),
      values
    );
  };

  const handleSelect = (e) => {
    const value = e.currentTarget.dataset.value;
    setBid(value);
    setVlaues({
      ...values,
      board_id: value,
    });
  };

  useEffect(() => {
    if (response) {
      setModal(false);
      dispatch(addTask(response));
      toast.success("تسک با موفقیت ثبت شد.");
    }
  }, [response]);

  return (
    <div
      className="grid grid-cols-7 place-content-stretch h-screen mr-S mb-S"
      dir={`${type === "jalali" ? "rtl" : "ltr"}`}
    >
      {dates?.map((date, index) => {
        return (
          <div
            onClick={() => handleClick(date.value, date.day)}
            onMouseEnter={() => onMouseEnter(date.key, "show")}
            onMouseLeave={() => onMouseLeave(date.key, "hide")}
            key={date.key}
            className={`dark:bg-[#3b3b3b] flex items-center justify-center border min-h-max ${today === Number(date.day) && currentMonth === 0
                ? "border-brand-primary"
                : "border-lightgray_300"
              } relative`}
          >
            {index <= 6 ? (
              <span className="dark:text-white absolute top-1 right-2">
                {dayOfWeek[type][index]}
              </span>
            ) : null}
            <div className="flex flex-wrap">
              {allTasks.map((task) => {
                if (new Date(task.deadline).getTime() === new Date(date.value).getTime()) {
                  return (
                    <span className="w-4 h-4 bg-darkred rounded-md m-[1px]">
                    </span>
                  )
                }
              })}
            </div>
            {date.showBtn && (
              <span onClick={() => handleShowModal(date)}>
                <Icon
                  icon="plus_square"
                  color="#ffffff"
                  className="absolute bottom-1 right-2 bg-brand-primary rounded-sm cursor-pointer"
                />
              </span>
            )}
            <span
              className={`absolute bottom-1 left-2 ${date.disable === true
                  ? "text-black"
                  : "text-lightgray font-bold"
                }`}
            >
              {date.day}
            </span>
          </div>
        );
      })}
      {createPortal(
        <Modal
          modal={modal}
          setModal={handleShowModal}
          hasCloseIcon={false}
          closeIcon={{ order: 1 }}
          hasHeader={false}
          backIcon={{ order: 2 }}
          hasBackIcon={false}
          header={{ order: 3 }}
        >
          <div className="flex flex-col gap-S">
            <div className="flex flex-row-reverse items-center gap-[8px]">
              <Select
                name="board_id"
                onChange={(e) => {
                  handleSelect(e);
                }}
                items={boards}
                className="w-full"
                searchPlaceholder="جستجو"
              />
            </div>
            <Input
              name="email"
              id="email"
              type="email"
              className="h-XL w-[420px]"
              placeholder="نام تسک را وارد کنید"
              hasLabel={false}
              onChange={(name, value) => setVlaues({ ...values, name: value })}
            />
            <div className="flex flex-row-reverse justify-between items-center">
              <div className="flex justify-center items-center gap-3">
                <span className="text-brand-primary text-xl gap-1 flex">
                  <span>{monthName}</span>
                  <span> {currentDay?.toLocaleString("fa-IR")}</span>
                </span>
                <Icon icon="flag" color="#c1c1c1" />
              </div>
              <Button
                text="ساختن تسک"
                type="button"
                onClick={handleSubmit}
                hasIcon={false}
                className="text-white text-sm leading-normal h-8 self-stretch rounded-md bg-brand-primary px-L py-S"
              />
            </div>
          </div>
        </Modal>,
        portals
      )}
    </div>
  );
};

export default Table;
