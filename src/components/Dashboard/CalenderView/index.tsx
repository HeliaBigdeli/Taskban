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
  disable: boolean
};

const CalenderView: React.FC = (): JSX.Element => {
  const [dates, setDates] = useState<DateList[]>([]);
  const { dateValues, setDateValues } = useContext(AppContext);

  const handleAddButton = (key, status) => {
    const dateIndex = dates.findIndex((x) => x.key === key);

    if(!dates[dateIndex].disable) {
      dates[dateIndex].showBtn = status === "show" ? true : false;
      setDates([...dates]);
    }
  };

  const createDatesArray = (type = "gregorian") => {
    const date = new Date();
    date.setMonth(date.getMonth() + dateValues.currentMonth);

    // get full persian date, it return array [0] = year, [1] = month , [2] = day
    const splitedtDate = date
      .toLocaleDateString(
        type === "jalali" ? "fa-IR-u-nu-latn" : "en-US-u-nu-latn"
      )
      .split("/")
      .map(Number);

    // set year, month and currentDay
    const year = type === "jalali" ? splitedtDate[0] : splitedtDate[2];
    const month = type === "jalali" ? splitedtDate[1] : splitedtDate[0];
    const today = type === "jalali" ? splitedtDate[2] : splitedtDate[1];
    const monthName = date.toLocaleDateString(
      type === "jalali" ? "fa-IR" : "en-US",
      { month: "short" }
    );

    setDateValues({
      ...dateValues,
      year,
      month,
      today,
      monthName,
      type,
    });
    

    createArray(year, month, type);
  };

  const createArray = (year: number, month: number, type: string) => {

    let firstDayOfWeekIndex: any = 0;
    // get first day of week to start array from there
    if (type === "jalali") {
      let firstDayOfMonth = moment(`${year}/${month}/1`, "jYYYY/jM/jD").format(
        "YYYY-M-D"
      );
      firstDayOfWeekIndex = new Date(firstDayOfMonth).getDay();
      // change day index during to persian week days (week start day is friday in gregorian calender, plus it one to start from saturday)
      firstDayOfWeekIndex =
        firstDayOfWeekIndex === 6 ? 0 : firstDayOfWeekIndex + 1;
    } else {
      firstDayOfWeekIndex = new Date(`${year}-${month}-1`).getDay() + 1;
    }

    let monthLength: number,
      prevMothLenth: number,
      prevMothDays: number,
      prevMonth: number = 0;
    if (type === "jalali") {
      // get month length to indicate max number for loop to create array of dates
      monthLength = moment.jDaysInMonth(year, month - 1);
      // get previous month length
      prevMothLenth = moment.jDaysInMonth(year, month - 2);
      // get prevoius month days
      prevMothDays = prevMothLenth - (firstDayOfWeekIndex - 1);
      prevMonth = month - 1 === 0 ? 12 : month - 1;
    } else {
      monthLength = new Date(year, month, 0).getDate();
      prevMothLenth = moment.jDaysInMonth(year, month - 1);
      prevMothDays = prevMothLenth - (firstDayOfWeekIndex - 2);
      prevMonth = month - 1 === 0 ? 12 : month - 1;
    }

    // create table of dates
    let result: DateList[] = [];
    let index = firstDayOfWeekIndex;
    for (let i = 0; i < monthLength; i++) {
      // fill previous month dates
      if (i < firstDayOfWeekIndex) {
        result[i] = {
          key: uuid(),
          day: String(prevMothDays),
          value: `${year}/${prevMonth}/${prevMothDays}`,
          showBtn: false,
          disable: true
        };
        prevMothDays += 1;
      }
      // fill current month dates start from first day of week index
      result[index] = {
        key: uuid(),
        day: String(i + 1),
        value: `${year}/${month}/${i + 1}`,
        showBtn: false,
        disable: false
      };
      index += 1;
    }

    setDates(result);
  };

  useEffect(() => {
    createDatesArray('jalali');
  }, [dateValues.currentMonth]);

  return (
    <CalenderTable
    monthName={dateValues.monthName}
      onclick={(date) => {
        console.log(date);
      }}
      type={dateValues.type}
      today={dateValues.today}
      dates={dates}
      currentMonth={dateValues.currentMonth}
      onMouseEnter={(key, status) => handleAddButton(key, status)}
      onMouseLeave={(key, status) => handleAddButton(key, status)}
    />
  );
};

export default CalenderView;
