import { useContext } from "react";
import Icon from "../../../Common/Icon";
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
          <button name="next" onClick={handleChangeMonth} className="flex">
            <Icon icon="chevron_left" />
          </button>
          <button name="prev" onClick={handleChangeMonth} className="flex">
            <Icon icon="chevron_right" />
          </button>
          <span onClick={handleToday} className="cursor-pointer">
            {dateValues.type === "jalali" ? "امروز" : "today"}
          </span>
          <Button
            type="button"
            onClick={handleType}
            className="cursor-pointer bg-brand-primary text-white px-2 rounded-md"
            text={dateValues.type === "jalali" ? "تقویم میلادی" : "jalali calender"}
          />
        </div>
      </div>
    </>
  );
};

export default CalenderView;
