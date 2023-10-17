import list from "./list";
import styles from "./style.module.css";
import React from "react";

interface IProps {
  color?: string;
  icon: string | undefined;
  size?: number;
  style?: {};
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Icon = React.forwardRef(
  (props: IProps, ref: React.LegacyRef<HTMLSpanElement> | undefined) => {
    return (
      <span
        ref={ref}
        className={`${styles.inlineBlock} ${props.className}`}
        style={props.style}
        onClick={props.onClick}
      >
        {list[`${props.icon}`](
          props.color ? props.color : "#323232",
          props.size ? props.size : 24
        )}
      </span>
    );
  }
);

export default Icon;
