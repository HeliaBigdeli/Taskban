import React, { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import Dropdown from "../../Dropdown";
import DropdownItem from "../../Dropdown/DropdownItem";
import { useNavigate, useParams } from "react-router-dom";
import ProjectModal from "../../../Dashboard/ProjectModal";
import { createPortal } from "react-dom";
import NameEdit from "./modals/NameEdit";
import { projectUpdate } from "../../../../features/updateSlice";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../Form/Button";
import ColorEdit from "./modals/ColorEdit";
import { toast } from "react-toastify";
import AlertModal from "./modals/AlertModal";
import { addWorkSpace } from "../../../../features/updateSlice";
import ShareModal from "../../../Dashboard/ShareModal";
import TaskModal from "../../../Dashboard/TaskModal";
import { workspaces, projects, boards } from "../../../../constants/url";

interface IProps {
  id: number;
  name: string;
  color: string;
}

const portals = document.getElementById("portals") as Element;

const ListItem: React.FC<IProps> = ({ id, name, color }): JSX.Element => {
  const [currentID, setCurrentID] = useState(0);
  const [listToggle, setListToggle] = useState(false);
  const [response, error, loading, fetcher] = useAxios();
  const [responseDelete, errorDel, loadingDel, fetcherDel] = useAxios();
  const params = useParams();
  const [projectModal, setProjectModal] = useState<boolean>(false);
  const [nameEdit, setNameEdit] = useState<boolean>(false);
  const [colorEdit, setColorEdit] = useState<boolean>(false);
  const [alert, setAlert] = useState(false);
  const [proAlert, setProAlert] = useState(false);
  const [share, setShare] = useState(false);
  const [newTask, setNewTask] = useState<boolean>(false);
  const [proNameEdit, setProNameEdit] = useState(false);

  const navigate = useNavigate();
  const update = useSelector(projectUpdate);
  const dispatch = useDispatch();

  const changeUrl = (path: string, id: number) => {
    switch (path) {
      case "workspace":
        return navigate(projects.gets({ wid: id }));
      case "project":
        return navigate(boards.gets({ wid: params.wid, pid: id }));
      default:
        return navigate(workspaces.gets());
    }
  };

  const toggleAccordion = () => {
    changeUrl("workspace", id);
    setListToggle(!listToggle);
  };

  const getProjects = async () => {
    fetcher("get", projects.gets({ wid: id }));
  };

  const handleProjectModal = () => {
    changeUrl("workspace", id);
    setProjectModal(!projectModal);
  };

  const handleAddProject = () => {
    setProjectModal(!projectModal);
  };
  const handleEditWsName = () => {
    setNameEdit(!nameEdit);
  };
  const handleeditWsColor = () => {
    setColorEdit(!colorEdit);
  };
  const handleCopyWsLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("لینک با موفقیت در کلیپ بورد کپی شد.");
  };
  const handleAlert = () => {
    setAlert(true);
  };
  const handleWsRemove = () => {
    fetcherDel("delete", workspaces.delete({ wid: id ? id : currentID }));
  };
  const HandleWsShare = () => {
    setShare(!share);
  };

  const handleAddProTask = () => {
    setNewTask(!newTask);
  };
  const handleEditProName = () => {
    setProNameEdit(!proNameEdit);
  };
  const handleCopyProLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("لینک با موفقیت در کلیپ بورد کپی شد.");
  };
  const handleProRemove = () => {
    fetcherDel(
      "delete",
      projects.delete({ wid: id, pid: params.pid ? params.pid : currentID })
    );
  };
  const handleProAlert = () => {
    setProAlert(true);
  };
  const HandleProShare = () => {
    setShare(!share);
  };

  useEffect(() => {
    if ((alert || proAlert) && responseDelete) {
      dispatch(addWorkSpace());
      setAlert(false);
      setProAlert(false);
      toast.success("آیتم مورد نظر با موفقیت حذف شد.");
      navigate("workspaces");
    }

    getProjects();
  }, [update, responseDelete]);

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

        <span
          onClick={() => {
            setCurrentID(id);
          }}
        >
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
              onClick={handleAlert}
            />
            <DropdownItem
              title="اشتراک گذاری"
              hasIcon={true}
              icon={{ icon: "share" }}
              isButton={true}
              onClick={HandleWsShare}
            />
          </Dropdown>
        </span>
      </div>
      {listToggle && (
        <ul>
          {response?.map((project: any) => (
            <li
              style={{
                backgroundColor: project.id === params.pid ? "#D0EBFF" : "",
              }}
              key={project.id}
              className="flex rounded-md justify-between items-center flex-row-reverse p-[4px] h-[36px] pr-[30px] my-S"
            >
              <p
                className="flex justify-between items-center cursor-pointer"
                onClick={() => {
                  changeUrl("project", project.id);
                }}
              >
                {project.name}
              </p>
              <span
                onClick={() => {
                  setCurrentID(project.id);
                }}
              >
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
                    onClick={handleProAlert}
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
              </span>
              {createPortal(
                <>
                  <TaskModal modal={newTask} setModal={setNewTask} />
                  <NameEdit
                    currentID={currentID}
                    value={proNameEdit}
                    setValue={setProNameEdit}
                    previousValue={project.name}
                    type="project"
                  />
                  <AlertModal
                    isAlertOpen={proAlert}
                    setIsAlertOpen={setProAlert}
                    alertText="آیا از حذف کردن این پروژه مطمئن هستید؟"
                    className=""
                    handleYes={handleProRemove}
                  />
                </>,
                portals
              )}
            </li>
          ))}
          {!response?.length && !loading && (
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
        <ProjectModal
          modal={projectModal}
          setModal={handleAddProject}
          wid={currentID}
        />
      )}
      {createPortal(
        <>
          <NameEdit
            currentID={currentID}
            value={nameEdit}
            setValue={setNameEdit}
            previousValue={name}
            type="workSpace"
          />
          <ColorEdit
            currentID={currentID}
            value={colorEdit}
            setValue={setColorEdit}
            previousValue={color}
          />
          <AlertModal
            isAlertOpen={alert}
            setIsAlertOpen={setAlert}
            alertText="آیا از حذف کردن این ورک اسپیس مطمئن هستید؟"
            className=""
            handleYes={handleWsRemove}
          />
          <ShareModal
            modal={share}
            setModal={setShare}
            title="اشتراک گذاری پروژه"
          />
        </>,
        portals
      )}
    </li>
  );
};
export default ListItem;
