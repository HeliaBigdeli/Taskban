import { setServers } from "dns";
import Icon from "../../Icon";
import Input from "../Input";
import React, { useEffect, useRef, useState } from "react";
interface IItem {
  id: number;
  title: string;
  color?: string;
}

interface IProps {
  items: IItem[];
  className?: string;
  hasSearch?: boolean;
  searchPlaceholder?: string;
  onChange: (value: string | undefined) => void;
}

const Select: React.FC<IProps> = ({
  onChange,
  items,
  className,
  hasSearch = true,
  searchPlaceholder = "جستجو بین فیلترها",
}): JSX.Element => {
  const [value, setValue] = useState<string | null>("")
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(items)

  const toggleList = (e: React.MouseEvent<HTMLElement>) => {
    setData(items)
    setOpen(!open)
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onChange(e.currentTarget.dataset.value)
    setValue(e.currentTarget.textContent)
    setOpen(!open)
  };

  const handleSearch = (name: string, value: string) => {
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
      {open && <div
        onClick={(e) => {e.stopPropagation()}}
        className="bg-white rounded-lg gap-XS absolute w-full top-11 left-0 shadow-select border border-lightgray_300 z-10"
      >
        {hasSearch && (
          <div className="border-b-2 mb-XS border-lightgray_300">
            <Input
              className="pr-L border-none bg-white h-XL outline-none"
              placeholder={searchPlaceholder}
              name="search"
              id="search"
              type="text"
              hasLabel={false}
              hasIcon={true}
              icon={{
                icon: "search",
                color: "#208D8E",
              }}
              onChange={handleSearch}
            />
          </div>
        )}
        <div className="max-h-[200px] overflow-auto">
          {data?.map((item) => (
            <div
              data-name="filter"
              data-value={item.id}
              className="p-XS hover:bg-lightgray_100 rounded-md"
              onClick={handleClick}
              key={item.id}
            >
              {item.color ? (
                <span
                  className={`bg-${item.color} text-${item.color} rounded-2xl px-2`}
                >
                  {item.title}
                </span>
              ) : (
                item.title
              )}
            </div>
          ))}
        </div>
      </div>
      }
    </button>
  );
};

export default Select;