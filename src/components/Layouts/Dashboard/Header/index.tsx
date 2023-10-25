import { useParams, useSearchParams } from "react-router-dom";
import Input from "../../../Common/Form/Input";
import Icon from "../../../Common/Icon";
import { useState } from "react";
import Navigator from "../../../Dashboard/CalenderView/Navigator";
import FilterModal from "../../../Dashboard/FilterModal";
import ShareModal from "../../../Dashboard/ShareModal";
import { selectView } from "../../../../features/view/viewSlice";
import { useSelector, useDispatch } from "react-redux";
import { chengeView } from "../../../../features/view/viewSlice";
import { selectTask } from "../../../../features/task/taskSlice";
import { ITask } from "../../../../interfaces/task";
import TaskInfoModal from "../../../Dashboard/TaskInfoModal";
import { selectBoard } from "../../../../features/board/boardSlice";
import { IBoard } from "../../../../interfaces/board";
import TaskModal from "../../../Dashboard/TaskModal";

const Header: React.FC = (): JSX.Element => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [filterModal, setFilterModal] = useState<boolean>(false);
  const [shareModal, setShareModal] = useState<boolean>(false);
  const view = useSelector(selectView);
  const dispatch = useDispatch();
  const projectName: string = searchParams.get("project_name") || "";
  const [data, setData] = useState<IBoard[]>([]);
  const [query, setQuery] = useState<string>("");
  const boards = useSelector(selectBoard).boards;
  const [showTaskModal, setShowTaskModal] = useState<boolean>(false);
  const [values, setValues] = useState({ boardId: 0, taskId: 0, boardTitle: "" });

  const handleSearch = (name: string, value: string) => {
    setQuery(value);
    const data = boards.filter((item) => {
      return (
        item.name.includes(value) ||
        item.tasks.find((x) => x.name.includes(value))
      );
    });

    setData(data);
  };

  const handleFilterModal = () => {
    setFilterModal(!filterModal);
  };

  const handleShareModal = () => {
    setShareModal(!shareModal);
  };

  const handleView = (type) => {
    dispatch(chengeView({ type }));
  };

  const handleShowTaskInfo = (board, task) => {
    setValues({boardId: board.id, taskId: task.id, boardTitle: board.name})
    setShowTaskModal(!showTaskModal)
    setQuery("")
  }
  return (
    <div className="mt-XL mr-S">
      <div className="flex flex-between flex-row-reverse border-b-2 border-lightgray_300 py-S gap-S">
        <div className="flex divide-x divide-lightgray_300 font-bold">
          <p
            onClick={() => handleView("calender")}
            className={`px-S flex justify-center text-base items-center cursor-pointer ${view === "calender" ? "text-brand-primary" : ""
              }`}
          >
            تقویم
            <Icon
              icon="calender_full"
              color={`${view === "calender" ? "#208d8e" : "#323232"}`}
            />
          </p>
          <p
            onClick={() => handleView("column")}
            className={`px-S flex justify-center text-base items-center cursor-pointer ${view === "column" ? "text-brand-primary" : ""
              }`}
          >
            نمایش ستونی
            <Icon
              icon="grid"
              color={`${view === "column" ? "#208d8e" : "#323232"}`}
            />
          </p>
          <p
            onClick={() => handleView("list")}
            className={`px-S flex justify-center text-base items-center cursor-pointer ${view === "list" ? "text-brand-primary" : ""
              }`}
          >
            نمایش لیستی
            <Icon
              icon="list"
              color={`${view === "list" ? "#208d8e" : "#323232"}`}
            />
          </p>
          <span className="font-bold pl-S justify-end text-xl">
            {projectName?.length > 20 ? " ..." : ""}
            {projectName?.substring(0, 20)}
          </span>
        </div>
        <button
          onClick={handleShareModal}
          className="mr-auto font-bold flex justify-center text-base items-center"
        >
          اشتراک گذاری
          <Icon icon="share" />
        </button>
      </div>
      <div className="border-b-2 border-lightgray_300 py-S mb-S flex divide-x justify-end items-center divide-lightgray_300">
        {view === "calender" ? (
          <div className="px-S">
            <Navigator />
          </div>
        ) : (
          <div className="flex">
            <p className="text-xs bg-blue_secondary p-1 px-S text-blue_primary">
              دسته بندی شده با : وضعیت
            </p>
            <button
              onClick={handleFilterModal}
              className="px-S flex justify-center items-center text-xs"
            >
              فیلترها
              <Icon icon="filter" />
            </button>
          </div>
        )}
        <Input
          className="dark:ml-4 outline-none pr-L border-none w-[260px] bg-white text-xs"
          placeholder="جستجو بین تسک‌ها"
          name="search"
          id="task_search"
          type="text"
          hasLabel={false}
          hasIcon={true}
          icon={{
            icon: "search",
          }}
          onChange={(name, value) => {
            handleSearch(name, value);
          }}
        >
          {query && (
            <div className="absolute left-0 bg-white w-full rounded-sm top-[30px] p-2 shadow-select z-30 max-h-[200px] overflow-y-auto overflow-x-hidden">
              {data.length ? (
                data?.map((board) => {
                  return (
                    board.tasks.map((task) => {
                      if (task.name.includes(query)) {
                        return (
                          <p
                            onClick={() => handleShowTaskInfo(board, task)}
                            key={task.id}
                            className="flex flex-row-reverse items-center cursor-pointer hover:bg-lightgray_200 p-1 rounded-sm text-sm"
                          >
                            <Icon icon="chevron_left" />
                            {task.name}
                          </p>
                        );
                      }
                    })
                  );
                })
              ) : (
                <p>! موردی یافت نشد</p>
              )}
            </div>
          )}
        </Input>
      </div>
      {/*----------------------------------------------- Sharing & Filter Modal --------------------------------------------- */}
      {shareModal && (
        <ShareModal
          modal={shareModal}
          setModal={handleShareModal}
          title="اشتراک گذاری پروژه"
          dataID={{ wid: params.wid, pid: params.pid }}
        />
      )}
      {filterModal && (
        <FilterModal modal={filterModal} setModal={handleFilterModal} />
      )}
      {showTaskModal && (
        <TaskInfoModal
          modal={showTaskModal}
          setModal={setShowTaskModal}
          boardTitle={values.boardTitle}
          boardId={values.boardId}
          taskId={values.taskId}
        />
      )}
    </div>
  );
};

export default Header;
