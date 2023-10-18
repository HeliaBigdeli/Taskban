import { useLocation, useNavigate } from "react-router-dom";
import API_URL from "../../../../../constants/api.url";

interface IWorkSpacesItemProps {
  color: string;
  name: string;
  id: number;
  workspace_id: number,
}
const WorkSpacesItem: React.FC<IWorkSpacesItemProps> = ({
  color,
  name,
  id,
  workspace_id
}): JSX.Element => {
  const navigate = useNavigate();  

  const handleClick = () => {
    navigate(`${workspace_id}/${API_URL.Projects}${id}/${API_URL.Boards}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex justify-center w-[200px] cursor-pointer h-20 py-[26px] pr-[71px] pl-[67px] items-center rounded-2xl shadow-taskColumn text-white text-base font-extrabold"
      style={{ background: `${color}` }}
    >
      {name}
    </div>
  );
};

export default WorkSpacesItem;
