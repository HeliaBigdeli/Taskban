import { Link } from "react-router-dom";

interface IProps {
    name: string,
    id: string,
    type: string,
    labelText?: string,
    hasLabel: boolean,
    subText?: {
        text: string,
        link: string,
        isSet: boolean
    }
}

const Input:React.FC<IProps> = ({name, id, type, labelText, hasLabel, subText}) :JSX.Element => {
    return (
        <div className="flex flex-col items-end gap-XS self-stretch">
            {hasLabel && 
                <label className="text-black text-sm font-normal leading-normal" htmlFor={id}>
                    {labelText}
                </label>
            }
            <input
                name={name}
                id={id}
                className="h-XL self-stretch rounded-md bg-white border border-lightgray"
                type={type}
            />
            {subText?.isSet &&
                <Link 
                    className="text-brand-primary text-xs leading-normal font-extrabold"
                    to={subText.link}
                >
                    {subText.text}
                </Link>
             }
      </div>
    )
}

export default Input;