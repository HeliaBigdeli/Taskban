interface IWorkSpacesItemProps {
  color: string;
  name:string
}
const WorkSpacesItem: React.FC<IWorkSpacesItemProps> = ({
  color,
  name
}): JSX.Element => {
  return (
    <div
      className="flex w-[200px] h-20 py-[26px] pr-[71px] pl-[67px] items-center rounded-2xl shadow-taskColumn text-white text-center text-base font-extrabold"
      style={{
        background: `${color}`,
      }}
    >
      {name}
    </div>
  );
};

export default WorkSpacesItem;
