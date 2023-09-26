import AddMore from "./AddMore";

// interface ITagProps {
//   color: string;
//   text: string;
// }
const TaskColumn: React.FC = (): JSX.Element => {
  return (
    <div className="flex w-[250px] py-XS px-12px justify-between items-center rounded-2xl border-2 border-[#FD7E14] shadow-taskColumn">
      <AddMore />
      <section className="flex items-center gap-1 ">
        <div className="flex pt-0.5 px-1 flex-col justify-center items-center gap-2.5 rounded-[100px] bg-[#F4F4F4]">
          <span className="text-black text-xs font-normal">۰</span>
        </div>
        <span className="text-black text-base font-medium">In progress</span>
      </section>
    </div>
  );
};

export default TaskColumn;
