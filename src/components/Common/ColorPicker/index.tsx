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

const ColorPicker: React.FC<IProps> = ({ onClick, hasDisableIcon, ref }) => {
  const [selected, setSelected] = useState(true);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClick({
      name: e.currentTarget.dataset.name,
      code: e.currentTarget.dataset.code,
    });
    setSelected(!selected);
    if (ref?.current) {
      ref.current.style.backgroundColor = e.currentTarget.dataset.code!;
    }
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
              backgroundColor: color.code,
              display: "inline-block",
              borderRadius: 100,
              margin: 4,
              cursor: "pointer",
              width: selected ? 20 : 30,
              height: selected ? 20 : 30,
            }}
          ></div>
        );
      })}
    </>
  );
};

export default ColorPicker;
