import Icon from "../../Icon";
import React, { useRef, useState } from "react";
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
  const selectBtn = useRef<any>()
  const [value, setValue] = useState<string | null>("")
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(items)

  const openList = () => {
    setOpen(true)
  };

  const closeList = () => {
    console.log(22)
    setOpen(false)
  };

  const handleSelect = (e: React.MouseEvent<HTMLElement>) => {
    onChange(e)
    setValue(e.currentTarget.textContent)
    // selectBtn.current.blur()
  };

  const handleFocus = () => {    
    console.log(1111)
    // onChange(e)
    // setValue(e.currentTarget.textContent)
    // selectBtn.current.blur()
  };

  const handleSearch = (value: string) => {
    const data = items.filter((item) => {
      return item.title.includes(value)
    })

    setData(data)
  }

  return (
    <button
      data-name="selectBtn"
      ref={selectBtn}
      type="button"
      className={`border border-solid border-lightgray_300 rounded-md relative text-right p-XS ${className}`}
      onBlur={closeList}
      onFocus={openList}
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
          onFocus={handleFocus}
          onSearch={(value) => handleSearch(value)}
        />
      }
    </button>
  );
};

export default Select;