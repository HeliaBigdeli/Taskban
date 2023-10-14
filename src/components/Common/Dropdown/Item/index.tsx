import Icon from "../../Icon";


interface IProps {
  title: string;
  description: string;
  hasIcon?: boolean;
  icon?: IIcon;
  isButton?:boolean;
  hasDescription?:boolean;
  line?:boolean;

}
interface IIcon {
  size: number;
  color: string;
  icon?: string;
}
const Item: React.FC<IProps> = ({
  title,
  description,
  hasIcon=false,
  icon,
  isButton,
  hasDescription,
  line

}): JSX.Element => {
  return (
  
    <div className={`flex flex-col p-2 m-3 ${isButton ? "bg-brand-primary text-white rounded-md px-6 " : ""}`   }>
       <div className="flex flex-row-reverse "> {hasIcon && <Icon icon={icon?.icon} />}
      <p className=" font-bold px-2">
        {" "}
        {title}{" "}
      </p>
      </div>
      {hasDescription && <p className="font-xs  font-yekan font-normal  break-words p-1 ">{description }</p>}
      {line && <hr className="mt-3 opacity-10"/> }
   
    </div>
  );
};

export default Item;
