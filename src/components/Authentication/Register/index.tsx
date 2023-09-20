import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";
const Register: React.FC = (): JSX.Element => {
  return (
    <AuthLayout>
      <Card page={"register"}>
        <section className="flex flex-col items-end gap-L self-stretch">
          <form className="flex flex-col items-end gap-[20px] self-stretch">
            <div className="flex flex-col items-end gap-XS self-stretch">
              <h4 className="text-Black text-right text-sm font-normal leading-normal capitalize">
                نام کامل
              </h4>
              <input
                className="h-XL self-stretch rounded-md bg-[#fff] border border-[#aaa] "
                type="text"
              />
            </div>
            <div className="flex flex-col items-end gap-XS self-stretch">
              <h4 className="text-Black text-right text-sm font-normal leading-normal capitalize">
                ایمیل
              </h4>
              <input
                className="h-XL self-stretch rounded-md bg-[#fff] border border-[#aaa]"
                type="email"
              />
            </div>
            <div className="flex flex-col items-end gap-XS self-stretch">
              <h4 className="text-Black text-right text-sm font-normal leading-normal capitalize">
                رمز عبور
              </h4>
              <input
                className="h-XL self-stretch rounded-md bg-[#fff] border border-[#aaa]"
                type="password"
              />
            </div>
            <div className="flex justify-end items-center gap-XS">
              <span className="text-Black text-right text-base font-medium leading-normal capitalize">
                .قوانین و مقررات را می‌پذیرم
              </span>
              <input
                className="w-5 h-5 rounded border border-[#999]"
                type="checkbox"
              />
            </div>
            <button
              type="submit"
              className="flex h-12 p-2.5 justify-center gap-2.5 self-stretch rounded-md bg-brand-primary"
            >
              <span className="text-[#fff] text-right text-sm leading-normal font-extrabold capitalize">
                ثبت‌نام
              </span>
            </button>
          </form>
        </section>
      </Card>
    </AuthLayout>
  );
};

export default Register;
