import Button from "../../Form/Button";
import ProfileImage from "../../ProfileImage";

interface IProps {
  role: string;
  email: string;
  img?: string;
  firstName: string;
  lastName: string;
}

const MemberRow: React.FC<IProps> = ({
  role,
  email,
  img,
  firstName,
  lastName,
}): JSX.Element => {
  const handleClick = () => {};

  return (
    <>
      <div className="flex justify-between items-center mt-1 h-[37px]">
        {role === "workspace owner" ? (
          <Button
            text="دسترسی کامل"
            type="button"
            onClick={handleClick}
            className="h-[30px] rounded-md border-[1px] px-2 pt-[5px] pb-1 gap-[10px] hover:bg-[#E9EBF0] border-[#E9EBF0] text-xs"
          />
        ) : (
          <Button
            text="دسترسی کامل"
            type="button"
            onClick={handleClick}
            className="h-[30px] rounded-md border-[1px] px-2 pt-[5px] pb-1 gap-[10px] hover:bg-[#E9EBF0] border-[#E9EBF0] text-xs"
          />
        )}

        <div className="flex gap-[12px]">
          {role === "workspace owner" ? (
            <span className="h-[29px] rounded-md px-2 py-1 gap-[10px] bg-blue-secondary text-xs text-blue-primary text-center mt-1">
              workspace owner
            </span>
          ) : (
            ""
          )}
          <span className="text-sm text-black mt-[5px]">
            {role === "workspace owner" ? "من" : email}
          </span>
          <ProfileImage
            img={img}
            firstName={firstName}
            lastName={lastName}
            size={35}
          />
        </div>
      </div>
    </>
  );
};

export default MemberRow;