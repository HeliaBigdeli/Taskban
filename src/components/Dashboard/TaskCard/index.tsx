import Description from "./components/Description";
import Checkmark from "./components/Checkmark";
import Flag from "./components/Flag";
import Tag from "../Tag";

const TaskCard: React.FC = (): JSX.Element => {
  return (
    <article className="flex w-[249px] p-S flex-col items-end gap-S rounded-2xl bg-white shadow-task">
      <div
        className={`h-[134px] self-stretch rounded-[4px] bg-[url("../../../../assets/images/Rectangle 3.png")]`}
      />
      <section className="flex flex-col items-end gap-[9px] self-stretch">
        <span className="text-[#534D60] text-xs leading-normal font-normal">
          اسم لیست
        </span>
        <div className="flex justify-end items-center gap-1 self-stretch">
          <span className="text-[#0E0E0E] text-xs leading-normal font-normal">
            این یک تیتر برای این تسک است.
          </span>
          <Description />
        </div>
      </section>
      <section className="flex items-start gap-XS">
        <div className="flex justify-end items-center gap-0.5">
          <span className="color-[#BDC0C6] text-xs leading-normal font-normal">
            ۲ / ۱۲
          </span>
          <Checkmark />
        </div>
        <div className="flex justify-end items-center gap-0.5">
          <span className="text-[#343434] text-xs leading-normal font-normal">
            ۵ مهر - فردا
          </span>
          <Flag />
        </div>
      </section>
      <section className="flex items-start gap-XS">
        <Tag color="blue" text="درس" />
        <Tag color="gape" text="پروژه" />
      </section>
    </article>
  );
};
export default TaskCard;
