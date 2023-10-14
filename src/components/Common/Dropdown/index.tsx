// const data = [
//   {
//     title: "ویرایش نام ستون",
//     description: " ",
//     hasDescription:false,
//     hasIcon: true,
//     line:false,
//     icon: {
//       icon: "edit",
//     },
//   },
// ];

import { useState } from "react";
import Item from "./Item";

interface IIcon {
  icon: string;
  size?: number;
  color?: string;
}
interface IData {
  title: string;
  description: string;
  hasIcon: boolean;
  icon?: IIcon | any;
  isButton?: boolean;
  hasDescription?: boolean;
  line?: boolean;
}
interface IProps {
  items: IData[];
  className: string;
}

const SelectBox: React.FC<IProps> = ({ items, className }): JSX.Element => {
  const [open, setOpen] = useState(false);

  const getToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button className="" onClick={getToggle}>
        {" "}
        ++++
        {open && (
          <div
            className={` ${className} left-0 top-11 z-30 cursor-pointer  text-right p-2
       rounded-lg shadow flex-col  `}
          >
            {items.map((item) => {
              return <Item {...item} />;
            })}
          </div>
        )}
      </button>
    </div>
  );
};

export default SelectBox;
