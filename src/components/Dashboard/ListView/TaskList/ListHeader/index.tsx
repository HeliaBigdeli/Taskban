import Icon from "../../../../Common/Icon";
import HeaderTitle from "./HeaderTitle";
interface IListHeaderProps {
  color?: string;
  handleShow: () => void;
}

const ListHeader: React.FC<IListHeaderProps> = ({
  color,
  handleShow,
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
            className={`flex py-1 px-1.5 items-start gap-2.5 rounded-[4px] bg-[#F92E8F] text-white text-center text-base font-medium ${
              color && colorVariants[color as keyof typeof colorVariants]
            }`}
          >
            Pending
          </div>
        </div>
        <span className="text-black text-xs font-normal">۲ تسک</span>
      </section>
      <section className="flex justify-center gap-[70px]">
        <HeaderTitle title="اعضا" />
        <HeaderTitle title="ددلاین" />
        <HeaderTitle title="اولویت" />
        <HeaderTitle title="توضیحات" />
      </section>
    </div>
  );
};

export default ListHeader;
