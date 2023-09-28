import { Link } from "react-router-dom";
import Input from "../../../Common/Form/Input";
import Icon from "../../../Common/Icon";
import style from "./style.module.css";

interface IProps {
  title: string;
}

const Header: React.FC<IProps> = ({ title }): JSX.Element => {
  const handleChange = (name: string, value: string) => {
    console.log(name, value);
  };

  return (
    <div className="mt-XL mr-S">
      <div className="flex flex-between flex-row-reverse border-b-2 border-lightgray_300 py-S gap-S">
        <div className="flex divide-x divide-lightgray_300 font-bold">
          <Link
            className="px-S flex justify-center text-base items-center"
            to="/"
          >
            تقویم 
            <Icon icon="calender_full" />
          </Link>
          <Link
            className={`px-S flex justify-center text-base items-center ${style.active}`}
            to="/"
          >
            نمایش ستونی
            <Icon icon="grid" color="#208D8E" />
          </Link>
          <Link
            className="px-S flex justify-center text-base items-center"
            to="/"
          >
            نمایش لیستی 
            <Icon icon="list" />
          </Link>
          <span className="font-bold pl-S justify-end text-xl">{title}</span>
        </div>
        <Link
          className="mr-auto font-bold flex justify-center text-base items-center"
          to="/"
        >
          اشتراک گذاری
          <Icon icon="share" />
        </Link>
      </div>
      <div className="border-b-2 border-lightgray_300 py-S flex divide-x justify-end items-center divide-lightgray_300">
        <div className="flex">
          <p className="text-xs bg-blue_secondary p-1 px-S text-blue_primary">
            دسته بندی شده با : وضعیت
          </p>
          <Link
            className="px-S flex justify-center items-center text-xs"
            to="/"
          >
            فیلترها
            <Icon icon="filter" />
          </Link>
        </div>
        <Input
          className="pr-L border-none w-[200px] bg-white text-xs"
          placeholder="جستجو بین تسک‌ها"
          name="search"
          id="search"
          type="text"
          hasLabel={false}
          hasIcon={true}
          icon={{
            icon: "search",
          }}
          onChange={(name, value) => handleChange(name, value)}
        />
      </div>
    </div>
  );
};

export default Header;
