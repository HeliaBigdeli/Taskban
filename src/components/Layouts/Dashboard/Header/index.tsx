import { Link, useLocation } from "react-router-dom";
import Input from "../../../Common/Form/Input";
import Icon from "../../../Common/Icon";
import Select from "../../../Common/Form/Select";
import { useState } from "react";
import uuid from 'react-uuid';
import Modal from "../../../Common/Modal";
import { createPortal } from 'react-dom';

const portals = document.getElementById('portals') as Element;

const where = [
  { id: 1, title: "تاریخ" },
  { id: 2, title: "تگ" },
  { id: 3, title: "اعضا" },
  { id: 4, title: "اولویت" },
];
const tag = [
  { id: 1, title: "درس", color: 'indigo_secondary' },
  { id: 2, title: "کار", color: 'blue_secondary' },
  { id: 3, title: "پروژه", color: 'indigo_secondary' },
];
const existance = [
  { id: 1, title: "است" },
  { id: 2, title: "نیست" }
];

const Header: React.FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const [filters, setFilters] = useState([{
    key: uuid(), where: 0, tag: 0, existance: false
  }])
  const [modal, setModal] = useState<boolean>(false);

  const handleChange = (name: string, value: string) => {
    console.log(name, value);
  };

  const handleShowModal = () => {
    setModal(!modal);
  };

  const handleFilter = (e, key) => {
    const target = e.target.dataset;
    const currentFilter = filters.findIndex(x => x.key === key)

    filters[currentFilter][target.name] = target.value

    setFilters(filters)
  }

  const handleAddNewFilter = () => {
    if(filters.length === 4) {
      return false
    }
    const newFilter = {key: uuid(), where: 0, tag: 0, existance: false}
    setFilters([...filters, newFilter])
  }

  const handleRemoveFilter = (key) => {
    if(filters.length === 1) {
      return false
    }
    const filtered = filters.filter((filter) => {
      return filter.key !== key
    })    
    setFilters(filtered)    
  }
 
  return (
    <div className="mt-XL mr-S">
      <div className="flex flex-between flex-row-reverse border-b-2 border-lightgray_300 py-S gap-S">
        <div className="flex divide-x divide-lightgray_300 font-bold">
          <Link
            className={`px-S flex justify-center text-base items-center  ${pathname === '/calender' ? "text-brand-primary" : ""}`}
            to="/calender"
          >
            تقویم
            <Icon icon="calender_full" color={`${pathname === '/calender' ? "#208d8e" : "#323232"}`} />
          </Link>
          <Link
            className={`px-S flex justify-center text-base items-center ${pathname === '/board' ? "text-brand-primary" : ""}`}
            to="/board"
          >
            نمایش ستونی
            <Icon icon="grid" color={`${pathname === '/board' ? "#208d8e" : "#323232"}`} />
          </Link>
          <Link
            className={`px-S flex justify-center text-base items-center ${pathname === '/list' ? "text-brand-primary" : ""}`}
            to="/list"
          >
            نمایش لیستی
            <Icon icon="list" color={`${pathname === '/list' ? "#208d8e" : "#323232"}`} />
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
      {createPortal(
        <Modal
          modal={modal}
          setModal={handleShowModal}
          hasCloseIcon={true}
          closeIcon={{ order: 1 }}
          hasHeader={true}
          backIcon={{ order: 2 }}
          hasBackIcon={false}
          header={{ order: 3, text: 'فیلترها' }}
        >
          <div className="flex flex-col gap-S">
              {filters?.map((filter) => {
                return (
                  <div key={filter.key} className="flex flex-row-reverse items-center gap-3">
                  <span>تسک هایی که</span>
                  <Select
                    name="where"
                    onChange={(e) => handleFilter(e, filter.key)}
                    items={where}
                    className="w-[182px]"
                  />
                  <span>آن ها</span>
                  <Select
                    name="tag"
                    onChange={(e) => handleFilter(e, filter.key)}
                    items={tag}
                    className="w-[142px]"
                    searchPlaceholder="جستجو"
                  />
                  <Select
                    name="existance"
                    onChange={(e) => handleFilter(e, filter.key)}
                    items={existance}
                    className="w-[107px]"
                    hasSearch={false}
                  />
                  <span onClick={() => handleRemoveFilter(filter.key)}>
                    <Icon icon="trash" color="#FA5252" className="cursor-pointer mr-2XL" />
                  </span>
                </div>)
              })}
            <span onClick={handleAddNewFilter} className="text-brand-primary text-right  cursor-pointer mt-M font-bold">افزودن فیلتر جدید</span>
          </div>
        </Modal>,
        portals
      )}
    </div>
  );
};

export default Header;
