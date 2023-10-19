import Icon from "../../Icon";
import Input from "../Input";

interface IProps {
  hasLabel?: boolean;
  label?: string;
  id: string;
  name: string;
  onChange: (name: string, value: string) => void;
}

const File: React.FC<IProps> = ({
  onChange,
  id,
  name,
  hasLabel,
  label,
}): JSX.Element => {
  const handleChange = (name: string, value: any) => {
    onChange(name, value);
  };

  return (
    <div className="flex flex-row-reverse items-center">
      {hasLabel && (
        <label
          className="text-black text-sm font-normal leading-normal ml-S"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <label className="flex flex-row items-center text-base font-medium border border-brand-primary h-[36px] rounded-lg w-[112px] py-[4px] px-[8px] gap-[4px] cursor-pointer text-center">
        آپلود فایل
        <Icon icon="attach" color="#208d8e" />
        <Input
          type="file"
          id={id}
          name={name}
          hidden={true}
          onChange={(name, value) => handleChange(name, value)}
        />
      </label>
    </div>
  );
};

export default File;
