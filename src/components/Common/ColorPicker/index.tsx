import { useState } from "react";
import Icon from "../Icon";
import colors from "./colors";

interface IColor {
  [key: string]: string | undefined;
}
interface IProps {
  onClick: (color: IColor) => void;
  hasDisableIcon: boolean;
  ref?: React.RefObject<HTMLDivElement>;
}

const ColorPicker: React.FC<IProps> = ({ onClick, hasDisableIcon }) => {
  const [selected, setSelected] = useState<string | undefined>("");
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClick({
      name: e.currentTarget.dataset.name,
      code: e.currentTarget.dataset.code,
    });
    setSelected(e.currentTarget.dataset.code);   
  };

  return (
    <>
      {hasDisableIcon && (
        <Icon
          icon="disable"
          size={20}
          style={{ margin: 4, cursor: "pointer" }}
          data-code=""
          data-name=""
        />
      )}
      {colors.map((color) => {
        return (
          <div
            onClick={handleClick}
            key={color.code}
            data-code={color.code}
            data-name={color.name}
            style={{
              backgroundColor: color.code === selected ? 'white' : color.code,
              display: "inline-block",
              borderRadius: 50,
              margin: 2,
              cursor: "pointer",
              width: 22,
              height: 22,
              border: color.code === selected ? `solid 6px ${color.code}` : 'none'
            }}
          ></div>
        );
      })}
    </>
  );
};

export default ColorPicker;
