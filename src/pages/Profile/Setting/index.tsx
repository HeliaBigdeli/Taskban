import ColorPicker from "../../../components/Common/ColorPicker";
import Button from "../../../components/Common/Form/Button";

const Setting: React.FC = ():JSX.Element => {
  const onClick=()=>{
    console.log("test")
  }
  const handleClick = () => {
   
  };

    return (
      <div className="flex flex-row-reverse justify-end">
      <div className="flex flex-col items-end mt-[170px] mr-[58px]">
       <h2 className="text-[31px] text-bold text-right mb-[32px]" >تنظیمات</h2>
       <h3 className="text-right text-normal text-black mb-XS">انتخاب تم</h3>
       <div className="flex flex-wrap justify-end"> 
        <ColorPicker onClick={e=>onClick() } hasDisableIcon={false} ></ColorPicker>
        </div>
        <div className="rounded-lg w-[64px] h-[32px] bg-lightgray_200 inline-block my-M"></div>
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