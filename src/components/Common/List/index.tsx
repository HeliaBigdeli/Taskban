import { useEffect } from "react";
import API_URL from "../../../constants/api.url";
import Item from "./Item";
import useAxios from "../../../hooks/useAxios";
import { useSelector } from "react-redux";
import { selectUpdate } from "../../../features/updateSlice";
import { store } from "../../../app/store";
interface IData {
  name: string;
  id?: number;
  color: string;
  hasProject?: boolean;
}

const List: React.FC = (): JSX.Element => {
  const [response, error, loading, fetcher] = useAxios();

  const update = store.getState().update.workspace;

  const getWorkSpace = async () => {
    await fetcher("get", API_URL.WorkSpaces);
  };

  useEffect(() => {
    console.log(update);
    getWorkSpace();
  }, [update]);

  return (
    <ul>
      {loading ? "Loading..." : ""}
      {error ? "ورک اسپیسی وجود ندارد" : ""}
      {response?.length
        ? response.map((item: IData) => (
            <Item
              key={item.id}
              text={item.name}
              color={item.color}
              hasProject={item.hasProject}
            ></Item>
          ))
        : "ورک اسپیسی وجود ندارد"}
    </ul>
  );
};

export default List;
