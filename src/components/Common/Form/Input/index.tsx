import { Link } from "react-router-dom";
import { useState } from "react";
import Icon from "../../Icon";

interface IIcon {
  icon: string;
  color?: string;
  size?: number;
  className?: string;
  style?: {};
}

interface IProps {
  name: string;
  id: string;
  type: "text" | "number" | "email" | "password";
  label?: string;
  hasLabel?: boolean;
  placeholder?: string;
  subText?: {
    text?: string;
    link?: string;
  };
  showError?: boolean;
  onChange: (name: string, value: string) => void;
  hasIcon?: boolean;
  icon?: IIcon;
  className?: string;
}

const Input: React.FC<IProps> = ({
  name,
  id,
  type,
  label,
  hasLabel = false,
  subText,
  placeholder,
  onChange,
  hasIcon = false,
  className,
  icon,
}): JSX.Element => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <div className="relative flex items-center justify-end">
          <input
            value={value}
            placeholder={placeholder}
            name={name}
            id={id}
            type={type}
            onChange={handleChange}
            className={`rounded-md border border-lightgray px-2 text-right w-full ${className}`}
          />
          {hasIcon && (
            <Icon
              icon={icon?.icon}
              size={icon?.size}
              color={icon?.color}
              style={icon?.style}
              className={`${icon?.className} absolute pr-2`}
            />
          )}
        </div>
        {subText?.text?.trim() && (
          <>
            {subText.link ? (
              <Link
                className="text-brand-primary text-xs leading-normal font-extrabold text-right"
                to={subText.link}
              >
                {subText.text}
              </Link>
            ) : (
              <p className="text-xs leading-normal font-extrabold">
                {subText?.text}
              </p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Input;
