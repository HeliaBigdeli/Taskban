import { createPortal } from "react-dom";
import Modal from "../../Common/Modal";
import Button from "../../Common/Form/Button";
import Icon from "../../Common/Icon";
import { useState } from "react";
import DatePickerModal from "../DatePickerModal";
import Textarea from "../../Common/Form/Textarea";
import memberPhoto from "../../../assets/images/member.png";
import MembersThumb from "../../Common/MembersThumb";

const members = [
  {
    id: 1,
    thumbnail: memberPhoto,
    first_name: "Helya",
    last_name: "Bigdeli",
  },
  {
    id: 2,
    thumbnail: "",
    first_name: "Helya",
    last_name: "Bigdeli",
  },
  {
    id: 3,
    thumbnail: "",
    first_name: "Helya",
    last_name: "Bigdeli",
  },
  {
    id: 6,
    thumbnail: "",
    first_name: "Helya",
    last_name: "Bigdeli",
  },

];

const portals = document.getElementById("portals") as Element;

interface IProps {
  modal: boolean;
  setModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const TaskInfoModal: React.FC<IProps> = ({ modal, setModal }): JSX.Element => {
  const [datePickerModal, setDatePickerModal] = useState<boolean>(false);
  const [values, setValues] = useState({
    title: "",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، ",
  });

  const handleDatePickerModal = () => {
    setDatePickerModal(!datePickerModal);
  };

  const handleShowModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {createPortal(
        <Modal
          contentTopGap="gap-0"
          modal={modal}
          setModal={handleShowModal}
          hasHeader={false}
          header={{ text: "", order: 3 }}
          hasBackIcon={false}
          backIcon={{ order: 2 }}
          hasCloseIcon={true}
          closeIcon={{ order: 1 }}
        >
          <div className="flex flex-col gap-M divide-y divide-lightgray_300 w-[1100px]">
            <div className="flex flex-row justify-between divide-x divide-lightgray_300">
              <div className="flex w-[50%] justify-end px-S grow gap-M">
                <div className="flex flex-col">
                  <span className="text-sm text-right">ددلاین</span>
                  <span dir="rtl" className="font-bold">
                    پس‌فردا
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-right">ساخته شده در</span>
                  <span dir="rtl" className="font-bold">
                    1 اردیبهشت 1402
                  </span>
                </div>
              </div>
              <div className="flex w-[50%] px-S">
                <Button
                  type="button"
                  text="اشتراک گذاری"
                  onClick={() => {}}
                  className="mr-auto font-bold items-center"
                  hasIcon={true}
                  icon={{ icon: "share" }}
                />
                <div className="flex items-center gap-S">
                    <div className="mr-S cursor-pointer border-dashed border-2 rounded-full border-[#c1c1c1] w-[40px] h-[40px] flex justify-center items-center">
                      <Icon icon="flag" color="#c1c1c1" />
                    </div>
                  <MembersThumb members={members} hasAddIcon={false} />
                  <Button
                    type="button"
                    name="status"
                    onClick={() => {}}
                    text="Open"
                    className="bg-darkred p-1 rounded-md text-white w-[120px] h-[30px]"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row justify-between divide-x divide-lightgray_300">
                <div className="flex w-[50%] px-S relative">
                  <div className="absolute left-0 bottom-0 border-t-2 w-full border-lightgray_300">
                    <div className="flex justify-between pt-2">
                      <Icon icon="comment" color="#AEAEAE" />
                      <span className="text-lightgray px-2">کامنت شما</span>
                    </div>
                  </div>
                </div>
                <div className="flex w-[50%] px-S">
                  <div className="felx flex-col pt-M w-full">
                    <div className="flex justify-end text-brand-primary">
                      <div className="cursor-pointer border-dashed border-2 rounded-full border-[#c1c1c1] w-[40px] h-[40px] flex justify-center items-center">
                        <Icon icon="tag" color="#c1c1c1" />
                      </div>
                    </div>
                    <Textarea
                      className="my-M"
                      rows={6}
                      inputValue={values.description}
                      name="description"
                      id="description"
                      onChange={() => {}}
                    />
                    <div className="flex justify-end text-brand-primary">
                      اضافه کردن پیوست
                      <Icon icon="plus_square" color="#208d8e" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>,
        portals
      )}
      {DatePickerModal && (
        <DatePickerModal
          modal={datePickerModal}
          setModal={handleDatePickerModal}
        />
      )}
    </>
  );
};

export default TaskInfoModal;
