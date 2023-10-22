import { ITask } from "../../../../../interfaces/task";
import { dateConvert } from "../../../../../utils/dateConvert";
import Icon from "../../../../Common/Icon";
import MembersThumb from "../../../../Common/MembersThumb";
import Description from "./Description";
import ListItemTitle from "./ListItemTitle";

interface IListItemProps extends ITask {
  boardId: number;
  boardTitle: string;
}

const ListItem: React.FC<IListItemProps> = ({
  name,
  priority,
  deadline,
  members,
  id,
  boardId,
  boardTitle,
}): JSX.Element => {
  const flagColor = {
    1: "#82C91E",
    2: "#15AABF",
    3: "#FAB005",
    4: "#FA5252",
  };
  const { month, day } = dateConvert(deadline)

  return (
    <div className="flex w-full py-[7px] justify-between items-center">
      <section className="flex items-start gap-[7px] mr-6">
        <div className={`w-S h-S rounded-[3px] bg-[#F92E8F] `}></div>

        <span className="text-[#0E0E0E] text-xs font-normal">{name}</span>
      </section>
      <section className="flex items-center gap-[70px]">
        <div className="flex w-[70px] px-2.5 justify-center items-center gap-2.5 text-xs font-normal text-[#0E0E0E]">
          <MembersThumb members={members} />
        </div>
        <ListItemTitle
          title={
            <>
              {day}
              &nbsp;
              {month}
            </>
          }
        />
        <ListItemTitle
          title={<Icon icon="flag" size={16} color={flagColor[priority]} />}
        />
        <Description taskId={id} boardId={boardId} boardTitle={boardTitle} />
      </section>
    </div>
  );
};

export default ListItem;
