interface IUserIconProps {
  left?: number;
}
const UserIcon: React.FC<IUserIconProps> = ({ left }): JSX.Element => {
  return (
    <div
      className={`pt-[9px] px-XS pb-[7px] bg-indigo_secondary rounded-full text-xs font-normal text-indigo_primary  ${
        left && "absolute"
      }`}
      style={{ left: `${left}px` }}
    >
      NM
    </div>
  );
};

export default UserIcon;
