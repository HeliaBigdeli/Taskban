import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";
import Input from "../../Form/Input";
import Button from "../../Form/Button";
import Checkbox from "../../Form/Checkbox";

const Register: React.FC = (): JSX.Element => {
  return (
    <AuthLayout>
      <Card page={"register"}>
        <section className="flex flex-col self-stretch">
          <form className="flex flex-col gap-5 self-stretch">           
            <Input name="fullName" id="fullName" type="text" label="نام کامل" hasLabel={true} onChange={() => {}}/>           
            <Input name="email" id="email" type="email" label="ایمیل" hasLabel={true} onChange={() => {}}/>        
            <Input name="password" id="password" type="password" label="رمز عبور" hasLabel={true} onChange={() => {}}/>                      
            <Checkbox name="checkbox" id="checkbox" type="checkbox" label=".قوانین و مقررات را می‌پذیرم" hasLabel={true} onChange={() => {}}/>
            <Button text="ثبت‌نام" type="submit" onClick={() => {}}/>      
          </form>
        </section>
      </Card>
    </AuthLayout>
  );
};

export default Register;
