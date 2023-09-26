interface IProps extends React.PropsWithChildren {}

const SideBar :React.FC<IProps> = ({children}):JSX.Element => {
    return (
      <div className="flex flex-col text-center item-center bg-white w-[340px] h-screen pr-[50px] pl-S border-l-2 border-lightgray">
        {children}
      </div>
    );
  }
  
export default SideBar;