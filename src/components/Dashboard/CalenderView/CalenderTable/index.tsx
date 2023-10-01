import { dayOfWeek } from "../../../../constants/dayOfWeek";
import Icon from "../../../Common/Icon";

interface IDates {
    key: string, 
    date: string, 
    showBtn: boolean
}

interface IProps {
  today: number;
  dates: IDates[];
  currentMonth: number;
  onMouseEnter: (x: string, y: string) => void,
  onMouseLeave: (x: string, y: string) => void,
};

const CalenderTable: React.FC<IProps> = ({today, dates, currentMonth, onMouseEnter, onMouseLeave}): JSX.Element => {

  return (
    <div
      className="grid grid-cols-7 place-content-stretch h-screen mr-S mb-S"
      dir="rtl"
    >
      {dates?.map((date, index) => {
        return (
          <div
            onMouseEnter={() => onMouseEnter(date.key, "show")}
            onMouseLeave={() => onMouseLeave(date.key, "hide")}
            key={date.key}
            className={`flex items-center justify-center border min-h-max ${
              today === Number(date.date) && currentMonth === 0
                ? "border-brand-primary"
                : "border-lightgray_300"
            } relative`}
          >
            {index <= 6 ? (
              <span className="absolute top-1 right-2">{dayOfWeek[index]}</span>
            ) : null}
            {date.showBtn && (
              <Icon
                icon="plus_square"
                color="#ffffff"
                className="absolute bottom-1 right-2 bg-brand-primary rounded-sm cursor-pointer"
              />
            )}
            <span className="absolute bottom-1 left-2">{date.date}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CalenderTable;
