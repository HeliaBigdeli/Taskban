import { Link } from "react-router-dom";
import Input from "../../../Common/Form/Input";
import Icon from "../../../Common/Icon";
import style from "./style.module.css";
import Select from "../../../Common/Form/Select";
import { useState } from "react";
import Modal from "../../../Common/Modal";

interface IProps {
  title?: string;
}

const where = [
  { id: 1, title: "تاریخ" },
  { id: 2, title: "تگ" },
  { id: 3, title: "اعضا" },
  { id: 4, title: "اولویت" },
];
const tag = [
  { id: 1, title: "درس", color: 'indigo_secondary' },
  { id: 2, title: "کار", color: 'blue_secondary' },
  { id: 3, title: "پروژ", color: 'indigo_secondary' },
];
const existance = [
  { id: 1, title: "است" },
  { id: 2, title: "نیست" }
];

const Header: React.FC<IProps> = ({ title }): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);

  const handleChange = (name: string, value: string) => {
    console.log(name, value);
  };

  const handleShowModal = () => {
    setModal(!modal);
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
          <span className="font-bold pl-S justify-end text-xl">پروژ</span>
        </div>
        <Link
          className="mr-auto font-bold flex justify-center text-base items-center"
          to="/"
        >
          اشتراک گذاری
          <Icon icon="share" />
        </Link>
      </div>
      <div className="border-b-2 border-lightgray_300 py-S mb-S flex divide-x justify-end items-center divide-lightgray_300">
        <div className="flex">
          <p className="text-xs bg-blue_secondary p-1 px-S text-blue_primary">
            دسته بندی شده با : وضعیت
          </p>
          <button
            onClick={handleShowModal}
            className="px-S flex justify-center items-center text-xs"
          >
            فیلترها
            <Icon icon="filter" />
          </button>
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
      <Modal modal={modal} setModal={handleShowModal}>
        <div className="flex flex-col gap-S">
          <div className="flex flex-row-reverse items-center gap-3">
            <span>تسک هایی که</span>
            <Select
              onChange={() => {}}
              items={where}
              className="w-[182px]"
            />
            <span>آن ها</span>
            <Select
              onChange={() => {}}
              items={tag}
              className="w-[142px]"
              searchPlaceholder="جستجو"
            />
            <Select
              onChange={() => {}}
              items={existance}
              className="w-[107px]"
              hasSearch={false}
            />
            <Icon icon="trash" color="#FA5252" className="cursor-pointer mr-2XL" />
          </div>
          <div className="flex flex-row-reverse items-center gap-3">
            <span>تسک هایی که</span>
            <Select
              onChange={() => {}}
              items={where}
              className="w-[182px]"
            />
            <span>آن ها</span>
            <Select
              onChange={() => {}}
              items={tag}
              className="w-[142px]"
              searchPlaceholder="جستجو"
            />
            <Select
              onChange={() => {}}
              items={existance}
              className="w-[107px]"
              hasSearch={false}
            />
            <Icon icon="trash" color="#FA5252" className="cursor-pointer mr-2XL" />
          </div>
          <span className="text-brand-primary text-right  cursor-pointer mt-M font-bold">افزودن فیلتر جدید</span>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
