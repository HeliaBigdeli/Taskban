import Modal from "../../../Modal";
import Input from "../../../Form/Input";
import Button from "../../../Form/Button";
import { useState } from "react";
import useAxios from "../../../../../hooks/useAxios";
import API_URL from "../../../../../constants/api.url";
import { useParams } from "react-router-dom";

interface IProps {
  nameEdit: boolean;
  setNameEdit: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const NameEdit: React.FC<IProps> = ({ nameEdit, setNameEdit }): JSX.Element => {
  const [values, setVlaues] = useState({
    title: "",
  });

  const [response, error, loading, fetcher] = useAxios();

  const params = useParams();

  const handleChange = (name, value) => {
    setVlaues({
      ...values,
      [name]: value,
    });
  };

  const edit = async () => {
    await fetcher("patch", `${API_URL.WorkSpaces}${params.wid}}`, {
      name: values.title,
    });
    setNameEdit(false);
  };

  return (
    <>
      <Modal
        modal={nameEdit}
        setModal={setNameEdit}
        hasHeader={true}
        header={{ text: "نام جدید را وارد کنید", order: 2 }}
        hasBackIcon={false}
        backIcon={{ order: 1 }}
        hasCloseIcon={true}
        closeIcon={{ order: 3 }}
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
            text={`${loading ? "Loading..." : "ادامه"}`}
            type="button"
            onClick={edit}
            className="flex h-XL rounded-md bg-brand-primary text-white"
          />
        </div>
      </Modal>
    </>
  );
};

export default NameEdit;
