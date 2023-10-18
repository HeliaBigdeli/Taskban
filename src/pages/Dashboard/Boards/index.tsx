import ListView from "../../../components/Dashboard/ListView";
import CalenderView from "../../../components/Dashboard/CalenderView";
import ColumnView from "../../../components/Dashboard/ColumnView";
import { useSelector } from "react-redux";
import { selectView } from "../../../features/viewSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import API_URL from "../../../constants/api.url";

const Boards: React.FC = (): JSX.Element => {
  const view: string = useSelector(selectView);
  const [response, error, loading, fetcher] = useAxios();
  const params = useParams()

  useEffect(() => {
    fetcher(
      "get",
      `${API_URL.WorkSpaces}${params.wid}/${API_URL.Projects}${params.pid}/${API_URL.Boards}`
    );
  }, [params.pid, view]);

  switch (view) {
    case "list":
      return <ListView data={response}/>;
    case "calender":
      return <CalenderView />;
    default:
      return <ColumnView data={response}/>;
  }
};

export default Boards;
