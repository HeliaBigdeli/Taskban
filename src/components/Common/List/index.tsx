import { useEffect } from "react";
import Item from "./Item";
import useAxios from "../../../hooks/useAxios";
import { useSelector } from "react-redux";
import { workSpaceUpdate } from "../../../features/updateSlice";
import { workspaces } from "../../../constants/url";

interface IData {
  id: number;
  name: string;
  color: string;
}

const List: React.FC = (): JSX.Element => {
  const [response, error, loading, fetcher] = useAxios();

  const update = useSelector(workSpaceUpdate);

  const getWorkSpaces = async () => {
    await fetcher("get", workspaces.gets());
  };

  useEffect(() => {
    getWorkSpaces();
  }, [update]);

  return (
    <ul>
      {error && !loading ? "ورک اسپیسی وجود ندارد" : ""}
      {response?.map((item: IData) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default List;
