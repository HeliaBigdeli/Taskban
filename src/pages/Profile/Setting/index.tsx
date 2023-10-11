import ColorPicker from "../../../components/Common/ColorPicker";
import Button from "../../../components/Common/Form/Button";
import Switcher from "../../../components/Theme/Switcher";

const Setting: React.FC = (): JSX.Element => {
  
  const onClick = () => {

  }
  const handleClick = () => {

  };




  return (
    <div className="flex justify-end">
      <div className="flex flex-col mt-[160px] mr-[58px]">
        <h2 className="text-[31px] text-bold text-right mb-L" >تنظیمات</h2>
        <h3 className="text-right text-normal text-black mb-XS">انتخاب تم</h3>
        <div>
          <ColorPicker onClick={e => onClick()} hasDisableIcon={false}></ColorPicker>
        </div>
        <div className="my-M flex flex-row-reverse">
         <Switcher />
        </div>
        <Button
          text="ثبت تغییرات"
          type="button"
          onClick={handleClick}
          hasIcon={false}
          className="text-white text-sm font-black leading-normal h-XL self-stretch rounded-md bg-brand-primary"
        />
      </div>


    </div>
  );
}

export default Setting;