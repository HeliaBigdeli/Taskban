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
import { useReducer } from "react";
import { detailsReducer } from "../../../../utils/reducer/reducer";
import { workspaces, projects, boards } from "../../../../constants/url";

interface IProps {
  id: number;
  name: string;
  color: string;
}

const portals = document.getElementById("portals") as Element;

const ListItem: React.FC<IProps> = ({ id, name, color }): JSX.Element => {
  const [workspaceId, setWorkspaceId] = useState(0);
  const [projectId, setProjectId] = useState(0);
  const [listToggle, setListToggle] = useState(false);
  const [response, error, loading, fetcher] = useAxios();
  const [responseDelete, errorDel, loadingDel, fetcherDel] = useAxios();
  const params = useParams();
  const [state, stateDispatch] = useReducer(detailsReducer, {
    projectModal: false,
    nameEdit: false,
    colorEdit: false,
    alert: false,
    proAlert: false,
    share: false,
    newTask: false,
  });

  const navigate = useNavigate();
  const update = useSelector(projectUpdate);
  const dispatch = useDispatch();

  const toggleAccordion = () => {
    navigate(projects.gets({ wid: id }));
    setListToggle(!listToggle);
  };

  const getProjects = async () => {
    fetcher("get", projects.gets({ wid: id }));
  };

  const handleProjectModal = () => {
    navigate(projects.gets({ wid: id }));
    stateDispatch({ type: "projectModal" });
  };
  const handleEditWorkspaceName = () => {
    stateDispatch({ type: "nameEdit" });
  };
  const handleditWorkspaceColor = () => {
    stateDispatch({ type: "colorEdit" });
  };
  const handleCopyWorkspaceLink = () => {
    stateDispatch({ type: "copyLink" });
  };
  const handleAlert = () => {
    stateDispatch({ type: "alert" });
  };
  const handleWorkspaceRemove = () => {
    fetcherDel("delete", workspaces.delete({ wid: id ? id : workspaceId }));
  };
  const HandleWorkspaceShare = () => {
    stateDispatch({ type: "share" });
  };

  const handleAddProjectTask = () => {
    stateDispatch({ type: "newTask" });
  };
  const handleEditProjectName = () => {
    stateDispatch({ type: "proNameEdit" });
  };
  const handleCopyProjectLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("لینک با موفقیت در کلیپ بورد کپی شد.");
  };
  const handleProjectRemove = () => {
    fetcherDel(
      "delete",
      projects.delete({ wid: id, pid: params.pid ? params.pid : projectId })
    );
  };
  const handleProjectAlert = () => {
    stateDispatch({ type: "proAlert" });
  };
  const HandleProjectShare = () => {
    stateDispatch({ type: "share" });
  };

  useEffect(() => {
    if ((state.alert || state.ProjectAlert) && responseDelete) {
      dispatch(addWorkSpace());
      state.alert = false;
      state.ProjectAlert = false;
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
            setWorkspaceId(id);
          }}
        >
          <Dropdown type="icon" icon={{ icon: "dots" }}>
            <DropdownItem
              title="ساختن پروژه جدید"
              hasIcon={true}
              icon={{ icon: "plus" }}
              onClick={handleProjectModal}
            />
            <DropdownItem
              title="ویرایش نام ورک اسپیس"
              hasIcon={true}
              icon={{ icon: "edit" }}
              onClick={handleEditWorkspaceName}
            />
            <DropdownItem
              title="ویرایش رنگ"
              hasIcon={true}
              icon={{ icon: "color" }}
              onClick={handleditWorkspaceColor}
            />
            <DropdownItem
              title="کپی لینک"
              hasIcon={true}
              icon={{ icon: "link" }}
              onClick={handleCopyWorkspaceLink}
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
              onClick={HandleWorkspaceShare}
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
                  navigate(boards.gets({ wid: params.wid, pid: id }));
                }}
              >
                {project.name}
              </p>
              <span
                onClick={() => {
                  setProjectId(project.id);
                }}
              >
                <Dropdown type="icon" icon={{ icon: "dots" }}>
                  <DropdownItem
                    onClick={handleAddProjectTask}
                    title="ساختن تسک جدید"
                    hasIcon={true}
                    icon={{ icon: "plus" }}
                  />
                  <DropdownItem
                    onClick={handleEditProjectName}
                    title="ویرایش نام پروژه"
                    hasIcon={true}
                    icon={{ icon: "edit" }}
                  />
                  <DropdownItem
                    onClick={handleCopyProjectLink}
                    title="کپی لینک"
                    hasIcon={true}
                    icon={{ icon: "link" }}
                  />
                  <DropdownItem
                    onClick={handleProjectAlert}
                    title="حذف"
                    hasIcon={true}
                    icon={{ icon: "trash", color: "red" }}
                    color="red"
                  />
                  <DropdownItem
                    onClick={HandleProjectShare}
                    title="اشتراک گذاری"
                    hasIcon={true}
                    icon={{ icon: "share" }}
                    isButton={true}
                  />
                </Dropdown>
              </span>
              {createPortal(
                <NameEdit
                  currentID={project.id}
                  value={state.proNameEdit}
                  setValue={handleEditProjectName}
                  previousValue={project.name}
                  type="project"
                />,
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
      {createPortal(
        <>
          <AlertModal
            isAlertOpen={state.proAlert}
            setIsAlertOpen={handleProjectAlert}
            alertText="آیا از حذف کردن این پروژه مطمئن هستید؟"
            className=""
            handleYes={handleProjectRemove}
          />
          <TaskModal modal={state.newTask} setModal={handleAddProjectTask} />
          <ProjectModal
            modal={state.projectModal}
            setModal={handleProjectModal}
            wid={workspaceId}
          />
          <NameEdit
            currentID={workspaceId}
            value={state.nameEdit}
            setValue={handleEditWorkspaceName}
            previousValue={name}
            type="workSpace"
          />
          <ColorEdit
            currentID={projectId}
            value={state.colorEdit}
            setValue={handleditWorkspaceColor}
            previousValue={color}
          />
          <AlertModal
            isAlertOpen={state.alert}
            setIsAlertOpen={handleAlert}
            alertText="آیا از حذف کردن این ورک اسپیس مطمئن هستید؟"
            className=""
            handleYes={handleWorkspaceRemove}
          />
          <ShareModal
            modal={state.share}
            setModal={HandleWorkspaceShare}
            title="اشتراک گذاری پروژه"
          />
        </>,
        portals
      )}
    </li>
  );
};
export default ListItem;
