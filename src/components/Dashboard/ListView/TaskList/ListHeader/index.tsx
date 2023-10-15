import Icon from "../../../../Common/Icon";
import HeaderTitle from "./HeaderTitle";
import PN from "persian-number";
interface IListHeaderProps {
  color?: string;
  handleShow: () => void;
  title: string;
  tasks_count: number;
}

const ListHeader: React.FC<IListHeaderProps> = ({
  color,
  handleShow,
  title,
  tasks_count,
}): JSX.Element => {
  const colorVariants = {
    orange: "bg-orange-primary text-orange-secondary",
    green: "bg-green-primary text-green-secondary",
  };
  return (
    <div className="flex w-full justify-between items-center self-stretch">
      <section className="flex justify-end items-center gap-XS">
        <div className="flex justify-end items-center gap-[5px]">
          <button onClick={handleShow} className="h-5">
            <Icon icon="chevron_down_circle" size={20} />
          </button>
          <div
            className={`flex  py-1 px-1.5 items-start gap-2.5 rounded-[4px] bg-[#F92E8F] text-white text-center text-base font-medium ${
              color && colorVariants[color as keyof typeof colorVariants]
            }`}
          >
            {title}
          </div>
        </div>
        <div className="text-black text-sm flex gap-1 h-[25px] justify-center font-normal">
          <span>{PN.convertEnToPe(tasks_count)}</span>{" "}
          <span className="self-end">تسک</span>
        </div>
      </section>
      <section className="flex justify-start gap-[70px] ">
        <HeaderTitle title="اعضا" />
        <HeaderTitle title="ددلاین" />
        <HeaderTitle title="اولویت" />
        <HeaderTitle title="توضیحات" />
      </section>
    </div>
  );
};

export default ListHeader;
