import { useEffect } from "react";
import { dayOfWeek } from "../../../../constants/dayOfWeek";
import moment from "moment-jalaali";

interface IDates {
  key: string;
  day: string;
  showBtn: boolean;
  value: string;
  disable: boolean;
  uKey: number;
}

interface IProps {
  monthName: string;
  type: string;
  today: number;
  dates: IDates[];
  currentMonth: number;
  onclick: ({}) => void;
  selectedArray: number[];
}

const Table: React.FC<IProps> = ({
  type,
  today,
  dates,
  currentMonth,
  onclick,
  selectedArray,
}): JSX.Element => {
  const handleClick = (date, index) => {
    onclick({
      index,
      date,
      jDate: moment(date, "YYYY-M-D").format("jYYYY-jM-jD"),
    });
  };

  useEffect(() => {}, [selectedArray]);

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
            onClick={() => handleClick(date.value, index)}
            key={date.key}
            className={`flex items-center justify-center cursor-pointer ${
              today === Number(date.day) && currentMonth === 0
                ? "border-brand-primary border "
                : "border-lightgray_300"
            } relative hover:bg-brand-primary transition-lg duration-200 rounded-lg hover:text-white my-1
             ${date.disable === true ? "text-lightgray" : "text-black"}
             ${
               selectedArray[0] === date.uKey ||
               selectedArray[selectedArray.length - 1] === date.uKey
                 ? `bg-brand-primary text-white ${
                     selectedArray[0] === date.uKey
                       ? type === "jalali"
                         ? "rounded-l-none"
                         : "rounded-r-none"
                       : type === "jalali"
                       ? "rounded-r-none"
                       : "rounded-l-none"
                   }`
                 : selectedArray.find((x) => x === date.uKey)
                 ? "bg-brand-secondary rounded-none"
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
