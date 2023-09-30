import Item from "./Item";
interface IData {
  text: string;
  id: number;
  color: string;
  hasProject: boolean;
}
interface IProps {
  data: IData[];
}

const List: React.FC<IProps> = ({ data }): JSX.Element => {
  return (
    <ul> 
      {data.map((item) => (
        <Item
          key={item.id}
          text={item.text}
          color={item.color}
          hasProject={item.hasProject}
        ></Item>
      ))}
    </ul>
  );
};

export default List;
