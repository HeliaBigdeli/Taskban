import list from "./list";
import styles from "./style.module.css";

interface IProps {
  color?: string;
  icon: string | undefined;
  size?: number;
  style?: {};
  className?: string;
}

const Icon: React.FC<IProps> = ({
  icon,
  color = "#323232",
  size = 24,
  style,
  className,
}) => {
  return (
    <span className={`${styles.inlineBlock} ${className}`} style={style}>
      {list[`${icon}`](color, size)}
    </span>
  );
};

export default Icon;
