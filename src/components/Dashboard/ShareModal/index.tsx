import { createPortal } from "react-dom";
import { useState } from "react";
import Modal from "../../Common/Modal";

import Button from "../../Common/Form/Button";
import Input from "../../Common/Form/Input";
import CopyLink from "../../Common/CopyLink";
import MemberList from "../../Common/MemberList/MemberList";
import { email, validate } from "../../../utils/validator/";
import { toast } from "react-toastify";

const rules = {
  shareWithEmail: [email],
};
const portals = document.getElementById("portals") as Element;

interface IProps {
  title: string,
  modal: boolean;
  setModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const ShareModal: React.FC<IProps> = ({ modal, setModal, title }): JSX.Element => {
  const [shareEmail, setShareEmail] = useState<{}>({
    shareWithEmail: "",
  });

  const handleShareWithEmail = () => {
    const resultErrors = validate(shareEmail, rules);
    resultErrors.forEach((error) => {
      toast.error(error, {
        position: "bottom-left",
        autoClose: 3000,
      });
    });
  };

  const handleChange = (name: string, value: string) => {
    setShareEmail({ ...shareEmail, [name]: value });
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
          header={{ text: title, order: 2 }}
          hasBackIcon={false}
          backIcon={{ order: 1 }}
          hasCloseIcon={true}
          closeIcon={{ order: 3 }}
        >
          <div className="flex w-[430px]">
            <Button
              text="ارسال"
              type="submit"
              onClick={handleShareWithEmail}
              className="h-XL bg-brand-primary rounded-l-lg text-white text-sm px-[29.5px]"
            />
            <Input
              name="shareWithEmail"
              id="shareWithEmail"
              type="email"
              onChange={(name, value) => handleChange(name, value)}
              placeholder="دعوت با ایمیل"
              className="h-XL rounded-l-none rounded-r-lg border-none bg-[#F0F1F3] text-sm outline-none pl-[255px]"
            />
          </div>
          <div className="flex justify-between w-[430px] my-[25px]">
            <CopyLink privateLink="hell@gmail.com" />
          </div>
          <div className="flex flex-col w-[430px] gap-S">
            <MemberList />
          </div>
        </Modal>,
        portals
      )}
    </>
  );
};

export default ShareModal;
