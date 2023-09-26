import ColumnContainer from "./ColumnContainer";

const ColumnShow: React.FC = (): JSX.Element => {
  return (
    <div className="flex w-[1038px] justify-end items-start gap-S ">
      <ColumnContainer />
      <ColumnContainer />
      <ColumnContainer />
      <ColumnContainer />
      <ColumnContainer />
    </div>
  );
};

export default ColumnShow;
