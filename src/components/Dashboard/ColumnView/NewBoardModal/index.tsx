import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../../../Common/Modal";
import Button from "../../../Common/Form/Button";
import Input from "../../../Common/Form/Input";

const portals = document.getElementById("portals") as Element;

interface IProps {
  modal: boolean;
  setModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const NewBoardModal: React.FC<IProps> = ({ modal, setModal }): JSX.Element => {
  const [boardName, setBoardName] = useState<{ name: string }>({
    name: "",
  });

  const handleCreateNewBoard = () => {
    console.log(boardName);
  };

  const handleChange = (name: string, value: string) => {
    setBoardName({ ...boardName, name: value });
  };

  const handleShowModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {createPortal(
        <Modal
          modal={modal}
          setModal={handleShowModal}
          hasHeader={true}
          header={{ text: "ساخت برد جدید", order: 2 }}
          hasBackIcon={false}
          backIcon={{ order: 1 }}
          hasCloseIcon={true}
          closeIcon={{ order: 3 }}
        >
          <div className="flex flex-col gap-XL w-[500px] pt-0">
            <div className="flex flex-col gap-[8px]" dir="rtl">
              <Input
                name="boardName"
                id="boardName"
                type="text"
                label="نام برد جدید"
                hasLabel={true}
                className="h-XL rounded-md border border-[#aaaaaa] text-sm outline-none pr-1 bg-white"
                onChange={(name, value) => handleChange(name, value)}
                inputValue={boardName.name}
                autoFocus={true}
              />
            </div>
            <Button
              text="ادامه"
              type="button"
              onClick={handleCreateNewBoard}
              className="flex h-XL rounded-md bg-brand-primary text-white"
            />
          </div>
        </Modal>,
        portals
      )}
    </>
  );
};

export default NewBoardModal;
