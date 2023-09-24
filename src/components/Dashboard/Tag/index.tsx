interface ITagProps {
  color: string;
  text: string;
}
const Tag: React.FC<ITagProps> = ({ color, text }): JSX.Element => {
  return (
    <div
      className={`inline-flex h-M px-XS justify-center items-center rounded-[14px] bg-${color}-secondary`}
    >
      <span
        className={` text-${color}-primary text-xs leading-normal font-extrabold`}
      >
        {text}
      </span>
    </div>
  );
};

export default Tag;
