import Modal from "../../../Common/Modal";
import Input from "../../../Common/Form/Input";
import Button from "../../../Common/Form/Button";

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const NestedModals: React.FC<IProps> = ({
  isModalOpen,
  setIsModalOpen,
}): JSX.Element => {
  const handleChange = (name: string, value: string) => {
    console.log(name, value);
  };

  const handleNewWorkspaceClick = () => {};

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
        closeIcon={{ order: 3 }}
      >
        <div className="w-[500px]">
          <Input
            name="workSpaceName"
            id="workSpaceName"
            type="text"
            onChange={(name, value) => handleChange(name, value)}
            className="h-XL rounded-md border-none bg-[#F0F1F3] text-sm outline-none pl-[255px]"
            hasLabel={true}
            label="نام ورک‌اسپیس"
          />
          <Button
            text="ادامه"
            type="button"
            onClick={handleNewWorkspaceClick}
          />
        </div>
      </Modal>
    </>
  );
};

export default NestedModals;
