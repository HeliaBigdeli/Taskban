import Item from "./Item";

interface IIcon {
  icon: string;
  size?: number;
  color?: string;
}
interface IData{
  title: string;
  description: string;
  hasIcon: boolean;
  icon: IIcon|any;
}
interface IProps{
  items:IData[]
}

const SelectBox: React.FC<IProps> = ({items}): JSX.Element => {
  return (
   
   
      <div className=" left-0 top-11  z-30  bg-red-primary text-right p-2 rounded-lg shadow flex-col justify-start items-end  inline-flex ">
    
        {items.map((item) => {
          return <Item title={item.title} description={item.description} hasIcon={item.hasIcon} icon={item.icon} />;
        })}
      </div>
  
  );
};

export default SelectBox;
