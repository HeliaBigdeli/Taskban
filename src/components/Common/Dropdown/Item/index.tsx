import Icon from "../../Icon";

interface IProps {
  title: string;
  description: string;
  hasIcon?: boolean;
  icon?: IIcon;
}
interface IIcon {
  size: number;
  color: string;
  icon: string;
}
const Item: React.FC<IProps> = ({
  title,
  description,
  hasIcon,
  icon,
}): JSX.Element => {
  return (
  
    <div className="flex p-2 m-3 ">
      <p className=" font-bold ">
        {" "}
        {title}{" "}
      </p>
      <p className="font-xs  font-yekan font-normal  break-words p-1 ">
        {description}
      </p>
      {hasIcon && <Icon icon={icon?.icon} />}
    </div>
  );
};

export default Item;
