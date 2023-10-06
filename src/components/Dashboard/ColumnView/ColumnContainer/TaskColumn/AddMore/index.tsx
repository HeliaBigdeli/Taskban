import Icon from "../../../../../Common/Icon";

interface IAddMoreProps {
  isShown: boolean;
}
const AddMore: React.FC<IAddMoreProps> = ({isShown}): JSX.Element => {
  return (
    <section
      className={`${
        !isShown ? "opacity-0" : "opacity-100"
      } flex items-center gap-1 transition-all`}
    >
      <Icon size={24} icon="plus" />
      <Icon size={20} icon="dots" />
    </section>
  );
};
export default AddMore;
