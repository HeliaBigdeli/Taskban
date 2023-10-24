import { IComment } from "../../../../interfaces/comments";

const Tag: React.FC<IComment> = ({ author, text }): JSX.Element => {
  return (
    <section className="flex shrink-0 ">
      <div>{author}</div>
      <div className="p-S flex flex-col items-end gap-XS rounded-xl border border-[#F4F4F4]">
        <div>"#FFFFFF"</div>
        <div className="text-black font-normal text-xs">{text}</div>
      </div>
    </section>
  );
};

export default Tag;
