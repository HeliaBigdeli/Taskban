import Icon from "../../Common/Icon";

const Switcher: React.FC = () => {
  return (
    <span className="flex items-center justify-end w-[56px] bg-lightgray_200 rounded-md cursor-pointer">
      <Icon icon="sun" color="#818181" className="bg-white m-1 rounded-md"/>
    </span>
  );
};

export default Switcher;
