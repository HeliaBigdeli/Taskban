import { IComment } from "../../../../interfaces/comments";
import { IMember } from "../../../../interfaces/members";
import { members_thumb } from "../../../../interfaces/members_thumb";
import ProfileImage from "../../../Common/ProfileImage";
interface ICommentProps extends IComment {
  first_name: string;
  last_name:string
}
const Comments: React.FC<ICommentProps> = ({
  author,
  text,
  last_name,
  first_name,
}): JSX.Element => {
  return (
    <section className="flex shrink-0  gap-2 p-3">
      <div className="p-S flex flex-col items-end gap-XS rounded-xl border border-[#F4F4F4]">
        <div className="text-[#aaa] text-xs font-normal">
          <span className="text-brand-primary font-extrabold  text-base">
            شما
          </span>
          &nbsp;&nbsp;کامنت گذاشتید
        </div>
        <div className="text-black font-normal text-xs">{text}</div>
      </div>
      <div>
        <ProfileImage firstName={first_name} lastName={last_name} />
      </div>
    </section>
  );
};

export default Comments;
