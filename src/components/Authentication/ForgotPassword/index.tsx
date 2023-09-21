import { useState } from "react";
import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";

const ForgotPassword: React.FC = (): JSX.Element => {
  const [isSent, setIsSent] = useState<boolean>(false);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSent((isSent) => !isSent);
  };
  return (
    <AuthLayout>
      <Card page={"forgot"}>
        <section
          className={`flex flex-col ${isSent ? "items-center" : "items-end"} ${
            isSent && "justify-center"
          } gap-L self-stretch`}
        >
          <form
            className={`flex flex-col ${
              isSent ? "items-center" : "items-end"
            } gap-5 self-stretch `}
          >
            <div
              className={`${
                isSent ? "hidden" : "flex"
              }  flex-col items-end gap-XS self-stretch`}
            >
              <label
                className="text-black text-sm font-normal leading-normal"
                htmlFor="email"
              >
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
              onClick={handleClick}
              type="submit"
              className={`${
                isSent && "hidden"
              } text-white text-sm leading-normal font-extrabold h-12 self-stretch rounded-md bg-brand-primary`}
            >
              دریافت ایمیل بازیابی رمز عبور
            </button>
            <span
              className={`${
                !isSent && "hidden"
              } text-black text-sm font-normal leading-normal`}
            >
              .لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی
              کنید
            </span>
          </form>
        </section>
      </Card>
    </AuthLayout>
  );
};

export default ForgotPassword;
