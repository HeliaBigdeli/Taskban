import { useEffect, useState } from "react";
import { dayOfWeek } from "../../../constants/dayOfWeek";
import moment from "moment-jalaali";

const CalenderView = () => {
  const [dates, setDates] = useState<number[]>([]);
  const [currentMonth, setCurrentMonth] = useState<number>(0)
  const [monthName, setMonthName] = useState<string>("")

  const handleChangeMonth = () => {
    
  }

  useEffect(() => {
    const date = new Date();
    date.setMonth(date.getMonth() + currentMonth);

    // get full persian date
    const jajaliDate = new Intl.DateTimeFormat('fa-IR-u-nu-latn').format(date).split('/');
    // set month Name
    const monthName = new Intl.DateTimeFormat('fa-IR-u-nu-latn', {month: 'short'}).format(date);
    setMonthName(monthName)

    console.log(moment.jDaysInMonth(jajaliDate[0], jajaliDate[1]))

    const firstDayIndex = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDay();

    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    let index = firstDayIndex;
    for (let i = 1; i <= lastDay; i++) {
      dates[index] = i;
      index += 1;
    }

    setDates([...dates]);
  }, [currentMonth]);

  return (
    <div
      className="grid grid-cols-7 place-content-stretch h-screen mr-S mb-S"
      dir="rtl"
    >
      {dates?.map((date, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-center border border-lightgray_300 relative"
          >
            {index <= 6 ? (
              <span className="absolute top-1 right-2">{dayOfWeek[index]}</span>
            ) : null}
            <span className="absolute bottom-1 left-2">{date}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CalenderView;
