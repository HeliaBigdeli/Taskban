import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";
import Input from "../../Form/Input";
import Button from "../../Form/Button";

const Reset: React.FC = (): JSX.Element => {
  return (
    <AuthLayout>
      <Card page={"reset"}>
          <form className="flex flex-col gap-5 self-stretch">          
            <Input
              name="password"
              id="password" 
              type="password" 
              label="رمز عبور جدید را وارد کنید" 
              hasLabel={true}
              onChange={() => {}}
             />
            <Button text="تغییر رمز عبور" type="submit" onClick={() => {}}/>           
          </form>
      </Card>
    </AuthLayout>
  );
};

export default Reset;
