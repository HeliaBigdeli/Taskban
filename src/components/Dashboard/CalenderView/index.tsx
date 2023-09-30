import { useEffect, useState } from "react";
import { dayOfWeek } from "../../../constants/dayOfWeek";
import moment from "moment-jalaali";

const CalenderView = () => {
  const [dates, setDates] = useState<number[]>(Array(42).fill(0));

  useEffect(() => {
    let m = moment(new Date().toLocaleDateString(), 'M/D/YYYY').format('jYYYY/jMM/jDD')
    let mm = moment(m, 'jYYYY/jM/jD')
    console.log(mm.startOf('jMonth'))

    const date = new Date();
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
    
    console.log(dates)
    setDates(dates);
  });

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
