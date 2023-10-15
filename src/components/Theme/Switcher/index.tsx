import Icon from "../../Common/Icon";

interface IProps {
  isOn;
  labelOn;
  labelOff;
  onToggle;
}

const Switcher: React.FC<IProps> = ({
  isOn,
  labelOn,
  labelOff,
  onToggle,
  ...props
}) => {
  const handleToggle = () => {
    onToggle(!isOn);
  };

  return (
    <div>
      {/*<span className="flex items-center justify-end w-[56px] bg-lightgray_200 rounded-md cursor-pointer">
        <Icon icon="sun" color="#818181" className="bg-white m-1 rounded-md" />
  </span>*/}

      <label className="toggle-label">
        <input
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
          {...props}
        />
        <br />
        <span className="toggle-label-text">{isOn ? labelOn : labelOff}</span>
      </label>
    </div>
  );
};

export default Switcher;
