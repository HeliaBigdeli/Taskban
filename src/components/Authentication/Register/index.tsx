import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";
import Input from "../../Form/Input";
import Button from "../../Form/Button";

const Register: React.FC = (): JSX.Element => {
  return (
    <AuthLayout>
      <Card page={"register"}>
        <section className="flex flex-col items-end gap-L self-stretch">
          <form className="flex flex-col items-end gap-[20px] self-stretch">           
            <Input name="fullName" id="fullName" type="text" label="نام کامل" hasLabel={true} onChange={() => {}}/>           
            <Input name="email" id="email" type="email" label="ایمیل" hasLabel={true} onChange={() => {}}/>        
            <Input name="password" id="password" type="password" label="رمز عبور" hasLabel={true} onChange={() => {}}/>                      
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
            <Button text="ثبت‌نام" type="submit" onClick={() => {}}/>      
          </form>
        </section>
      </Card>
    </AuthLayout>
  );
};

export default Register;
