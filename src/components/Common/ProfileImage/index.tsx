import colors from "../ColorPicker/colors";

interface IProps {
  img?: string;
  firstName: string;
  lastName: string;
}

const ProfileImage: React.FC<IProps> = ({
  img,
  firstName,
  lastName,
}): JSX.Element => {
  const max = 12;
  const min = 0;
  const randomColor: string =
    colors[Math.floor(Math.random() * (max - min + 1) + min)].code + "b3";

  const firstLettersOfName: string =
    firstName?.charAt(0).toUpperCase() + lastName?.charAt(0).toUpperCase();

  return (
    <>
      {img ? (
        <img
          src={img}
          alt={firstLettersOfName}
          className={`rounded-full w-[35px] h-[38px] flex justify-center items-center text-xs`}
        />
      ) : (
        <div
          className={`rounded-full w-[34px] h-[37px] px-1 py-1 flex justify-center items-center text-xs`}
          style={{ backgroundColor: randomColor }}
        >
          {firstLettersOfName}
        </div>
      )}
    </>
  );
};

export default ProfileImage;
