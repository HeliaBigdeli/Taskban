import Input from "../../../Common/Form/Input";

interface IProps {
    title: string
}

const Header :React.FC<IProps> = ({title}):JSX.Element => {

  const handleChange = (name: string, value: string) => {
    console.log(name, value);
  };

    return (
      <div className="mt-XL mr-S">
        <div className="flex flex-between flex-row-reverse border-b-2 border-lightgray_300 py-S gap-S">
          <span className="font-bold">{title}</span>
          <div>
              <span>1</span>
              <span>2</span>
              <span>3</span>
          </div>
          <span className="mr-auto">share</span>
        </div>
        <div className="border-b-2 border-lightgray_300 py-S">
        <Input
          className="pr-L bg-lightgray_100 border-none"
          placeholder="جستجو کنید"
          name="search"
          id="search"
          type="text"
          hasLabel={false}
          hasIcon={true}
          icon={{
            icon: "search"
          }}
          onChange={(name, value) => handleChange(name, value)}
        />
        </div>
      </div>
    );
  }
  
export default Header;