import { useState } from "react";

interface IProps {
  inputValue?: string,
  rows?: number,
  name: string;
  id: string;
  label?: string;
  hasLabel?: boolean;
  placeholder?: string; 
  onChange: (name: string, value: string) => void;
  className?: string;
  autoFocus?: boolean
}

const Textarea: React.FC<IProps> = ({
  inputValue,
  rows,
  autoFocus = false,
  name,
  id,
  label,
  hasLabel = false,
  placeholder,
  onChange,
  className,
}): JSX.Element => {
  const [value, setValue] = useState(inputValue);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    onChange(e.target.name, e.target.value);
  };

  return (
    <>
      <div className="text-right flex flex-col gap-XS">
        {hasLabel && (
          <label
            className="text-black text-sm font-normal leading-normal"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <div className="flex items-center justify-end">
          <textarea
            autoFocus = {autoFocus}
            value={value}
            placeholder={placeholder}
            name={name}
            id={id}
            rows={rows}
            onChange={handleChange}
            className={`rounded-md border border-lightgray px-2 text-right w-full p-1 ${className}`}
          />        
        </div>       
      </div>
    </>
  );
};

export default Textarea;
