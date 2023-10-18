import React, { useEffect, useState } from "react";
import API_URL from "../../../../constants/api.url";
import useAxios from "../../../../hooks/useAxios";
import Dropdown from "../../Dropdown";
import DropdownItem from "../../Dropdown/DropdownItem";
import { useNavigate, useParams } from "react-router-dom";
import ProjectModal from "../../../Dashboard/ProjectModal";
import { projectUpdate } from "../../../../features/updateSlice";
import { useSelector } from "react-redux";

interface IProps {
  id: number;
  name: string;
  color: string;
}

const ListItem: React.FC<IProps> = ({ id, name, color }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [response, error, loading, fetcher] = useAxios();
  const navigate = useNavigate();
  const params = useParams();
  const [projectModal, setProjectModal] = useState<boolean>(false);
  const update = useSelector(projectUpdate);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    getProjects();
  };

  const getProjects = async () => {
    if (!isOpen) {
      fetcher("get", `${API_URL.WorkSpaces}${id}/${API_URL.Projects}`);
    }
    navigate(
      `${API_URL.WorkSpaces}${id}/${API_URL.Projects}`
    );
  };

  const handleBoards = (project_id) => {
    navigate(
      `${API_URL.WorkSpaces}${id}/${API_URL.Projects}${project_id}/${API_URL.Boards}`
    );
  };

  useEffect(() => {
    getProjects();
  }, [update]);

  const handleAddProject = () => {
    setProjectModal(!projectModal);
  };
  const handleEditWsName = () => {};
  const handleeditWsColor = () => {};
  const handleCopyWsLink = () => {};
  const handleWsRemove = () => {};
  const HandleWsShare = () => {};

  const handleAddProTask = () => {};
  const handleEditProName = () => {};
  const handleCopyProLink = () => {};
  const handleProRemove = () => {};
  const HandleProShare = () => {};

  return (
    <li>
      <div className="flex justify-between items-center flex-row-reverse p-1 h-[36px] mt-S">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleAccordion}
        >
          {name}
          <span
            className={`w-[20px] h-[20px] rounded-md ml-XS inline-block`}
            style={{ backgroundColor: color }}
          ></span>
        </div>
        <Dropdown type="icon" icon={{ icon: "dots" }}>
          <DropdownItem
            title="ساختن پروژه جدید"
            hasIcon={true}
            icon={{ icon: "plus" }}
            onClick={handleAddProject}
          />
          <DropdownItem
            title="ویرایش نام ورک اسپیس"
            hasIcon={true}
            icon={{ icon: "edit" }}
            onClick={handleEditWsName}
          />
          <DropdownItem
            title="ویرایش رنگ"
            hasIcon={true}
            icon={{ icon: "color" }}
            onClick={handleeditWsColor}
          />
          <DropdownItem
            title="کپی لینک"
            hasIcon={true}
            icon={{ icon: "link" }}
            onClick={handleCopyWsLink}
          />
          <DropdownItem
            title="حذف"
            hasIcon={true}
            icon={{ icon: "trash", color: "red" }}
            color="red"
            onClick={handleWsRemove}
          />
          <DropdownItem
            title="اشتراک گذاری"
            hasIcon={true}
            icon={{ icon: "share" }}
            isButton={true}
            onClick={HandleWsShare}
          />
        </Dropdown>
      </div>
      {response && (
        <ul className={`${isOpen ? "block" : "hidden"}`}>
          {response?.map((project) => (
            <li
              style={{
                backgroundColor: project.id === params.pid ? "#D0EBFF" : "",
              }}
              key={project.id}
              className="flex rounded-md justify-between items-center flex-row-reverse p-[4px] h-[36px] pr-[30px] my-S"
            >
              <p
                onClick={() => handleBoards(project.id)}
                className="flex justify-between items-center cursor-pointer"
              >
                {project.name}
              </p>
              <Dropdown type="icon" icon={{ icon: "dots" }}>
                <DropdownItem
                  onClick={handleAddProTask}
                  title="ساختن تسک جدید"
                  hasIcon={true}
                  icon={{ icon: "plus" }}
                />
                <DropdownItem
                  onClick={handleEditProName}
                  title="ویرایش نام پروژه"
                  hasIcon={true}
                  icon={{ icon: "edit" }}
                />
                <DropdownItem
                  onClick={handleCopyProLink}
                  title="کپی لینک"
                  hasIcon={true}
                  icon={{ icon: "link" }}
                />
                <DropdownItem
                  onClick={handleProRemove}
                  title="حذف"
                  hasIcon={true}
                  icon={{ icon: "trash", color: "red" }}
                  color="red"
                />
                <DropdownItem
                  onClick={HandleProShare}
                  title="اشتراک گذاری"
                  hasIcon={true}
                  icon={{ icon: "share" }}
                  isButton={true}
                />
              </Dropdown>
            </li>
          ))}
        </ul>
      )}
      {projectModal && (
        <ProjectModal modal={projectModal} setModal={handleAddProject} />
      )}
    </li>
  );
};
export default ListItem;
