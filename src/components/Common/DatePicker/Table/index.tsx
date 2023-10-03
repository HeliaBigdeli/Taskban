import { dayOfWeek } from "../../../../constants/dayOfWeek";
import Icon from "../../../Common/Icon";
import moment from "moment-jalaali";
import Modal from "../../../Common/Modal";
import { useState } from "react";
import { createPortal } from "react-dom";
import Input from "../../../Common/Form/Input";
import Button from "../../../Common/Form/Button";

const portals = document.getElementById("portals") as Element;

interface IDates {
  key: string;
  day: string;
  showBtn: boolean;
  value: string;
  disable: boolean;
}

interface IProps {
  monthName: string;
  type: string;
  today: number;
  dates: IDates[];
  currentMonth: number;
  onMouseEnter: (x: string, y: string) => void;
  onMouseLeave: (x: string, y: string) => void;
  onclick: ({}) => void;
}

const Table: React.FC<IProps> = ({
  monthName,
  type,
  today,
  dates,
  currentMonth,
  onclick,
}): JSX.Element => {
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

  return (
    <div
      className="grid grid-cols-7 h-full"
      dir={`${type === "jalali" ? "rtl" : "ltr"}`}
    >
      {dayOfWeek[type].map((day) => {
        return (
          <div className="flex items-center justify-center text-lightgray text-sm">
            {day}
          </div>
        );
      })}
      {dates?.map((date) => {
        return (
          <div
            onClick={() => handleClick(date.value, date.day)}
            key={date.key}
            className={`flex items-center justify-center cursor-pointer ${
              today === Number(date.day) && currentMonth === 0
                ? "border-brand-primary border "
                : "border-lightgray_300"
            } relative hover:bg-brand-primary transition-lg duration-200 rounded-lg hover:text-white p-1 ${
              date.disable === true ? "text-lightgray" : "text-black"
            }`}
          >
            {date.day}
          </div>
        );
      })}
    </div>
  );
};

export default Table;
