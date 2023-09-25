interface IProps {
  text: string;
  type: "submit" | "button" | "reset";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  hasIcon: boolean;
  className: string;
}

const Button: React.FC<IProps> = (props: IProps): JSX.Element => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`text-white text-sm leading-normal font-extrabold h-12 self-stretch rounded-md bg-brand-primary ${props.className} `}
    >
      {props.hasIcon && <svg />}
      {props.text}
    </button>
  );
};

export default Button;

//text-white text-sm leading-normal font-extrabold h-12 self-stretch rounded-md bg-brand-primary
