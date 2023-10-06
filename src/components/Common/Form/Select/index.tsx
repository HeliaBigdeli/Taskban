import Icon from "../../Icon";
import { useState } from "react";
import Selectlist from "./SelectList";

interface IItem {
  id: number;
  title: string;
  color?: string;
}

interface IProps {
  items: IItem[];
  name: string,
  className?: string;
  hasSearch?: boolean;
  searchPlaceholder?: string;
  onChange: (e: React.MouseEvent<HTMLElement>) => void;
}

const Select: React.FC<IProps> = ({
  onChange,
  name,
  items,
  className,
  hasSearch = true,
  searchPlaceholder = "جستجو بین فیلترها",
}): JSX.Element => {
  const [value, setValue] = useState<string | null>("")
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(items)

  const toggleList = () => {
    setData(items)
    setOpen(!open)
  };

  const handleSelect = (e: React.MouseEvent<HTMLElement>) => {
    onChange(e)
    setValue(e.currentTarget.textContent)
    setOpen(!open)
  };

  const handleSearch = (value: string) => {
    const data = items.filter((item) => {
      return item.title.includes(value)
    })

    setData(data)
  }

  return (
    <button
      type="button"
      className={`border border-solid border-lightgray_300 rounded-md relative text-right p-XS ${className}`}
      onClick={toggleList}
    >
      <div
        className="flex items-center justify-between flex-row-reverse"
      >
        <span className={`text-sm ${value ? 'black' : 'text-lightgray'} font-b`}>{value || 'انتخاب کنید'}</span>
        <Icon icon="chevron_down" className="mr-auto" />
      </div>
      {open &&
        <Selectlist
          items={data}
          name={name}
          hasSearch={hasSearch}
          searchPlaceholder={searchPlaceholder}
          onSelect={handleSelect}
          onSearch={(e) => handleSearch(e)}
        />}
    </button>
  );
};

export default Select;