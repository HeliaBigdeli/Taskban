interface IProps {
    text: string,
    type: "submit" | "button" | "reset",
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button:React.FC<IProps> = ({text, type, onClick}) :JSX.Element => {
    return (
        <button
                onClick={onClick}
                type={type}
                className="text-white text-sm leading-normal font-extrabold h-12 self-stretch rounded-md bg-brand-primary"
            >
            {text}
        </button>        
    )
}

export default Button;