import ListView from "../../../components/Dashboard/ListView";
import CalenderView from "../../../components/Dashboard/CalenderView";
import ColumnView from "../../../components/Dashboard/ColumnView";
import { useSelector } from "react-redux";
import { selectView } from "../../../features/viewSlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import Header from "../../../components/Layouts/Dashboard/Header";
import { boardUpdate } from "../../../features/updateSlice";
import { boards, workspaces } from "../../../constants/url";

const Boards: React.FC = (): JSX.Element => {
  const view: string = useSelector(selectView);
  const [response, error, loading, fetcher] = useAxios();
  const [wsResponse, wsError, wsLoading, wsFetcher] = useAxios();
  const params = useParams();
  const update = useSelector(boardUpdate);
  const [boardTitle, setBoardTitle] = useState("");

  useEffect(() => {
    wsFetcher("get", workspaces.get({ wid: params.wid }));
    fetcher(
      "get",
      boards.gets({
        wid: params.wid,
        pid: params.pid,
      })
    );
  }, [params.pid, view, update]);

  switch (view) {
    case "list":
      return (
        <>
          <Header title={wsResponse} />
          <ListView data={response} />
        </>
      );
    case "calender":
      return (
        <>
          <Header title={wsResponse} />
          <CalenderView />
        </>
      );
    default:
      return (
        <>
          <Header title={wsResponse} />
          <ColumnView data={response} />
        </>
      );
  }
};

export default Boards;
