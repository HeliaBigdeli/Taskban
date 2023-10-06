import colors from "../ColorPicker/colors";

interface IProps {
  img?: string;
  firstName: string;
  lastName: string;
  size: number;
  nameColor?: boolean;
}

const ProfileImage: React.FC<IProps> = ({
  img,
  firstName,
  lastName,
  size,
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
        <img
          src={img}
          alt={firstLettersOfName}
          className={`rounded-full flex justify-center items-center text-xs`}
          style={{ width: size + "px", height: size + "px" }}
        />
      ) : (
          <div
            className={`rounded-full px-1 py-1 flex justify-center items-center text-xs relative`}
            style={{
              zIndex: 10,
              backgroundColor: 'green',
              width: size + "px",
              height: size + "px",
              color: nameColor ? colorDetails.mainColor : "black",
              fontSize: size / 3 + "px",
            }}
          >
             <div
            className={`rounded-full absolute right-3`}
            style={{
              zIndex: -10,
              backgroundColor: colorDetails.mainColor,
              width: size + "px",
              height: size + "px",
              color: nameColor ? colorDetails.mainColor : "black",
              fontSize: size / 3 + "px",
            }}
          >
          </div>
            {firstLettersOfName}
          </div>
      )}
    </>
  );
};

export default ProfileImage;
