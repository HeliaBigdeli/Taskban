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
  const navigate = useNavigate();
  const update = useSelector(projectUpdate);
  const dispatch = useDispatch();
  const [workspaceId, setWorkspaceId] = useState(0);
  const [project, setProject] = useState({ id: 0, name: "" });
  const [listToggle, setListToggle] = useState(false);
  const [response, error, loading, fetcher] = useAxios();
  const [responseDelete, errorDel, loadingDel, fetcherDel] = useAxios();
  const params = useParams();
  const [state, stateDispatch] = useReducer(detailsReducer, {
    projectModal: false,
    workspaceNameEdit: false,
    projectNameEdit: false,
    colorEdit: false,
    workspaceAlert: false,
    projectAlert: false,
    share: false,
    newTask: false,
  });

  const toggleAccordion = () => {
    navigate(projects.gets({ wid: id }));
    setListToggle(!listToggle);
  };

  const getProjects = async () => {
    fetcher("get", projects.gets({ wid: id }));
  };

  const handleActions = (type) => {
    stateDispatch({ type });
    if (type === "projectModal") {
      navigate(projects.gets({ wid: id }));
    }
  };

  const handleWorkspaceRemove = () => {
    fetcherDel("delete", workspaces.delete({ wid: id ? id : workspaceId }));
  };

  const handleCopyProjectLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("لینک با موفقیت در کلیپ بورد کپی شد.");
  };

  const handleProjectRemove = () => {
    fetcherDel(
      "delete",
      projects.delete({ wid: id, pid: params.pid ? params.pid : project.id })
    );
  };

  useEffect(() => {
    // check if workspace delete happend on not to prevent error getting projects
    if (!state.workspaceAlert) {
      getProjects();
    }

    if ((state.workspaceAlert || state.projectAlert) && responseDelete) {
      dispatch(addWorkSpace());
      state.workspaceAlert = false;
      state.projectAlert = false;
      toast.success("آیتم مورد نظر با موفقیت حذف شد.");
      navigate("workspaces");
    }

  }, [update, responseDelete, project.id, workspaceId]);

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
              onClick={() => handleActions("projectModal")}
            />
            <DropdownItem
              title="ویرایش نام ورک اسپیس"
              hasIcon={true}
              icon={{ icon: "edit" }}
              onClick={() => handleActions("workspaceNameEdit")}
            />
            <DropdownItem
              title="ویرایش رنگ"
              hasIcon={true}
              icon={{ icon: "color" }}
              onClick={() => handleActions("colorEdit")}
            />
            <DropdownItem
              title="کپی لینک"
              hasIcon={true}
              icon={{ icon: "link" }}
              onClick={() => handleActions("copyLink")}
            />
            <DropdownItem
              title="حذف"
              hasIcon={true}
              icon={{ icon: "trash", color: "red" }}
              color="red"
              onClick={() => handleActions("workspaceAlert")}
            />
            <DropdownItem
              title="اشتراک گذاری"
              hasIcon={true}
              icon={{ icon: "share" }}
              isButton={true}
              onClick={() => handleActions("share")}
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
                  navigate(boards.gets({ wid: id, pid: project.id }));
                }}
              >
                {project.name}
              </p>
              <span
                onClick={() => {
                  setProject(project);
                }}
              >
                <Dropdown type="icon" icon={{ icon: "dots" }}>
                  <DropdownItem
                    onClick={() => handleActions("newTask")}
                    title="ساختن تسک جدید"
                    hasIcon={true}
                    icon={{ icon: "plus" }}
                  />
                  <DropdownItem
                    onClick={() => handleActions("projectNameEdit")}
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
                    onClick={() => handleActions("projectAlert")}
                    title="حذف"
                    hasIcon={true}
                    icon={{ icon: "trash", color: "red" }}
                    color="red"
                  />
                  <DropdownItem
                    onClick={() => handleActions("share")}
                    title="اشتراک گذاری"
                    hasIcon={true}
                    icon={{ icon: "share" }}
                    isButton={true}
                  />
                </Dropdown>
              </span>
            </li>
          ))}
          {!response?.length && !loading && (
            <Button
              text="ساختن پروژه جدید"
              onClick={() => handleActions("projectModal")}
              type="button"
              className="text-brand-primary h-L text-sm font-bold leading-normal self-stretch rounded-md border border-brand-primary mb-L w-full"
            />
          )}
        </ul>
      )}
      {createPortal(
        <>
          <NameEdit
            currentID={project.id}
            value={state.projectNameEdit}
            setValue={() => handleActions("projectNameEdit")}
            previousValue={project.name}
            type="project"
          />
          <AlertModal
            isAlertOpen={state.projectAlert}
            setIsAlertOpen={() => handleActions("projectAlert")}
            alertText="آیا از حذف کردن این پروژه مطمئن هستید؟"
            className=""
            handleYes={handleProjectRemove}
          />
          <TaskModal
            modal={state.newTask}
            setModal={() => handleActions("newTask")}
          />
          <ProjectModal
            modal={state.projectModal}
            setModal={() => handleActions("projectModal")}
            wid={workspaceId}
          />
          <NameEdit
            currentID={workspaceId}
            value={state.workspaceNameEdit}
            setValue={() => handleActions("workspaceNameEdit")}
            previousValue={name}
            type="workSpace"
          />
          <ColorEdit
            currentID={id}
            value={state.colorEdit}
            setValue={() => handleActions("colorEdit")}
            previousValue={color}
          />
          <AlertModal
            isAlertOpen={state.workspaceAlert}
            setIsAlertOpen={() => handleActions("workspaceAlert")}
            alertText="آیا از حذف کردن این ورک اسپیس مطمئن هستید؟"
            handleYes={handleWorkspaceRemove}
          />
          <ShareModal
            modal={state.share}
            setModal={() => handleActions("share")}
            title="اشتراک گذاری پروژه"
          />
        </>,
        portals
      )}
    </li>
  );
};
export default ListItem;
