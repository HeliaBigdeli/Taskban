import { useEffect, useState } from "react";
import colors from "../ColorPicker/colors";

interface IProps {
  img?: string;
  firstName: string;
  lastName: string;
  size?: number;
  nameColor?: boolean;
  showName?: boolean;
}

const ProfileImage: React.FC<IProps> = ({
  img,
  firstName,
  lastName,
  size = 32,
  nameColor = false,
  showName = false,
}): JSX.Element => {
  const [nameLetters, setNameLetters] = useState<string>("");

  const randomColor = () => {
    const max = 12;
    const min = 0;
    const randomColor =
      colors[Math.floor(Math.random() * (max - min + 1) + min)].code;
    const colorDetails = {
      mainColor: randomColor,
      paleColor: randomColor,
    };

    return colorDetails;
  };

  useEffect(() => {
    setNameLetters(
      firstName?.charAt(0).toUpperCase() + lastName?.charAt(0).toUpperCase()
    );
    randomColor();
  }, []);

  return (
    <div className="flex flex-row-reverse items-center">
      <div
        className="rounded-full p-1 flex justify-center items-center bg-cover"
        style={{
          backgroundImage: `url(${img})`,
          zIndex: 10,
          backgroundColor: randomColor().paleColor,
          width: size + "px",
          height: size + "px",
          color: nameColor ? randomColor().paleColor : "#222",
          fontSize: size / 2.5 + "px",
        }}
      >
        {img ? "" : nameLetters}
      </div>
      {showName && (
        <span className="mr-1 font-bold">
          {!nameLetters ? (
            "بدون نام"
          ) : (
            <p>
              {firstName} {lastName}
            </p>
          )}
        </span>
      )}
    </div>
  );
};

export default ProfileImage;