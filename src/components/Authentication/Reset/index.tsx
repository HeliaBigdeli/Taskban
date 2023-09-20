import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";

const Reset: React.FC = (): JSX.Element => {
  return (
    <AuthLayout>
      <Card page={"reset"}>
        <section className="flex flex-col items-end gap-L self-stretch">
          <form className="flex flex-col items-end gap-5 self-stretch ">
            <div className="flex flex-col items-end gap-XS self-stretch">
              <h4 className="text-Black text-right text-sm font-normal leading-normal capitalize">
                رمز عبور جدید را وارد کنید
              </h4>
              <input
                className="h-XL self-stretch rounded-md bg-[#fff] border border-[#aaa] "
                type="email"
              />
            </div>
            <button
              type="submit"
              className="flex h-12 p-2.5 justify-center items-center gap-2.5 self-stretch rounded-md bg-brand-primary"
            >
              <span className="text-[#fff] text-right text-sm leading-normal font-extrabold capitalize">
                تغییر رمز عبور
              </span>
            </button>
          </form>
        </section>
      </Card>
    </AuthLayout>
  );
};

export default Reset;
