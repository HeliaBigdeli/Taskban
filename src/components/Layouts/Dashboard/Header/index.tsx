import { useLocation, useSearchParams } from "react-router-dom";
import Input from "../../../Common/Form/Input";
import Icon from "../../../Common/Icon";
import { useState } from "react";
import Navigator from "../../../Dashboard/CalenderView/Navigator";
import FilterModal from "../../../Dashboard/FilterModal";
import ShareModal from "../../../Dashboard/ShareModal";
import { selectView } from "../../../../features/viewSlice";
import { useSelector, useDispatch } from "react-redux";
import { chengeView } from "../../../../features/viewSlice";

const Header: React.FC = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const [filterModal, setFilterModal] = useState<boolean>(false);
  const [shareModal, setShareModal] = useState<boolean>(false);
  const view = useSelector(selectView);
  const dispatch = useDispatch();

  const handleFilterModal = () => {
    setFilterModal(!filterModal);
  };

  const handleShareModal = () => {
    setShareModal(!shareModal);
  };

  const handleView = (type) => {
    dispatch(chengeView({ type }));
  };

  return (
    <div className="mt-XL mr-S">
      <div className="flex flex-between flex-row-reverse border-b-2 border-lightgray_300 py-S gap-S">
        <div className="flex divide-x divide-lightgray_300 font-bold">
          <p
            onClick={() => handleView("calender")}
            className={`px-S flex justify-center text-base items-center cursor-pointer ${view === "calender" ? "text-brand-primary" : ""
              }`}
          >
            تقویم
            <Icon
              icon="calender_full"
              color={`${view === "calender" ? "#208d8e" : "#323232"}`}
            />
          </p>
          <p
            onClick={() => handleView("column")}
            className={`px-S flex justify-center text-base items-center cursor-pointer ${view === "column" ? "text-brand-primary" : ""
              }`}
          >
            نمایش ستونی
            <Icon
              icon="grid"
              color={`${view === "column" ? "#208d8e" : "#323232"}`}
            />
          </p>
          <p
            onClick={() => handleView("list")}
            className={`px-S flex justify-center text-base items-center cursor-pointer ${view === "list" ? "text-brand-primary" : ""
              }`}
          >
            نمایش لیستی
            <Icon
              icon="list"
              color={`${view === "list" ? "#208d8e" : "#323232"}`}
            />
          </p>
          <span className="font-bold pl-S justify-end text-xl">
            {searchParams.get('project_name')}
          </span>
        </div>
        <button
          onClick={handleShareModal}
          className="mr-auto font-bold flex justify-center text-base items-center"
        >
          اشتراک گذاری
          <Icon icon="share" />
        </button>
      </div>
      <div className="border-b-2 border-lightgray_300 py-S mb-S flex divide-x justify-end items-center divide-lightgray_300">
        {pathname === "/calender" ? (
          <div className="px-S">
            <Navigator />
          </div>
        ) : (
          <div className="flex">
            <p className="text-xs bg-blue_secondary p-1 px-S text-blue_primary">
              دسته بندی شده با : وضعیت
            </p>
            <button
              onClick={handleFilterModal}
              className="px-S flex justify-center items-center text-xs"
            >
              فیلترها
              <Icon icon="filter" />
            </button>
          </div>
        )}
        <Input
          className="pr-L border-none w-[200px] bg-white text-xs"
          placeholder="جستجو بین تسک‌ها"
          name="search"
          id="task_search"
          type="text"
          hasLabel={false}
          hasIcon={true}
          icon={{
            icon: "search",
          }}
          onChange={(name, value) => {
            console.log(name, value);
          }}
        />
      </div>
      {/*----------------------------------------------- Sharing & Filter Modal --------------------------------------------- */}
      {shareModal && (
        <ShareModal
          modal={shareModal}
          setModal={handleShareModal}
          title="اشتراک گذاری پروژه"
        />
      )}
      {filterModal && (
        <FilterModal modal={filterModal} setModal={handleFilterModal} />
      )}
    </div>
  );
};

export default Header;
