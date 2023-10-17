import { useEffect, useState } from "react";
import { AXIOS } from "../../../config/axios.config";
import API_URL from "../../../constants/api.url";
import Item from "./Item";
interface IData {
  name: string;
  id: number;
  color: string;
  hasProject?: boolean;
}

const List: React.FC = (): JSX.Element => {
  const [data, setData] = useState<IData[]>([]);

  async function getWorkSpaces() {
    try {
      const response = await AXIOS.get(API_URL.WorkSpaces);
      if (response.status === 200) setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getWorkSpaces();
    console.log(data);
  }, []);

  return (
    <ul>
      {data.map((item) => (
        <Item
          key={item.id}
          text={item.name}
          color={item.color}
          hasProject={item.hasProject}
        ></Item>
      ))}
    </ul>
  );
};

export default List;
