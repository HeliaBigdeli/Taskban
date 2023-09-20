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
              <h4 className="text-Black text-right text-sm font-normal leading-normal capitalize">
                ایمیل
              </h4>
              <input
                className="h-XL self-stretch rounded-md bg-[#fff] border border-[#aaa] "
                type="email"
              />
            </div>
            <div className="flex flex-col items-end gap-XS self-stretch">
              <h4 className="text-Black text-right text-sm font-normal leading-normal capitalize">
                رمز عبور
              </h4>
              <input
                className="h-XL self-stretch rounded-md bg-[#fff] border border-[#aaa] "
                type="password"
              />
              <button
                type="button"
                className="text-brand-primary text-right text-xs leading-normal font-extrabold capitalize"
              >
                <Link to={`/forgot`}>رمز عبور را فراموش کرده‌ای؟</Link>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-M self-stretch">
            <button
              className="flex h-XL p-[10px] justify-center items-center gap-[10px] self-stretch rounded-md bg-brand-primary"
              type="submit"
            >
              <span className="text-[#fff] text-right text-sm font-extrabold leading-normal capitalize">
                ورود
              </span>
            </button>
            <div className="flex flex-end items-center gap-[7px]">
              <button
                type="button"
                className="text-brand-primary text-right text-base leading-normal font-extrabold capitalize"
              >
                <Link to={`/register`}>ثبت‌نام</Link>
              </button>

              <span className="text-Black text-right text-base leading-normal font-medium capitalize">
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
