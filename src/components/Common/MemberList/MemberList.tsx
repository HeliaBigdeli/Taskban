import MemberRow from "./MemberRow/MemberRow";
import memberPhoto from "../../../assets/images/member.png";

const MemberList: React.FC = (): JSX.Element => {
  const members = [
    {
      img: memberPhoto,
      email: "helya@gmail.com",
      role: "workspace owner",
      firstName: "Helya",
      lastName: "Bigdeli",
    },
    {
      img: "",
      email: "sararahimi@gmail.com",
      role: "",
      firstName: "Sara",
      lastName: "Rahimi",
    },
  ];

  return (
    <>
      <span className="text-sm text-[#7D828C] flex flex-row-reverse">
        اشتراک‌گذاشته شده با
      </span>
      <ul className="flex flex-col gap-XS">
        {members.map((item) => (
          <MemberRow
            key={item.email}
            role={item.role}
            email={item.email}
            img={item.img}
            firstName={item.firstName}
            lastName={item.lastName}
          />
        ))}
      </ul>
    </>
  );
};

export default MemberList;
