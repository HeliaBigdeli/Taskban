import React, { useEffect, useState } from "react";
import API_URL from "../../../../constants/api.url";
import useAxios from "../../../../hooks/useAxios";
import Dropdown from "../../Dropdown";
import DropdownItem from "../../Dropdown/DropdownItem";
import { useNavigate, useParams } from "react-router-dom";
import ProjectModal from "../../../Dashboard/ProjectModal";
import { addProject, projectUpdate } from "../../../../features/updateSlice";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../Form/Button";

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
    if (!isOpen && !params.pid) {
      fetcher("get", `${API_URL.WorkSpaces}${id}/${API_URL.Projects}`);
      navigate(`${API_URL.WorkSpaces}${id}/${API_URL.Projects}`);
    }
  };

  const handleBoards = (project_id) => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    })
    navigate(
      `${API_URL.WorkSpaces}${id}/${API_URL.Projects}${project_id}/${API_URL.Boards}`
    );
  };

  const handleProjectModal = () => {
    setProjectModal(!projectModal);
  };

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

  useEffect(() => {
    setIsOpen(false);
    getProjects();
  }, [update]);

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
      {isOpen && (
        <ul>
          {response?.map((project) => (
            <li
              style={{
                backgroundColor: project.id == params.pid ? "#D0EBFF" : "",
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
          {!response.length && (
            <Button
              text="ساختن پروژه جدید"
              onClick={handleProjectModal}
              type="button"
              className="text-brand-primary h-L text-sm font-bold leading-normal self-stretch rounded-md border border-brand-primary mb-L w-full"
            />
          )}
        </ul>
      )}

      {projectModal && (
        <ProjectModal modal={projectModal} setModal={handleAddProject} />
      )}
    </li>
  );
};
export default ListItem;
