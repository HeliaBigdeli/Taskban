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
  color = "#C1C1C1",
  size = 30,
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
