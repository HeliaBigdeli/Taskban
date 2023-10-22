import { useEffect } from "react";
import MemberRow from "./MemberRow/MemberRow";

interface IMember {
  id: number;
  user: {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    thumbnail: string;
  };
}

interface IProps {
  members: IMember[];
}

const MemberList: React.FC= (): JSX.Element => {
  useEffect(() => {
    // console.log(members);
  }, []);
  return (
    <>
      <span className="text-sm text-[#7D828C] flex flex-row-reverse">
        اشتراک‌گذاشته شده با
      </span>
      <ul className="flex flex-col gap-XS">
        {/* {members?.map((item) => (
          <MemberRow
            key={item.id}
            role={item.role}
            email={item.email}
            img={item.img}
            firstName={item.firstName}
            lastName={item.lastName}
          />
        ))} */}
      </ul>
    </>
  );
};

export default MemberList;
