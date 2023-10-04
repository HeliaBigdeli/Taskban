import Icon from "../../Icon/";
interface IIcon {
  icon: string;
  color?: string;
  size?: number;
  className?: string;
  style?: {};
}

interface IProps {
  name?: string,
  text?: string;
  type: "submit" | "button" | "reset";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  hasIcon?: boolean;
  className?: string;
  icon?: IIcon;
}

const Button: React.FC<IProps> = ({
  name,
  type,
  text,
  hasIcon,
  className,
  icon,
  onClick,
}): JSX.Element => {
  return (
    <button
      name={name}
      onClick={(e) => onClick(e)}
      type={type}
      className={`flex items-center justify-center ${className}`}
    >
      {text}
      {hasIcon && (
        <Icon
          icon={icon?.icon}
          color={icon?.color}
          size={icon?.size}
          style={icon?.style}
          className={icon?.className}
        />
      )}
    </button>
  );
};

export default Button;
