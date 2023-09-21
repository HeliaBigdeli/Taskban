import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";
import Input from "../../Form/Input/Index";
import Button from "../../Form/Button";

const Register: React.FC = (): JSX.Element => {
  return (
    <AuthLayout>
      <Card page={"register"}>
        <section className="flex flex-col items-end gap-L self-stretch">
          <form className="flex flex-col items-end gap-[20px] self-stretch">           
            <Input name="fullName" id="fullName" type="text" labelText="نام کامل" hasLabel={true}/>           
            <Input name="email" id="email" type="email" labelText="ایمیل" hasLabel={true}/>        
            <Input name="password" id="password" type="password" labelText="رمز عبور" hasLabel={true}/>                    
            <div className="flex justify-end items-center gap-XS">
              <label className="text-black text-base font-medium" htmlFor="rules">
                .قوانین و مقررات را می‌پذیرم
              </label>
              <input
                id="rules"
                name="rules"
                className="w-5 h-5 rounded border border-[#999]"
                type="checkbox"
              />
            </div>
            <Button text="ثبت‌نام" type="submit"/>      
          </form>
        </section>
      </Card>
    </AuthLayout>
  );
};

export default Register;
