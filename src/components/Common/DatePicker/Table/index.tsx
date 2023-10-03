import { useEffect } from "react";
import { dayOfWeek } from "../../../../constants/dayOfWeek";
import moment from "moment-jalaali";

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
  selectedIndex: any;
  onclick: ({}) => void;
}

const Table: React.FC<IProps> = ({
  selectedIndex,
  type,
  today,
  dates,
  currentMonth,
  onclick,
}): JSX.Element => {
  const handleClick = (date, index) => {
    date = date.value;
    onclick({
      index,
      jDate:
        type === "jalali"
          ? date
          : moment(date, "YYYY/M/D").format("jYYYY/jM/jD"),
      date:
        type === "jalali"
          ? moment(date, "jYYYY/jM/jD").format("YYYY/M/D")
          : date,
    });
  };

  return (
    <div
      className="grid grid-cols-7 h-full"
      dir={`${type === "jalali" ? "rtl" : "ltr"}`}
    >
      {dayOfWeek[type].map((day) => {
        return (
          <div
            key={day}
            className="flex items-center justify-center text-lightgray text-sm"
          >
            {day}
          </div>
        );
      })}
      {dates?.map((date, index) => {
        return (
          <div
            onClick={() => handleClick(date, index)}
            key={date.key}
            className={`flex items-center justify-center cursor-pointer ${
              today === Number(date.day) && currentMonth === 0
                ? "border-brand-primary border "
                : "border-lightgray_300"
            } relative hover:bg-brand-primary transition-lg duration-200 rounded-lg hover:text-white m-1
             ${date.disable === true ? "text-lightgray" : "text-black"}
             ${
               index >= selectedIndex.start &&
               selectedIndex.start !== null &&
               index <= selectedIndex.end &&
               selectedIndex.start !== null
                 ? "bg-brand-primary text-white"
                 : ""
             }
             `}
          >
            {date.day}
          </div>
        );
      })}
    </div>
  );
};

export default Table;
