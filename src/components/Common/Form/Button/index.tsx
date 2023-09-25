import Icon from "../../Icon/";

interface IProps {
  text: string;
  type: "submit" | "button" | "reset";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  hasIcon: boolean;
  className: string;
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
      className={`text-white text-sm leading-normal font-extrabold h-12 self-stretch rounded-md bg-brand-primary ${props.className} `}
    >
      {props.hasIcon && (
        <Icon
          icon={props.icon}
          color={props.iconColor}
          size={props.iconSize}
          style={props.iconStyle}
          className={props.iconClassName}
        />
      )}
      {props.text}
    </button>
  );
};

export default Button;
