import { useContext } from "react";
import { AppContext } from "../../../../context/store";
import Button from "../../../Common/Form/Button";

const CalenderView: React.FC = (): JSX.Element => {
  const { dateValues, setDateValues } = useContext(AppContext);

  const handleChangeMonth = (e) => {
    if (e.currentTarget.name === "next") {
      setDateValues({
        ...dateValues,
        currentMonth: dateValues.currentMonth + 1,
      });
    } else {
      setDateValues({
        ...dateValues,
        currentMonth: dateValues.currentMonth - 1,
      });
    }
  };

  const handleToday = () => {
    setDateValues({ ...dateValues, currentMonth: 0 });
  };

  const handleType = () => {
    setDateValues({
      ...dateValues,
      type: dateValues.type === "gregorian" ? "jalali" : "gregorian",
    });
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex gap-2 items-center">
          <span>{dateValues.year}</span>
          <span>{dateValues.monthName}</span>
          <Button type="button" hasIcon={true} icon={{icon: 'chevron_left'}} name="next" onClick={handleChangeMonth} className="flex" />
          <Button type="button" hasIcon={true} icon={{icon: 'chevron_right'}} name="prev" onClick={handleChangeMonth} className="flex" />
          <span onClick={handleToday} className="cursor-pointer">
            {dateValues.type === "jalali" ? "امروز" : "today"}
          </span>
          <Button
            type="button"
            onClick={handleType}
            className="cursor-pointer bg-brand-primary text-white px-3 rounded-md"
            text={dateValues.type === "jalali" ? "تقویم میلادی" : "jalali calender"}
          />
        </div>
      </div>
    </>
  );
};

export default CalenderView;