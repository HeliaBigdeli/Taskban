import { createPortal } from "react-dom";
import { Dispatch, SetStateAction, useState, useRef } from "react";
import Modal from "../../Common/Modal";
import Button from "../../Common/Form/Button";
import Input from "../../Common/Form/Input";
import CopyLink from "../../Common/CopyLink";
import MemberList from "../../Common/MemberList/MemberList";
import { email, validate } from "../../../utils/validator/";
import { toast } from "react-toastify";
import useAxios from "../../../hooks/useAxios";
import API_URL from "../../../constants/api.url";
import { useEffect } from "react";
import { IAccount } from "../../../interfaces/accounts";

const rules = {
  shareWithEmail: [email],
};
const portals = document.getElementById("portals") as Element;

interface IProps {
  title: string;
  modal: boolean;
  setModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const ShareModal: React.FC<IProps> = ({
  modal,
  setModal,
  title,
}): JSX.Element => {
  const input = useRef<any>();
  const [listShow, setListShow] = useState(false);
  const [response, error, loading, fetcher] = useAxios();
  const [data, setData] = useState<IAccount[]>([]);
  const [values, setValues] = useState({
    email: "",
  });

  const accounts = async () => {
    await fetcher("get", `${API_URL.Accounts}`);
  };

  const handleShareWithEmail = () => {
    const resultErrors = validate(values, rules);
    resultErrors.forEach((error) => {
      toast.error(error);
    });
  };

  const handleChange = (name: string, value: string) => {
    setListShow(true);
    setValues({ email: value });
    const data = response.filter((item) => {
      return item.email.includes(value);
    });

    setData(data);
  };

  const handleSelect = (item) => {
    setListShow(false);
    setValues({ email: item.email });
  };

  const handleShowModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    accounts();
  }, []);

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
          <div className="flex relative">
            <Button
              disabled={!values.email}
              text="ارسال"
              type="submit"
              onClick={handleShareWithEmail}
              className="h-XL bg-brand-primary rounded-l-lg text-white text-sm px-[30px]"
            />
            <div className="w-full">
              <Input
                ref={input}
                inputValue={values.email}
                name="email"
                id="email"
                type="email"
                onChange={(name, value) => handleChange(name, value)}
                placeholder="دعوت با ایمیل"
                className="h-XL rounded-l-none rounded-r-lg border-none bg-[#F0F1F3] text-sm outline-none"
              >
                {values.email && listShow && (
                  <div className="absolute left-0 bg-white w-full rounded-sm top-XL p-2 shadow-select z-30 max-h-[200px] overflow-y-auto overflow-x-hidden">
                    {data.length ? (
                      data?.map((item) => {
                        return (
                          <div
                            className="cursor-pointer hover:bg-lightgray_200 p-1 text-left rounded-sm"
                            onClick={() => {
                              handleSelect(item);
                            }}
                          >
                            {item.email}
                          </div>
                        );
                      })
                    ) : (
                      <p>! موردی یافت نشد</p>
                    )}
                  </div>
                )}
              </Input>
            </div>
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
