import { useEffect, useState, useContext } from "react";
import moment from "moment-jalaali";
import uuid from "react-uuid";
import CalenderTable from "./Table";
import { AppContext } from "../../../context/store";

type DateList = {
  key: string;
  day: string;
  showBtn: boolean;
  value: string;
};

const CalenderView: React.FC = (): JSX.Element => {
  const [dates, setDates] = useState<DateList[]>([]);
  const { dateValues, setDateValues } = useContext(AppContext);

  const handleShowBtn = (key, staus) => {
    const dateIndex = dates.findIndex((x) => x.key === key);
    dates[dateIndex].showBtn = staus === "show" ? true : false;
    setDates([...dates]);
  };

  const dateParams = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + dateValues.currentMonth);

    // get full persian date, it return array [0] = year, [1] = month , [2] = day
    const jajaliDate = date
      .toLocaleDateString("fa-IR-u-nu-latn")
      .split("/")
      .map(Number);

    // set month and year and day
    let year = jajaliDate[0];
    let month = jajaliDate[1];

    setDateValues({
      ...dateValues,
      year: jajaliDate[0],
      month: jajaliDate[1],
      today: jajaliDate[2],
      monthName: date.toLocaleDateString("fa-IR", { month: "short" }),
    });

    return { year, month };
  };

  const creaetDateTable = () => {
    const { year, month } = dateParams();

    // get first day of week to start array from there
    let firstDayOfMonth = moment(`${year}/${month}/1`, "jYYYY/jM/jD").format(
      "YYYY-M-D"
    );
    let firstDayOfWeekIndex = new Date(firstDayOfMonth).getDay();
    firstDayOfWeekIndex = firstDayOfWeekIndex === 6 ? 0 : firstDayOfWeekIndex + 1;

    // get month length to use in loop create array of dates
    const monthLength = moment.jDaysInMonth(year, month - 1);
    // get previous month length
    const prevMothLenth = moment.jDaysInMonth(year, month - 2);
    let prevMothDates = prevMothLenth - (firstDayOfWeekIndex - 1);
    let prevMonth = month - 1 === 0 ? 12 : month - 1;

    // create table of date
    let index = firstDayOfWeekIndex;
    for (let i = 0; i < monthLength; i++) {
      if (i < firstDayOfWeekIndex) {
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
  }, [dateValues.currentMonth]);

  return (
    <CalenderTable
      month={dateValues.monthName}
      onclick={(date) => {
        console.log(date);
      }}
      today={dateValues.today}
      dates={dates}
      currentMonth={dateValues.currentMonth}
      onMouseEnter={(key, status) => handleShowBtn(key, status)}
      onMouseLeave={(key, status) => handleShowBtn(key, status)}
    />
  );
};

export default CalenderView;
