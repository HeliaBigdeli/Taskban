import Checkmark from "./Checkmark";
import Tag from "../../../../Dashboard/Tag";
import { useState } from "react";
import More from "./More";
import Icon from "../../../../Common/Icon";

interface ITaskCardProps {
  // image?: string;
  // projectName: string;
  // profile: string;
  // hasDescription: boolean;
  // taskTitle: string;
  // checklist: string;
  // time: string;
  // tag: string;
}
const TaskCard: React.FC<ITaskCardProps> = (): JSX.Element => {
  const [isShown, setIsShown] = useState<boolean>(false);
  return (
    <article
      className="flex w-[249px] p-S flex-col items-end gap-S rounded-2xl bg-white shadow-taskCard"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img
        src="https://s3-alpha-sig.figma.com/img/1ff2/08fc/84a00a92e59b4eaa4703234f3437659c?Expires=1697414400&Signature=NdEELGlUgpVKt28LTTA0pvyNGP7MiAZu355SZHwXHjF2wSinKpN7VyExDP8R5TarldS-jxELVf-Js0MrSBgdpAN1bcEoHSiIUIgxIm~R2FvMO5h9gwwOKAjyT7Au86W8qUuZT1v41DyAqtlUHZJ37lh1ZPCekY99lrbdjs~FJUb0AQdTR4lLmRTXXWxdLFktqJjO2Y5ReNTUUfuWuSe07~rR5qvkTo2tB11u868UBDHjWZiU7nvYzvN2iWQ6ZeyiFs~RS8oGZ7oU2DkdjF1tjzJv41mFXf7UXh91UdqyY-m3Pf-yqfc90oP~zuh00RrSKEJgkgMA8KHT8DTV-Vum4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="task-img"
        className={`h-[134px] self-stretch rounded-[4px] bg-lightgray  bg-cover bg-no-repeat`}
      />
      <section className="flex flex-col items-end gap-[9px] self-stretch">
        <span className="text-[#534D60] text-xs leading-normal font-normal">
          اسم لیست
        </span>
        <div className="flex justify-end items-center gap-1 self-stretch">
          <Icon icon="paragraph" size={14} color="#BDC0C6" />
          <span className="text-[#0E0E0E] text-xs leading-normal font-normal">
            .این یک تیتر برای این تسک است
          </span>
        </div>
      </section>
      <section className="flex items-start gap-XS">
        <Checkmark />
        <div className="flex justify-end items-center gap-0.5">
          <span className="text-[#343434] text-xs leading-normal font-normal">
            ۵ مهر - فردا
          </span>
          <Icon icon="flag" size={14} color="#FA5252" />
        </div>
      </section>
      <section className="flex items-start gap-XS">
        <Tag color="grape" text="پروژه" />
        <Tag color="blue" text="درس" />
      </section>
      <More isShown={isShown} />
    </article>
  );
};
export default TaskCard;
