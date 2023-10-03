import { useEffect, useState, useContext } from "react";
import Table from "./Table";
import { datesMaker } from "../../../utils/datesMaker";
import { AppContext } from "../../../context/store";

const CalenderView: React.FC = (): JSX.Element => {
  const [dates, setDates] = useState<any[]>([]);
  const { dateValues, setDateValues } = useContext(AppContext);


  const handleSelect = (key, status) => {};

  useEffect(() => {
    // dateMaker get month index (0 is current ,1 and more are next monthes and -1 and more are previous monthew)
    // dateMaker use for both gregorian and jalali dates
    // example : to get next moth set first param of dateMaker to 1 and to get prev month dates set it to -1
    const result = datesMaker(dateValues.currentMonth, dateValues.type);

    setDateValues({
      ...dateValues,
      year: result.year,
      month: result.month,
      today: result.today,
      monthName: result.monthName,
      type: result.type,
    });
    setDates(result.dates);
  }, [dateValues.currentMonth, dateValues.type]);

  return (
    <Table
      monthName={dateValues.monthName}
      onclick={(date) => {
        console.log(date);
      }}
      type={dateValues.type}
      today={dateValues.today}
      dates={dates}
      currentMonth={dateValues.currentMonth}
      onMouseEnter={(key, status) => handleSelect(key, status)}
      onMouseLeave={(key, status) => handleSelect(key, status)}
    />
  );
};

export default CalenderView;
