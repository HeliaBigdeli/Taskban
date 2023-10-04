import { useState } from "react";
import Modal from "../..";
import Button from "../../../Form/Button";
import PickColor from "../PickColor";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean | ((prevState: boolean) => boolean)) => void;
  workSpaceInfo: { name?: string; colorName?: string; colorCode?: string };
  setWorkSpaceInfo: Dispatch<
    SetStateAction<{ name?: string; colorName?: string; colorCode?: string }>
  >;
}

const CreateWorkSpace: React.FC<IProps> = ({
  isModalOpen,
  setIsModalOpen,
  workSpaceInfo,
  setWorkSpaceInfo,
}): JSX.Element => {
  const [isPickColorOpen, setIsPickColorOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWorkSpaceInfo({
      ...workSpaceInfo,
      name: e.target.value,
    });
  };

  const handleNewWorkspaceClick = () => {
    setIsPickColorOpen(true);
    setIsModalOpen(false);
  };

  const handleResetInput = () => {
    setWorkSpaceInfo({ ...workSpaceInfo, name: "" });
  };

  return (
    <>
      <Modal
        modal={isModalOpen}
        setModal={setIsModalOpen}
        hasHeader={true}
        header={{ text: "ساختن ورک‌اسپیس جدید‌", order: 2 }}
        hasBackIcon={false}
        backIcon={{ order: 1 }}
        hasCloseIcon={true}
        closeIcon={{ order: 3, resetInputValue: handleResetInput }}
      >
        <div className="flex flex-col gap-XL w-[500px] p-6 pr-[2rem] pt-0">
          <div className="flex flex-col gap-[8px]" dir="rtl">
            <label className="text-black text-sm" htmlFor="workSpaceName">
              نام ورک‌اسپیس
            </label>
            <input
              name="workSpaceName"
              id="workSpaceName"
              type="text"
              className="h-XL rounded-md border border-[#aaaaaa] text-sm outline-none pr-1 bg-white"
              onChange={handleChange}
              value={workSpaceInfo.name}
              autoFocus
            />
          </div>
          <Button
            text="ادامه"
            type="button"
            onClick={handleNewWorkspaceClick}
            className="flex h-XL p-2.5 rounded-md bg-brand-primary text-white"
          />
        </div>
      </Modal>
      <PickColor
        isPickColorOpen={isPickColorOpen}
        setIsPickColorOpen={setIsPickColorOpen}
        setIsModalOpen={setIsModalOpen}
        workSpaceInfo={workSpaceInfo}
        setWorkSpaceInfo={setWorkSpaceInfo}
      />
    </>
  );
};

export default CreateWorkSpace;
