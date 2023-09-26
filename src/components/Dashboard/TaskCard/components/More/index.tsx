import Icon from "../../../../Common/Icon";

interface IMoreProps {
  isShown: boolean;
}
const More: React.FC<IMoreProps> = ({ isShown }): JSX.Element => {
  return (
    <div
      className={`${!isShown ? "h-0" : "h-10"} overflow-hidden transition-all `}
    >
      <hr className="w-[217px] h-[1px] bg-[#EFF0F0] mb-S" />
      <section className="flex justify-between items-center self-stretch ">
        <Icon size={20} icon="dots" />
        <div className="flex w-4 h-4 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M6.85667 9.35167L10.0042 12.5L16.4 6.10417C15.0833 3.94583 12.7133 2.5 10 2.5C5.8575 2.5 2.5 5.8575 2.5 10C2.5 14.1425 5.8575 17.5 10 17.5C13.86 17.5 17.0358 14.5833 17.4508 10.8333"
              stroke="#323232"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};
export default More;
