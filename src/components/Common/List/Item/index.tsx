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
  const [currentID, setCurrentID] = useState(0);
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
    stateDispatch({ type: "projectModal" });
    changeUrl("workspace", id);
  };

  const handleEditWsName = () => {
    stateDispatch({ type: "nameEdit" });
  };
  const handleeditWsColor = () => {
    stateDispatch({ type: "colorEdit" });
  };
  const handleCopyWsLink = () => {
    stateDispatch({ type: "copyLink" });
  };
  const handleAlert = () => {
    stateDispatch({ type: "alert" });
  };
  const handleWsRemove = () => {
    fetcherDel("delete", workspaces.delete({ wid: id ? id : currentID }));
  };
  const HandleWsShare = () => {
    stateDispatch({ type: "share" });
  };

  const handleAddProTask = () => {
    stateDispatch({ type: "newTask" });
  };
  const handleEditProName = () => {
    stateDispatch({ type: "proNameEdit" });
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
    stateDispatch({ type: "proAlert" });
  };
  const HandleProShare = () => {
    stateDispatch({ type: "share" });
  };

  useEffect(() => {
    if ((state.alert || state.proAlert) && responseDelete) {
      dispatch(addWorkSpace());
      state.alert = false;
      state.proAlert = false;
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
              onClick={handleProjectModal}
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
                  <TaskModal
                    modal={state.newTask}
                    setModal={handleAddProTask}
                  />
                  <NameEdit
                    currentID={currentID}
                    value={state.proNameEdit}
                    setValue={handleEditProName}
                    previousValue={project.name}
                    type="project"
                  />
                  <AlertModal
                    isAlertOpen={state.proAlert}
                    setIsAlertOpen={handleProAlert}
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
      {state.projectModal && (
        <ProjectModal
          modal={state.projectModal}
          setModal={handleProjectModal}
          wid={currentID}
        />
      )}
      {createPortal(
        <>
          <NameEdit
            currentID={currentID}
            value={state.nameEdit}
            setValue={handleEditWsName}
            previousValue={name}
            type="workSpace"
          />
          <ColorEdit
            currentID={currentID}
            value={state.colorEdit}
            setValue={handleeditWsColor}
            previousValue={color}
          />
          <AlertModal
            isAlertOpen={state.alert}
            setIsAlertOpen={handleAlert}
            alertText="آیا از حذف کردن این ورک اسپیس مطمئن هستید؟"
            className=""
            handleYes={handleWsRemove}
          />
          <ShareModal
            modal={state.share}
            setModal={HandleWsShare}
            title="اشتراک گذاری پروژه"
          />
        </>,
        portals
      )}
    </li>
  );
};
export default ListItem;
