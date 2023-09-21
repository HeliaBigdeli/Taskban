import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";
import Input from "../../Form/Input/Index";
import Button from "../../Form/Button";

const Reset: React.FC = (): JSX.Element => {
  return (
    <AuthLayout>
      <Card page={"reset"}>
        <section className="flex flex-col items-end gap-L self-stretch">
          <form className="flex flex-col items-end gap-5 self-stretch">          
            <Input name="password" id="password" type="password" labelText="رمز عبور جدید را وارد کنید" hasLabel={true}/>
            <Button text="تغییر رمز عبور" type="submit"/>           
          </form>
        </section>
      </Card>
    </AuthLayout>
  );
};

export default Reset;
