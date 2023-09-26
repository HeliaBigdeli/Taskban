import Icon from "../../Icon/";

interface IProps {
  text: string;
  type: "submit" | "button" | "reset";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  hasIcon?: boolean;
  className?: string;
  icon?: string | undefined;
  iconColor?: string;
  iconSize?: number;
  iconStyle?: {};
  iconClassName?: string;
}

const Button: React.FC<IProps> = (props: IProps): JSX.Element => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`flex items-center justify-center ${props.className} `}
    >
      {props.text}
      {props.hasIcon && (
        <Icon
          icon={props.icon}
          color={props.iconColor}
          size={props.iconSize}
          style={props.iconStyle}
          className={props.iconClassName}
        />
      )}
    </button>
  );
};

export default Button;
