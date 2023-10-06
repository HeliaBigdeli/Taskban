import Icon from "../Icon";
import colors from "./colors";

interface IColor {
  [key: string]: string | undefined;
}
interface IProps {
  onClick: (color: IColor) => void;
  hasDisableIcon?: boolean;
  handleDisableClick?: (e: React.MouseEvent<HTMLElement>) => void;
  selected?: string | undefined;  
}

const ColorPicker: React.FC<IProps> = ({
  onClick,
  hasDisableIcon = false,
  handleDisableClick,
  selected,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClick({
      name: e.currentTarget.dataset.name,
      code: e.currentTarget.dataset.code,
    });
  };

  return (
    <>
      {hasDisableIcon && (
        <div className="flex items-center" onClick={handleDisableClick}>
          <Icon
            icon="disable"
            size={20}
            style={{ margin: 4, cursor: "pointer" }}
            data-code=""
            data-name=""
          />
        </div>
      )}
      {colors.map((color) => {
        return (
          <div
            onClick={handleClick}
            key={color.code}
            data-code={color.code}
            data-name={color.name}
            style={{
              backgroundColor: color.code === selected ? "white" : color.code,
              display: "inline-block",
              borderRadius: color.code === selected ? 12 : 8,
              margin: 2,
              cursor: "pointer",
              width: color.code === selected ? 28 : 22,
              height: color.code === selected ? 28 : 22,
              border:
              color.code === selected ? `solid 9px ${color.code}` : "none",
            }}
          ></div>
        );
      })}
    </>
  );
};

export default ColorPicker;
