import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";
import Input from "../../Form/Input";
import { Link } from "react-router-dom";
import Button from "../../Form/Button";

const Login: React.FC = (): JSX.Element => {
  return (
    <AuthLayout>
      <Card page={"login"}>
        <form className="flex flex-col items-center gap-L self-stretch">
          <div className="flex flex-col gap-M self-stretch">
            <Input name="email" id="email" type="email" label="ایمیل" hasLabel={true} onChange={() => {}}/>             
            <Input 
              name="password"
              id="password" 
              type="password" 
              label="رمز عبور" 
              hasLabel={true}
              subText={{
                text: "رمز عبور را فراموش کرده‌ای؟",
                link: "/forgot"
              }}
              onChange={(e) => {console.log(e.target.value)}}  
            />           
          </div>
          <div className="flex flex-col items-center gap-M self-stretch">
            <Button text="ورود" type="submit" onClick={() => {}}/>              
            <div className="flex gap-XS">             
              <Link className="text-brand-primary text-base font-extrabold" to="/register">ثبت‌نام</Link>
              <span className="text-black text-base font-medium">
                ثبت‌نام نکرده‌ای؟
              </span>
            </div>
          </div>
        </form>
      </Card>
    </AuthLayout>
  );
};

export default Login;
