import { useEffect, useState, useContext } from "react";
import Table from "./Table";
import { AppContext } from "../../../context/store";
import { datesMaker } from "../../../utils/datesMaker";
import { selectBoard } from "../../../features/board/boardSlice";
import { useSelector, useDispatch } from "react-redux";
import { ITask } from "../../../interfaces/task";
import { all } from "../../../features/task/taskSlice";

const CalenderView: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const state = useSelector(selectBoard);
  const [dates, setDates] = useState<any[]>([]);
  const { dateValues, setDateValues } = useContext(AppContext);

  const addTasksToDates = (boards, dates) => {
    let tasks: ITask[] = [];
    boards.forEach((board) => {
      tasks = [...tasks, board.tasks];
    });

    const flattedTasks = tasks.flat();
    dispatch(all(flattedTasks));

    dates.map((date) => {
      flattedTasks?.map((task) => {
        if (
          new Date(date.value).getTime() === new Date(task.deadline).getTime()
        ) {
          date.task?.push(task);
        }
      });
    });

    return dates;
  };

  const handleAddButton = (key, status) => {
    const dateIndex = dates.findIndex((x) => x.key === key);

    if (!dates[dateIndex].disable) {
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

    setDates(addTasksToDates(state.boards, result.dates));
  }, [dateValues.currentMonth, dateValues.type]);

  return (
    <Table
      monthName={dateValues.monthName}
      onclick={() => {}}
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
