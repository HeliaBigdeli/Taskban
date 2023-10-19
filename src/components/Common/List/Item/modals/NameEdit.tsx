import Modal from "../../../Modal";
import Input from "../../../Form/Input";
import Button from "../../../Form/Button";
import { useEffect, useState } from "react";
import useAxios from "../../../../../hooks/useAxios";
import API_URL from "../../../../../constants/api.url";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addWorkSpace } from "../../../../../features/updateSlice";
import { IEdit } from "../../../../../interfaces/modals";

const NameEdit: React.FC<IEdit> = ({
  value,
  setValue,
  previousValue,
  type,
}): JSX.Element => {
  const [values, setVlaues] = useState({
    title: previousValue,
  });

  const [response, error, loading, fetcher] = useAxios();

  const params = useParams();

  const dispatch = useDispatch();

  const handleChange = (name, value) => {
    setVlaues({
      ...values,
      [name]: value,
    });
  };

  const workSpaceEdit = async () => {
    await fetcher("patch", `${API_URL.WorkSpaces}${params.wid}/`, {
      name: values.title,
    });
  };

  const projectEdit = async () => {
    await fetcher(
      "patch",
      `${API_URL.WorkSpaces}${params.wid}/${API_URL.Projects}${params.pid}/`,
      {
        name: values.title,
      }
    );
  };

  useEffect(() => {
    if (response) {
      dispatch(addWorkSpace());
      setValue(false);
      setVlaues({ title: previousValue });
      toast.success("تغییر نام با موفقیت انجام شد.");
    }
  }, [response]);

  const close = () => {
    setVlaues({ title: previousValue });
  };

  return (
    <>
      <Modal
        modal={value}
        setModal={setValue}
        hasHeader={true}
        header={{ text: "نام جدید را وارد کنید", order: 2 }}
        hasBackIcon={false}
        backIcon={{ order: 1 }}
        hasCloseIcon={true}
        closeIcon={{ order: 3, resetInputValue: close }}
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
            text="ثبت"
            type="button"
            onClick={type === "workSpace" ? workSpaceEdit : projectEdit}
            className="flex h-XL rounded-md bg-brand-primary text-white"
            loading={loading}
            disabled={!values.title.trim()}
          />
        </div>
      </Modal>
    </>
  );
};

export default NameEdit;
