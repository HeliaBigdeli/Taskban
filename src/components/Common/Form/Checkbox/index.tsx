import React from "react"

interface IProps {
    name: string,
    id: string,
    type: 'checkbox'
    label?: string,
    hasLabel: boolean,    
    onChange: (name: string, value: boolean) => void
}

const Checkbox:React.FC<IProps> = ({name, id, type, label, hasLabel, onChange}) :JSX.Element => {

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.name, e.target.checked)
    }

    return (   
        <div className="flex justify-end items-center gap-XS">
            {hasLabel && 
                <label className="text-black text-base font-medium" htmlFor={id}>
                    {label}
                </label> 
            }       
            <input
                name={name}
                id={id}
                type={type}
                onChange={changeHandler}
                className="w-5 h-5 rounded border border-[#999]"
            />
      </div>
    )
}

export default Checkbox;