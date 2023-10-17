import Icon from "../../Icon";

interface IProps {
  title: string;
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
    <div className={`flex flex-col hover:bg-lightgray_100 rounded-md ${isButton ? "bg-brand-primary text-white rounded-md px-2" : ""}`}>
      <div className="flex items-center flex-row-reverse cursor-pointer p-2" onClick={handleClick}>
        {hasIcon && <Icon icon={icon?.icon} color={icon?.color} size={icon?.size} />}
        <p className="font-bold px-1 text-sm">
          {title}
        </p>
      </div>
      {hasDescription && <p className="text-xs font-yekan font-normal p-1">{description}</p>}
    </div>
  );
};

export default DropdownItem;
