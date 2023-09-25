import { Link } from "react-router-dom";
import {useState} from 'react';

interface IProps {
    name: string,
    id: string,
    type: 'text' | 'number' | 'email' | 'password'
    label?: string,
    hasLabel: boolean,
    placeholder? :string,
    subText?: {
        text?: string,
        link?: string,
    },
    showError?: boolean
    onChange: (name: string, value: string) => void
}

const Input:React.FC<IProps> = ({name, id, type, label, hasLabel, subText, placeholder, onChange}) :JSX.Element => {
    const [value, setValue] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        onChange(e.target.name, e.target.value)
    }

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
            value={value}
            placeholder={placeholder}
            name={name}
            id={id}
            type={type}
            onChange={handleChange}
            className="h-XL self-stretch rounded-md bg-white border border-lightgray px-2"
        />
        {subText?.text?.trim() &&
            <>
                {subText.link 
                    ? <Link 
                        className="text-brand-primary text-xs leading-normal font-extrabold"
                        to={subText.link}
                    >
                        {subText.text}
                    </Link>
                    : <p className="text-xs leading-normal font-extrabold">
                        {subText?.text}
                    </p>   
                }
            </>
        }
      </div>
    )
}

export default Input;
