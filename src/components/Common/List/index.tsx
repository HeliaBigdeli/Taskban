import { useEffect } from "react";
import API_URL from "../../../constants/api.url";
import Item from "./Item";
import useAxios from "../../../hooks/useAxios";
import { useSelector } from "react-redux";
import { workSpaceUpdate } from "../../../features/updateSlice";

interface IData {
  name: string;
  id?: number;
  color: string;
  hasProject?: boolean;
}

const List: React.FC = (): JSX.Element => {
  const [response, error, loading, fetcher] = useAxios();

  const update = useSelector(workSpaceUpdate);

  const getWorkSpace = async () => {
    await fetcher("get", API_URL.WorkSpaces);
  };

  useEffect(() => {
    getWorkSpace();
  }, [update]);

  return (
    <ul>
      {loading ? "Loading..." : ""}
      {error && !loading ? "ورک اسپیسی وجود ندارد" : ""}
      {response?.map((item: IData) => (
            <Item
              key={item.id}
              text={item.name}
              color={item.color}
              hasProject={item.hasProject}
            ></Item>
          ))
        }
    </ul>
  );
};

export default List;
