import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";

const ForgotPassword :React.FC = () :JSX.Element => {
  return (
    <AuthLayout>
      <Card page={"forgot"}>
        <section className="flex flex-col items-end gap-L self-stretch">
          <form className="flex flex-col items-end gap-5 self-stretch ">
            <div className="flex flex-col items-end gap-XS self-stretch">
              <label className="text-black text-sm font-normal leading-normal" htmlFor="email">
                ایمیل خود را وارد کنید
              </label>
              <input
                name="email"
                id="email"
                className="h-XL self-stretch rounded-md bg-white border border-lightgray"
                type="email"
              />
            </div>
            <button
              type="submit"
              className="text-white text-sm leading-normal font-extrabold h-12 self-stretch rounded-md bg-brand-primary"
            >
                دریافت ایمیل بازیابی رمز عبور
            </button>
          </form>
        </section>
      </Card>
    </AuthLayout>
  );
};

export default ForgotPassword;
