import { createPortal } from "react-dom";
import Modal from "../../Common/Modal";
import { useState, useEffect } from "react";
import Button from "../../Common/Form/Button";
import Input from "../../Common/Form/Input";
import useAxios from "../../../hooks/useAxios";
import { useDispatch } from "react-redux";
import API_URL from "../../../constants/api.url";
import { addProject } from "../../../features/updateSlice";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const portals = document.getElementById("portals") as Element;

interface IProps {
  modal: boolean;
  setModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const ProjectModal: React.FC<IProps> = ({ modal, setModal }): JSX.Element => {
  const params = useParams();
  const dispatch = useDispatch();
  const [response, error, loading, fetcher] = useAxios();
  const [values, setVlaues] = useState({
    title: "",
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

  const postProject = async () => {
    await fetcher(
      "post",
      `${API_URL.WorkSpaces}${params.wid}/${API_URL.Projects}`,
      {
        name: values.title,
      }
    );
  };

  useEffect(() => {
    if (response) {
      dispatch(addProject());
      setModal(false);
      toast.success("پروژه با موفقیت اضافه شد.");
    }
  }, [response]);

  return (
    <>
      {createPortal(
        <Modal
          style={{}}
          modal={modal}
          setModal={handleShowModal}
          hasHeader={true}
          header={{ text: "ساختن پروژه جدید", order: 2 }}
          hasBackIcon={false}
          backIcon={{ order: 0 }}
          hasCloseIcon={true}
          closeIcon={{ order: 2 }}
        >
          <div className="flex flex-col gap-XL w-[500px]">
            <div className="flex flex-col gap-[8px]" dir="rtl">
              <Input
                name="title"
                id="title"
                type="text"
                className="h-XL rounded-md border border-[#aaaaaa] text-sm outline-none pr-1 bg-white"
                onChange={(name, value) => handleChange(name, value)}
                inputValue={values.title}
                autoFocus={true}
              />
            </div>
            <Button
              disabled={!values?.title}
              loading={loading}
              text="ادامه"
              type="button"
              onClick={postProject}
              className="flex h-XL rounded-md bg-brand-primary text-white"
            />
          </div>
        </Modal>,
        portals
      )}
    </>
  );
};

export default ProjectModal;
