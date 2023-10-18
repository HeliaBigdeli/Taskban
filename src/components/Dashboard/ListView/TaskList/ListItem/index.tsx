import Icon from "../../../../Common/Icon";
import MembersThumb from "../../../../Common/MembersThumb";
import ListItemTitle from "./ListItemTitle";
import { useSelector } from "react-redux";

const members = [
  {
    id: 1,
    email: "44243",
    first_name: "Helya",
    last_name: "Bigdeli",
    username: "Bigdeli",
    thumbnail: "Bigdeli",
    phone_number: "0935165197"
  },
  {
    id: 2,
    email: "44243",
    first_name: "Helya",
    last_name: "Bigdeli",
    username: "Bigdeli",
    thumbnail: "Bigdeli",
    phone_number: "0935165197"
  }
];

interface IListItemProps {
  color?: string;
  name: string;
}
const ListItem: React.FC<IListItemProps> = ({ color, name }): JSX.Element => {
  const colorVariants = {
    orange: "bg-orange-primary ",
    green: "bg-green-primary",
  };
  const { first_name, last_name } = useSelector((store: any) => store.auth);
  return (
    <div className="flex w-full py-[7px] justify-between items-center">
      <section className="flex items-start gap-[7px]">
        <div
          className={`w-S h-S rounded-[3px] bg-[#F92E8F] ${
            color && colorVariants[color as keyof typeof colorVariants]
          }`}
        ></div>

        <span className="text-[#0E0E0E] text-xs font-normal">{name}</span>
      </section>
      <section className="flex items-center gap-[70px]">
        <div className="flex w-[70px] px-2.5 justify-center items-center gap-2.5 text-xs font-normal text-[#0E0E0E]">
          <MembersThumb members={members} />
        </div>
        <ListItemTitle title="۶ آبان" />
        <ListItemTitle title={<Icon icon="flag" size={16} color="#FA5252" />} />
        <ListItemTitle
          title={<Icon icon="paragraph" size={16} color="#BDC0C6" />}
        />
      </section>
    </div>
  );
};

export default ListItem;
