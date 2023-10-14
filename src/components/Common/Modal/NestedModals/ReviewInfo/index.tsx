import Modal from "../..";
import image from "../../../../../assets/images/member.png";
import Button from "../../../Form/Button";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  isReviewInfoOpen: boolean;
  setIsReviewInfoOpen: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
  workSpaceInfo: { name?: string; colorName?: string; colorCode?: string };
  setIsPickColorOpen: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
  setWorkSpaceInfo: Dispatch<
    SetStateAction<{ name?: string; colorName?: string; colorCode?: string }>
  >;
  setSelected?: (
    value:
      | string
      | undefined
      | ((prevVar: string | undefined) => string | undefined)
  ) => void;
}

const ReviewInfo: React.FC<IProps> = ({
  isReviewInfoOpen,
  setIsReviewInfoOpen,
  workSpaceInfo,
  setIsPickColorOpen,
  setWorkSpaceInfo,
  setSelected,
}): JSX.Element => {
  const handleCreate = () => {
    console.log(workSpaceInfo);
  };

  const handleBackClick = () => {
    setIsPickColorOpen(true);
    setIsReviewInfoOpen(false);
  };

  const handleReset = () => {
    setWorkSpaceInfo({
      ...workSpaceInfo,
      name: "",
      colorCode: "",
      colorName: "",
    });
    if (setSelected) setSelected("disable");
  };

  return (
    <>
      <Modal
        modal={isReviewInfoOpen}
        setModal={setIsReviewInfoOpen}
        hasHeader={true}
        header={{ text: "مرور اطلاعات", order: 2 }}
        hasBackIcon={true}
        backIcon={{ order: 1, handleBack: handleBackClick }}
        hasCloseIcon={true}
        closeIcon={{
          order: 3,
          resetInputValue: handleReset,
        }}
      >
        <div className="flex flex-col gap-XL">
          <div className="flex flex-col w-[453px] p-[12px] items-start gap-S border-[0.5px] border-[#AAAAAA] rounded-[8px]">
            <div className="flex justify-between items-center w-full">
              <span className="text-black text-sm font-extrabold">
                {workSpaceInfo.name}
              </span>
              <span className="text-black text-sm font-extrabold">
                نام ورک‌اسپیس
              </span>
            </div>
            <div className="flex justify-between items-center w-full">
              <div
                className="w-[15px] h-[15px] rounded-[2px]"
                style={{ backgroundColor: workSpaceInfo.colorCode }}
              ></div>
              <span className="text-black text-sm font-extrabold">
                رنگ ورک‌اسپیس
              </span>
            </div>
            <div className="flex justify-between items-center w-full">
              <img
                src={image}
                alt="اعضاء ورک اسپیس"
                className={`rounded-full flex justify-center items-center w-[35px] h-[35px]`}
              />
              <span className="text-black text-sm font-extrabold">اعضا</span>
            </div>
          </div>
          <Button
            text="ساختن ورک‌اسپیس"
            type="submit"
            onClick={handleCreate}
            className="flex h-XL rounded-md bg-brand-primary text-white w-full"
          />
        </div>
      </Modal>
    </>
  );
};

export default ReviewInfo;
