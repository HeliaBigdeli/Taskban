import ListView from "../../../components/Dashboard/ListView";
import CalenderView from "../../../components/Dashboard/CalenderView";
import ColumnView from "../../../components/Dashboard/ColumnView";
import { useSelector } from "react-redux";
import { selectView } from "../../../features/viewSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import Header from "../../../components/Layouts/Dashboard/Header";
import { boardUpdate, taskUpdate } from "../../../features/updateSlice";
import { boards } from "../../../constants/url";

const Boards: React.FC = (): JSX.Element => {
  const view: string = useSelector(selectView);
  const [response, error, loading, fetcher] = useAxios();
  const params = useParams();
  const update = useSelector(boardUpdate);
  const updateByTask = useSelector(taskUpdate);

  useEffect(() => {
    fetcher(
      "get",
      boards.gets({
        wid: params.wid,
        pid: params.pid,
      })
    );
  }, [params.pid, view, update, updateByTask]);

  switch (view) {
    case "list":
      return (
        <>
          <Header />
          <ListView data={response} />
        </>
      );
    case "calender":
      return (
        <>
          <Header />
          <CalenderView />
        </>
      );
    default:
      return (
        <>
          <Header />
          <ColumnView data={response} />
        </>
      );
  }
};

export default Boards;
