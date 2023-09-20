import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";
const Register: React.FC = (): JSX.Element => {
  return (
    <AuthLayout>
      <Card page={"register"}>
        <section className="flex flex-col items-end gap-L self-stretch">
          <form className="flex flex-col items-end gap-[20px] self-stretch">
            <div className="flex flex-col items-end gap-XS self-stretch">
              <label className="text-black text-right text-sm font-normal leading-normal" htmlFor="fullName">
                نام کامل
              </label>
              <input
                name="fullName"
                id="fullName"
                className="h-XL self-stretch rounded-md bg-white border border-lightgray"
                type="text"
              />
            </div>
            <div className="flex flex-col items-end gap-XS self-stretch">
              <label className="text-black text-sm font-normal leading-normal" htmlFor="email">
                ایمیل
              </label>
              <input
                name="email"
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
            </div>
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
            <button
              type="submit"
              className="text-white text-sm font-extrabold h-12 self-stretch rounded-md bg-brand-primary"
            >
                ثبت‌نام
            </button>
          </form>
        </section>
      </Card>
    </AuthLayout>
  );
};

export default Register;
