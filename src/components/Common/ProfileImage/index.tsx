import colors from "../ColorPicker/colors";
import Icon from "../Icon";

interface IProps {
  img?: string;
  firstName: string;
  lastName: string;
  size: number;
  nameColor?: boolean;
  multi?: boolean;
}

const ProfileImage: React.FC<IProps> = ({
  img,
  firstName,
  lastName,
  size,
  multi = false,
  nameColor = false,
}): JSX.Element => {
  const max = 12;
  const min = 0;
  const randomColor =
    colors[Math.floor(Math.random() * (max - min + 1) + min)].code;
  const colorDetails = {
    mainColor: randomColor,
    paleColor: randomColor + "80",
  };

  const firstLettersOfName: string =
    firstName?.charAt(0).toUpperCase() + lastName?.charAt(0).toUpperCase();

  return (
    <>
      {img ? (
        <div className="relative z-20 flex items-center justify-center">
          <img
            src={img}
            alt={firstLettersOfName}
            className={`rounded-full flex justify-center items-center text-xs z-10 ${
              multi ? "ml-6" : ""
            }`}
            style={{ width: size + "px", height: size + "px" }}
          />
          {multi && (
            <div
              className={`absolute right-7 border-dashed border-2 rounded-full border-[#c1c1c1] w-[${size}px] h-[${size}px] flex justify-center items-center`}
            >
              <Icon icon="user_add" color="#c1c1c1" />
            </div>
          )}
        </div>
      ) : (
        <div className="relative z-20 flex items-center justify-center">
          <div
            className={`rounded-full p-1 flex justify-center items-center text-xs z-10 ${
              multi ? "ml-6" : ""
            }`}
            style={{
              zIndex: 10,
              backgroundColor: colorDetails.paleColor,
              width: size + "px",
              height: size + "px",
              color: nameColor ? colorDetails.mainColor : "black",
              fontSize: size / 3 + "px",
            }}
          >
            {firstLettersOfName}
          </div>
          {multi && (
            <div
              className={`absolute right-7 border-dashed border-2 rounded-full border-[#c1c1c1] w-[${size}px] h-[${size}px] flex justify-center items-center`}
            >
              <Icon icon="user_add" color="#c1c1c1" />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProfileImage;
