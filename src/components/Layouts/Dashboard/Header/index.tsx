interface IProps {
    title: string
}

const Header :React.FC<IProps> = ({title}):JSX.Element => {
    return (
      <div className="bg-lightgray">
        {title}
        Header
      </div>
    );
  }
  
export default Header;