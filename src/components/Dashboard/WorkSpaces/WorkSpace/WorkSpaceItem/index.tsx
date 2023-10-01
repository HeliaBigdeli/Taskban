interface IWorkSpacesItemProps {
  color: string;
}
const WorkSpacesItem: React.FC<IWorkSpacesItemProps> = ({
  color,
}): JSX.Element => {
  return (
    <div
      className="flex w-[200px] h-20 py-[26px] pr-[71px] pl-[67px] items-center rounded-2xl shadow-taskColumn text-white text-center text-base font-extrabold"
      style={{
        background: `${color}`,
      }}
    >
      پروژه اول
    </div>
  );
};

export default WorkSpacesItem;
