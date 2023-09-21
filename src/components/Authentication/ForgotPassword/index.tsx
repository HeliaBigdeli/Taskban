import { useState } from "react";
import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";

const ForgotPassword: React.FC = (): JSX.Element => {
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSent(!isSent);
  };

  return (
    <AuthLayout>
      <Card page={"forgot"}>
        <section className="flex flex-col items-center isSent justify-center gap-L self-stretch">
          <form className="flex flex-col items-center gap-5 self-stretch">
          {!isSent 
            ? <>
                <div className="flex flex-col items-end gap-XS self-stretch">
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
                  className="text-white text-sm leading-normal font-extrabold h-12 self-stretch rounded-md bg-brand-primary"
                >
                  دریافت ایمیل بازیابی رمز عبور
                </button>
              </>
            : <p className="text-black text-sm font-normal leading-normal">
                .لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی
                کنید
              </p>
           } 
          </form>
        </section>
      </Card>
    </AuthLayout>
  );
};

export default ForgotPassword;
