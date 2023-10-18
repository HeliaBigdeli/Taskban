import Icon from "../../Icon";

interface IProps {
  title: string;
  color?: string,
  description?: string;
  hasIcon?: boolean;
  icon?: IIcon;
  isButton?: boolean;
  hasDescription?: boolean;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

interface IIcon {
  size?: number;
  color?: string;
  icon: string;
}

const DropdownItem: React.FC<IProps> = ({
  title,
  color,
  description,
  hasIcon = false,
  icon,
  isButton,
  hasDescription,
  onClick = () => { }
}): JSX.Element => {

  const handleClick = (e) => {
    onClick(e)
  }

  return (
    <div className={`flex flex-col rounded-md font-bold ${isButton ? "bg-brand-primary text-white rounded-md px-2 font-normal" : "hover:bg-lightgray_100"}`}>
      <div className="flex items-center flex-row-reverse cursor-pointer p-2" onClick={handleClick}>
        {hasIcon && <Icon icon={icon?.icon} color={isButton ? '#fff' : icon?.color} size={icon?.size} />}
        <p className="text-sm" style={{color}}>
          {title}
        </p>
      </div>
      {hasDescription && <p className="text-xs font-yekan font-normal p-1">{description}</p>}
    </div>
  );
};

export default DropdownItem;
