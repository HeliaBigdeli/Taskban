import Icon from "../Icon";
import colors from "./colors";

interface IColor {
  [key: string]: string | undefined;
}

interface IProps {
  onClick: (color: IColor) => void;
}

const ColorPicker: React.FC<IProps> = ({ onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClick({
      name: e.currentTarget.dataset.name,
      code: e.currentTarget.dataset.code,
    });
  };

  return (
    <>
      {colors.map((color) => {
        return (
          <div
            onClick={handleClick}
            key={color.code}
            data-code={color.code}
            data-name={color.name}
            style={{
              backgroundColor: color.code,
              width: 20,
              height: 20,
              display: "inline-block",
              borderRadius: 8,
              margin: 4,
              cursor: "pointer",
            }}
          ></div>
        );
      })}
      <Icon icon="disable" size={20} style={{ margin: 4, cursor: "pointer" }} data-code="" data-name=""/>
    </>
  );
};

export default ColorPicker;
