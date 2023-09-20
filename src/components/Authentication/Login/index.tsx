import { Link } from "react-router-dom";
import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";

const Login: React.FC = (): JSX.Element => {
  return (
    <AuthLayout>
      <Card page={"login"}>
        <form className="flex flex-col items-center gap-L self-stretch">
          <div className="flex flex-col items-end gap-M self-stretch">
            <div className="flex flex-col items-end gap-XS self-stretch">
              <label className="text-black text-sm font-normal leading-normal" htmlFor="email">
                ایمیل
              </label>
              <input
                name = "email"
                id="email"
                className="h-XL self-stretch rounded-md bg-white border border-lightgray"
                type="email"
              />
            </div>
            <div className="flex flex-col items-end gap-XS self-stretch">
              <label className="text-black text-sm font-normal leading-normal" htmlFor="password">
                رمز عبور
              </label>
              <input
                name="password"
                id="password"
                className="h-XL self-stretch rounded-md bg-white border border-lightgray"
                type="password"
              />
              <button
                type="button"
                className="text-brand-primary text-xs leading-normal font-extrabold"
              >
                <Link to="/forgot">رمز عبور را فراموش کرده‌ای؟</Link>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-M self-stretch">
            <button
              className="text-white text-sm font-extrabold leading-normal h-XL p-[10px] self-stretch rounded-md bg-brand-primary"
              type="submit"
            >ورود
            </button>
            <div className="flex flex-end items-center gap-XS">
              <button
                type="button"
                className="text-brand-primary text-base font-extrabold"
              >
                <Link to="/register">ثبت‌نام</Link>
              </button>
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
