import Dropdown from "../../../components/Common/Dropdown";
import CalenderView from "../../../components/Dashboard/CalenderView"

const Calender: React.FC = (): JSX.Element => {


  const data = [
    {
      title: "ویرایش نام ستون",
      description: " ",
      hasIcon: true,
      icon: {
      icon: "edit",
      },
    },
    {
      title: "افزودن تسک",
      description: " ",
      hasIcon: true,
      icon: {
        icon: "plus",
      },
    },
    {
      title: "آرشیو تمام تسک ها",
      description: " ",
      hasIcon: true,
      icon: {
        icon: "archive",
      },
    },
    {
      title: "حذف ستون",
      description: " ",
      hasIcon: true,
      icon: {
        icon: "trash",
      },
    },
  ];
  

 


  return (
    <>
      <Dropdown   items={data}/>
      <CalenderView />
    </>
  );

};

export default Calender;
