import { Link } from "react-router-dom";

interface IProps {
    name: string,
    id: string,
    type: 'text' | 'number' | 'email' | 'password'
    label?: string,
    hasLabel: boolean,
    placeholder? :string,
    subText?: {
        text: string,
        link: string,
        isSet: boolean
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input:React.FC<IProps> = ({name, id, type, label, hasLabel, subText, placeholder, onChange}) :JSX.Element => {
    return (   
        <div className="flex flex-col items-end gap-XS self-stretch">
            {hasLabel && 
                <label
                    className="text-black text-sm font-normal leading-normal" 
                    htmlFor={id}
                >
                    {label}
                </label>
            }
            <input
                placeholder={placeholder}
                name={name}
                id={id}
                type={type}
                onChange={onChange}
                className="h-XL self-stretch rounded-md bg-white border border-lightgray px-2"
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