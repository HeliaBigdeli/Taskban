import { useEffect, useRef, useState } from "react";
import ColumnContainer from "./ColumnContainer";
import { useDraggable } from "react-use-draggable-scroll";
import style from "./style.module.css";
import Button from "../../Common/Form/Button";
import Icon from "../../Common/Icon";
import TaskModal from "../TaskModal";
import React from "react";
import NewBoardModal from "./NewBoardModal";
import { DragDropContext } from "react-beautiful-dnd";
import { AXIOS } from "../../../config/axios.config";
const image =
  "https://s3-alpha-sig.figma.com/img/1ff2/08fc/84a00a92e59b4eaa4703234f3437659c?Expires=1697414400&Signature=NdEELGlUgpVKt28LTTA0pvyNGP7MiAZu355SZHwXHjF2wSinKpN7VyExDP8R5TarldS-jxELVf-Js0MrSBgdpAN1bcEoHSiIUIgxIm~R2FvMO5h9gwwOKAjyT7Au86W8qUuZT1v41DyAqtlUHZJ37lh1ZPCekY99lrbdjs~FJUb0AQdTR4lLmRTXXWxdLFktqJjO2Y5ReNTUUfuWuSe07~rR5qvkTo2tB11u868UBDHjWZiU7nvYzvN2iWQ6ZeyiFs~RS8oGZ7oU2DkdjF1tjzJv41mFXf7UXh91UdqyY-m3Pf-yqfc90oP~zuh00RrSKEJgkgMA8KHT8DTV-Vum4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const data = [
  {
    id: 1,
    cloumnTitle: "Open",
    tasks: [
      {
        id: 1,
        title: "تسک یک",
        img: "",
      },
      { id: 2, title: "تسک یک", img: image },
    ],
  },
  {
    id: 2,
    cloumnTitle: "In progress",
    tasks: [],
  },
  {
    id: 3,
    cloumnTitle: "Pending",
    tasks: [
      { id: 3, title: "تسک یک", img: "" },
      { id: 4, title: "تسک یک", img: image },
      { id: 5, title: "تسک یک", img: "" },
      { id: 6, title: "تسک یک", img: "" },
    ],
  },
  {
    id: 4,
    cloumnTitle: "To Do",
    tasks: [
      {
        id: 7,
        title: "تسک یک",
        img: "",
      },
    ],
  },
];

const ColumnView: React.FC = (): JSX.Element => {
  const ref = useRef<any>();
  const [boardTaks, setBoardTaks] = useState<any>([]);
  const [newBoardModal, setNewBoardModal] = useState<boolean>(false);

  const [mouseDown, setMouseDown] = useState<boolean>(true);
  const [taskModal, setTaskModal] = useState<boolean>(false);
  const { events } = useDraggable(ref, {
    isMounted: mouseDown,
  });
  useEffect(() => {
    fetch();
  }, []);
  const handleTaskModal = () => {
    setTaskModal(!taskModal);
  };

  const handleNewBoardModal = () => {
    setNewBoardModal(!newBoardModal);
  };
  const fetch = async () => {
    try {
      const response = await AXIOS.get(
        "workspaces/92/projects/13/boards/",
       
      );
      setBoardTaks(response.data);
    } catch (error) {}
  };
  const handleDragDrop = (results: any) => {
    const { source, destination } = results;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const columnSourceIndex = boardTaks.findIndex((item) => {
      return item.name === source.droppableId;
    });
    const columnDestinationIndex = boardTaks.findIndex((item) => {
      return item.name === destination.droppableId;
    });
    const newSourceItems = [...boardTaks[columnSourceIndex].tasks];
    const newDestinationItems =
      source.droppableId !== destination.droppableId
        ? [...boardTaks[columnDestinationIndex].tasks]
        : newSourceItems;

    const [deletedItem] = newSourceItems.splice(source.index, 1);
    newDestinationItems.splice(destination.index, 0, deletedItem);

    const newTaskColumns = [...boardTaks];
    newTaskColumns[columnSourceIndex] = {
      ...boardTaks[columnSourceIndex],
      tasks: newSourceItems,
    };
    newTaskColumns[columnDestinationIndex] = {
      ...boardTaks[columnDestinationIndex],
      tasks: newDestinationItems,
    };
    setBoardTaks(newTaskColumns);
    
  };

  return (
    <>
      <div
        ref={ref}
        {...events}
        className={`flex w-full px-S h-full  items-start gap-6 overflow-x-auto 
         ${style.scroll}`}
        style={{ direction: "rtl" }}
      >
        <DragDropContext onDragEnd={handleDragDrop}>
          {boardTaks.length &&
            boardTaks.map((item) => {
              return (
                <ColumnContainer
                  key={item.id}
                  {...item}
                  setMouseDown={setMouseDown}
                />
              );
            })}
        </DragDropContext>
        <button
          onClick={handleNewBoardModal}
          className="flex w-[250px] h-[44px] py-XS px-[12px]  items-center rounded-2xl shrink-0  shadow-taskColumn text-base font-medium"
        >
          <Icon icon="plus" color="#1E1E1E" size={20} />
          ساختن برد جدید
        </button>
      </div>
      <Button
        text="تسک جدید"
        onClick={handleTaskModal}
        type="button"
        className="z-20 bg-brand-primary text-white w-[118px] text-sm  justify-center items-center rounded-md fixed bottom-[30px] py-XS px-3 gap-1 left-2XL font-extrabold"
        hasIcon={true}
        icon={{
          icon: "plus_square",
          color: "white",
          size: 24,
        }}
      />
      {taskModal && <TaskModal modal={taskModal} setModal={handleTaskModal} />}
      {newBoardModal && (
        <NewBoardModal modal={newBoardModal} setModal={handleNewBoardModal} />
      )}
    </>
  );
};

export default ColumnView;
