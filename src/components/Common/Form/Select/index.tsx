import Icon from "../../Icon";
import Input from "../Input";
import React, { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = (e: React.MouseEvent<HTMLElement>) => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onChange(e.currentTarget.dataset.value);
  };

  return (
    <button
      type="button"
      className={`border border-solid border-lightgray_300 rounded-md relative text-right p-XS ${className}`}
    >
      <div
        className="flex items-center justify-between flex-row-reverse"
        onClick={toggleAccordion}
      >
        <span className="text-sm text-lightgray font-b">انتخاب کنید</span>
        <Icon icon="chevron_down" className="mr-auto" />
      </div>
      <div
        className={`bg-white rounded-lg gap-XS absolute w-full top-11 left-0 shadow-select border border-lightgray_300
            ${isOpen ? "block z-10" : "hidden"}`}
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
              onChange={(name, value) => console.log(name, value)}
            />
          </div>
        )}
        <div className="max-h-[180px] overflow-auto">
          {items?.map((item) => (
            <div
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
    </button>
  );
};

export default Select;
