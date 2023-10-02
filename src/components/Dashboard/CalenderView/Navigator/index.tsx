import { useContext } from "react";
import Icon from "../../../Common/Icon";
import { AppContext } from "../../../../context/store";

const CalenderView: React.FC = (): JSX.Element => {
  const {dateValues, setDateValues} = useContext(AppContext);

  const handleChangeMonth = (e) => {
    if (e.currentTarget.name === "next") {
      setDateValues({...dateValues, currentMonth : dateValues.currentMonth + 1});
    } else {
      setDateValues({...dateValues, currentMonth : dateValues.currentMonth - 1});
    }
  };

  const handleToday = () => {
    setDateValues({...dateValues, currenymonth : 0});
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex gap-2">
          <span>{dateValues.year}</span>
          <span>{dateValues.monthName}</span>
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
    </>
  );
};

export default CalenderView;
