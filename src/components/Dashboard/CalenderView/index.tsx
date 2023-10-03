import { useEffect, useState, useContext } from "react";
import CalenderTable from "./Table";
import { AppContext } from "../../../context/store";
import { datesMaker } from '../../../utils/datesMaker'

const CalenderView: React.FC = (): JSX.Element => {
  const [dates, setDates] = useState<any[]>([]);
  const { dateValues, setDateValues } = useContext(AppContext);

  const handleAddButton = (key, status) => {
    const dateIndex = dates.findIndex((x) => x.key === key);

    if(!dates[dateIndex].disable) {
      dates[dateIndex].showBtn = status === "show" ? true : false;
      setDates([...dates]);
    }
  };

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
