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
      <img src="https://s3-alpha-sig.figma.com/img/1ff2/08fc/84a00a92e59b4eaa4703234f3437659c?Expires=1696204800&Signature=h3dd-SZzpNulq5-GqW4g1xpgy2YXbu8Sa5gMjersJNEZ-mny0X3LABehTBaXJjCLOZt4fGojEb-dx69utNccQxdEKa5M7smLfna7Pg3kmYmHVZSn-D1WF0q-v2EGbv3NyZlEv0CyVZN-DvskfxtQbcxrPcSqgeBxno8BN7GpFxRojBmewYHHy2ol2L0AIX4bu0H9d1J1Z2SZEp2lCsqg5~bah8cB1QhF-08mmWxnbR5UVQ2VvcKjMNeJws7kbVFTWI0QhiZriiWGxVQXZvmFJ0CTfa4S4wupNDaai1Rz2VYg9718FLAjnSHvj4ZQIQ6i7-ukylsZ86Zr7ZcnF7poEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
