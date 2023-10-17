import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../../../../features/workspacesSlice";
import { store } from "../../../../../app/store";

interface IWorkSpacesItemProps {
  color: string;
  name: string;
  id: number;
  workspace_id: number;
}
const WorkSpacesItem: React.FC<IWorkSpacesItemProps> = ({
  color,
  name,
  id,
  workspace_id,
}): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(update({ workspace_id, project_id: id, workspace_name: name }));
    navigate("/board");
  };
  return (
    <div
      onClick={handleClick}
      className="flex w-[200px] cursor-pointer h-20 py-[26px] pr-[71px] pl-[67px] items-center rounded-2xl shadow-taskColumn text-white text-center text-base font-extrabold"
      style={{
        background: `${color}`,
      }}
    >
      {name}
    </div>
  );
};

export default WorkSpacesItem;
