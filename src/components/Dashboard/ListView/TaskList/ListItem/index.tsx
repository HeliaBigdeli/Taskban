import Icon from "../../../../Common/Icon";
import UserIcon from "../../../UserIcon";
import ListItemTitle from "./ListItemTitle";

interface IListItemProps {
  color?: string;
}
const ListItem: React.FC<IListItemProps> = ({ color }): JSX.Element => {
  const colorVariants = {
    orange: "bg-orange-primary ",
    green: "bg-green-primary",
  };
  return (
    <div className="flex w-[986px] py-[7px] justify-between items-center mr-auto">
      <section className="flex items-start gap-[7px]">
        <div
          className={`w-S h-S rounded-[3px] bg-[#F92E8F] ${
            color && colorVariants[color as keyof typeof colorVariants]
          }`}
        ></div>

        <span className="text-[#0E0E0E] text-xs font-normal">
          این یک تیتر برای این تسک است.
        </span>
      </section>
      <section className="flex items-center gap-[70px]">
        <div className="flex w-[70px] justify-center items-center relative ">
          <UserIcon left={0} />
          <UserIcon left={24} />
        </div>

        <ListItemTitle title={"۶ آبان"} />

        <ListItemTitle title={<Icon icon="flag" size={16} color="#FA5252" />} />
        <ListItemTitle
          title={<Icon icon="paragraph" size={16} color="#BDC0C6" />}
        />
      </section>
    </div>
  );
};

export default ListItem;
