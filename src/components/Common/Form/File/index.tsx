import Icon from "../../Icon";

interface IProps {
  hasLabel?: boolean;
  label?: string;
  id: string;
  name: string;
  onChangeFile: (name: string, value: any) => void;
}

const File: React.FC<IProps> = ({
  onChangeFile,
  id,
  name,
  hasLabel,
  label,
}): JSX.Element => {
  const handleChange = (e) => {
    onChangeFile(e.target.name, e.target.files[0]);
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
        <input type="file" id={id} name={name} hidden onChange={handleChange} />       
      </label>
    </div>
  );
};

export default File;
