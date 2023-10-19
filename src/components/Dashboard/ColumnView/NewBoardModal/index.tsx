import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../../../Common/Modal";
import Button from "../../../Common/Form/Button";
import Input from "../../../Common/Form/Input";
import { addBoard } from "../../../../features/updateSlice";
import API_URL from "../../../../constants/api.url";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import useAxios from "../../../../hooks/useAxios";

const portals = document.getElementById("portals") as Element;

interface IProps {
  modal: boolean;
  setModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const NewBoardModal: React.FC<IProps> = ({ modal, setModal }): JSX.Element => {
  const params = useParams();
  const dispatch = useDispatch();
  const [response, error, loading, fetcher] = useAxios();
  const [values, setVlaues] = useState({
    title: "",
    order: 0,
    is_archive: true,
  });

  const handleChange = (name, value) => {
    setVlaues({
      ...values,
      [name]: value,
    });
  };

  const handleShowModal = () => {
    setModal(!modal);
  };

  const postBoard = async () => {
    await fetcher(
      "post",
      `${API_URL.WorkSpaces}${params.wid}/${API_URL.Projects}${params.pid}/${API_URL.Boards}`,
      {
        name: values.title,
      }
    );
  };

  useEffect(() => {
    if (response) {
      dispatch(addBoard());
      setModal(false);
    }
  }, [response]);

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
                name="title"
                id="title"
                type="text"
                label="نام برد جدید"
                hasLabel={true}
                className="h-XL rounded-md border border-[#aaaaaa] text-sm outline-none pr-1 bg-white"
                onChange={(name, value) => handleChange(name, value)}
                inputValue={values.title}
                autoFocus={true}
              />
            </div>
            <Button
              disabled={!values.title}
              text="ادامه"
              type="button"
              onClick={postBoard}
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
