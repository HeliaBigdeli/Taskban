import Icon from "../../../../../Common/Icon";

interface IMoreProps {
  isShown: boolean;
}
const More: React.FC<IMoreProps> = ({ isShown }): JSX.Element => {
  return (
    <div
      className={`${!isShown ? "h-0" : "h-10"} overflow-hidden transition-all `}
    >
      <hr className="w-[217px] h-[1px] bg-[#EFF0F0] mb-S"/>
      <section className="flex justify-between items-center self-stretch ">
          <Icon size={20} icon="dots"/>
        <div className="flex w-4 h-4 justify-center items-center">
          <Icon size={20} icon="check_circle"/>
        </div>
      </section>
    </div>
  );
};
export default More;
