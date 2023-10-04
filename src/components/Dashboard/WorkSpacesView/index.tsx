import WorkSpace from "./WorkSpace";

const WorkSpacesView: React.FC = (): JSX.Element => {
  return (
    <div className="w-full h-full pt-16 pr-8 ">
      <div className="flex flex-col items-end gap-L ">
        <WorkSpace color="green" title="درس مدیریت پروژه" />
        <WorkSpace color="orange" title="کارهای شخصیی" />
        <WorkSpace color="red" title="درس کامپایلر" />
        <WorkSpace color="blue" title="درس طراحی الگوریتم" />
      </div>
    </div>
  );
};

export default WorkSpacesView;
