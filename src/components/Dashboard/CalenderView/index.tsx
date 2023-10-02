import { useEffect, useState } from "react";
import moment from "moment-jalaali";
import Icon from "../../Common/Icon";
import uuid from "react-uuid";
import CalenderTable from "./CalenderTable";

type DateList = {
  key: string;
  day: string;
  showBtn: boolean;
  value: string;
};

const CalenderView: React.FC = (): JSX.Element => {
  const [dates, setDates] = useState<DateList[]>([]);
  const [currentMonth, setCurrentMonth] = useState<number>(0);
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<number>(0);
  const [today, setToday] = useState<number>(0);

  const handleChangeMonth = (e) => {
    setDates([]);
    if (e.currentTarget.name === "next") {
      setCurrentMonth(currentMonth + 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleToday = () => {
    setCurrentMonth(0);
  };

  const handleShowBtn = (key, staus) => {
    const dateIndex = dates.findIndex((x) => x.key === key);
    dates[dateIndex].showBtn = staus === "show" ? true : false;
    setDates([...dates]);
  };

  const dateValues = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + currentMonth);

    // get full persian date, it return array [0] = year, [1] = month , [2] = day
    const jajaliDate = date
      .toLocaleDateString("fa-IR-u-nu-latn")
      .split("/")
      .map(Number);

    // set month and year and day
    setMonth(date.toLocaleDateString("fa-IR", { month: "short" }));
    let year = jajaliDate[0];
    let month = jajaliDate[1];

    setYear(jajaliDate[0]);
    setToday(jajaliDate[2]);

    return { year, month };
  };

  const creaetDateTable = () => {
    const { year, month } = dateValues();

    let dd =  moment(`${year}/${month}/1`, "jYYYY/jM/jD").format("YYYY-M-D");
    let firstDayIndex = new Date(dd).getDay()  
    firstDayIndex = firstDayIndex === 6 ? 0 : firstDayIndex + 1

    // get month length to use in loop create array of dates
    const monthLength = moment.jDaysInMonth(year, month - 1);
    // get previous month length
    const prevMothLenth = moment.jDaysInMonth(year, month - 2);
    let prevMothDates = prevMothLenth - (firstDayIndex - 1);
    let prevMonth = month - 1 === 0 ? 12 : month - 1;

    // create table of date
    let index = firstDayIndex;
    for (let i = 0; i < monthLength; i++) {
      if (i < firstDayIndex) {
        dates[i] = {
          key: uuid(),
          day: String(prevMothDates),
          value: `${year}/${prevMonth}/${prevMothDates}`,
          showBtn: false,
        };
        prevMothDates += 1;
      }
      dates[index] = {
        key: uuid(),
        day: String(i + 1),
        value: `${year}/${month}/${i + 1}`,
        showBtn: false,
      };
      index += 1;
    }

    setDates([...dates]);
  };

  useEffect(() => {
    creaetDateTable();
  }, [currentMonth]);

  return (
    <>
      <div className="flex justify-center">
        <div className="flex gap-2">
          <span>{year}</span>
          <span>{month}</span>
          <button name="next" onClick={handleChangeMonth}>
            <Icon icon="chevron_left" />
          </button>
          <button name="prev" onClick={handleChangeMonth}>
            <Icon icon="chevron_right" />
          </button>
          <span onClick={handleToday} className="cursor-pointer">
            امروز
          </span>
        </div>
      </div>
      <CalenderTable
        month={month}
        onclick={(date) => {
          console.log(date);
        }}
        today={today}
        dates={dates}
        currentMonth={currentMonth}
        onMouseEnter={(key, status) => handleShowBtn(key, status)}
        onMouseLeave={(key, status) => handleShowBtn(key, status)}
      />
    </>
  );
};

export default CalenderView;
