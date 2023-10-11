
//////////////data start///////////////

// import Dropdown from "../../../components/Common/Dropdown";

  ////////////column more////////////

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
  //   {
  //     title: "افزودن تسک",
  //     description: " ",
  //     hasDescription:false,
  //     hasIcon: true,
  //     line:false,
  //     icon: {
  //       icon: "plus",
  //     },
  //   },
  //   {
  //     title: "آرشیو تمام تسک ها",
  //     description: " ",
  //     hasDescription:false,
  //     hasIcon: true,
  //     line:false,
  //     icon: {
  //       icon: "archive",
  //     },
  //   },
  //   {
  //     title: "حذف ستون",
  //     description: " ",
  //     hasDescription:false,
  //     hasIcon: true,
  //     line:false,
  //     icon: {
  //       icon: "trash",
  //     },
  //   },
  // ]; 





  /////////////////permission//////////////


  // const dataPermission = [
  //   {
  //     title: "  دسترسی کامل",
  //     description:
  //       "توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه ",
  //       hasDescription:true,
  //       hasIcon: false,
  //     line:true,
  //     icon: {
  //       icon: "edit",
  //     },
  //   },
  //   {
  //     title: "دسترسی ویرایش",
  //     description:
       
  //     "توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند پروژه را حذف یا تسک جدید بسازد ",
      
  //     hasDescription:true,
  //     hasIcon: false,
  //     line:true,
  //     icon: {
  //       icon: "plus",
  //     },
  //   },
  //   {
  //     title: "دسترسی کامنت",
  //     description:
  //       "توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما توانایی ویرایش تنظیمات پروژه را ندارد ",
  //       hasDescription:true,
  //       hasIcon: false,
  //     line:true,
  //     icon: {
  //       icon: "archive",
  //     },
  //   },
   
  //   {
  //     title: " فقط دسترسی مشاهده",
  //     description: "توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد",
  //     hasDescription:true,
  //     hasIcon: false,
  //     line:false,
  //     icon: {
  //       icon: "trash",
  //     },
  //   },
  // ];


//////////////columnMore/////////////////


// const columnMore1 = [
//   {
//     title: " ساختن پروژه جدید",
//     description: " ",
//     hasIcon: true,
//     icon: {
//       icon: "plus",
//     },
//     isButton:false,
//   },
//   {
//     title: " ویرایش نام ورک‌اسپیس",
//     description: " ",
//     hasIcon: true,
//     icon: {
//       icon: "edit",
//     },
//     isButton:false,
//   },
//   {
//     title: "ویرایش رنگ",
//     description: " ",
//     hasIcon: true,
//     icon: {
//       icon: "color",
//     },
//     isButton:false,
//   },
//   {
//     title: "کپی لینک ",
//     description: " ",
//     hasIcon: true,
//     icon: {
//       icon: "link",
//     },
//     isButton:false,
//   },
//   {
//     title: " حذف ",
//     description: " ",
//     hasIcon: true,
//     icon: {
//       icon: "trash",
//     },
//     isButton:false,
//   },
//   {
//     title: "اشتراک گذاری ",
//     description: " ",
//     hasIcon: true,
//     icon: {
//       icon: "share",
//     },
//     isButton:true,
//   },
// ];


////////////columnMore////////////////

// const columnMore2 = [
//   {
//     title: "ساختن تسک جدید",
//     description: " ",
//     hasIcon: true,
//     icon: {
//       icon: "plus",
//     },
//     isButton:false,
//   },
//   {
//     title: "  ویرایش نام پروژه",
//     description: " ",
//     hasIcon: true,
//     icon: {
//       icon: "edit",
//     },
//     isButton:false,
//   },
//   {
//     title: " کپی لینک",
//     description: " ",
//     hasIcon: true,
//     icon: {
//       icon: "link",
//     },
//     isButton:false,
//   },
//   {
//     title: " حذف",
//     description: " ",
//     hasIcon: true,
//     icon: {
//       icon: "trash",
//     },
//     isButton:false,
//   },
//   {
//     title: "اشتراک گذاری ",
//     description: " ",
//     hasIcon: true,
//     icon: {
//       icon: "share",
//     },
//     isButton:true,
//   },
// ];





          // eslint-disable-next-line no-lone-blocks
          {/* <Dropdown items={data} className={""} /> */}
      // eslint-disable-next-line no-lone-blocks
      {/* <Dropdown className="w-[330px] shadow-2xl" items={dataPermission} /> */}
      // eslint-disable-next-line no-lone-blocks
      {/* <Dropdown items={columnMore1} className={""} /> */}
      // eslint-disable-next-line no-lone-blocks
      {/* <Dropdown items={columnMore2} className={"shadow-2xl"} /> */}




//////////////data end//////////////////////



import { useState } from "react";
import Item from "./Item";

interface IIcon {
  icon: string;
  size?: number;
  color?: string;
 
}
interface IData{
  title: string;
  description: string;
  hasIcon: boolean;
  icon?: IIcon|any;
  isButton?:boolean;
  hasDescription?:boolean;
  line?:boolean;
}
interface IProps{
  items:IData[]
  className:string;
}

const SelectBox: React.FC<IProps> = ({items,className}): JSX.Element => {
  
const [open,setOpen]=useState(false);

const getToggle=()=>{
  setOpen (!open)
}

  return (
  <div>
  
   <button className="" onClick={getToggle}> ++++
   {open && 
      <div className={` ${className} left-0 top-11 z-30 cursor-pointer  text-right p-2
       rounded-lg shadow flex-col  `}>
    
        {items.map((item) => {
          return <Item title={item.title} description={item.description} hasIcon={item.hasIcon} 
          icon={item.icon} isButton={item.isButton} hasDescription={item.hasDescription }  line={item.line}/>;
        })}
        {/* <button className="mr-auto font-bold flex justify-center text-base items-center">اشتراک گذاری</button> */}
      </div>
      
}
      </button>

  </div>
  ); 
};

export default SelectBox;
