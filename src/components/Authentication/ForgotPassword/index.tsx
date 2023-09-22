import { useState } from "react";
import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";
import Button from "../../Form/Button";
import Input from "../../Form/Input";

const ForgotPassword: React.FC = (): JSX.Element => {
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSent(!isSent);
  };

  return (
    <AuthLayout>
      <Card page={"forgot"}>
          <form className="flex flex-col items-center gap-5 self-stretch">
            {!isSent 
              ? <>
                  <Input name="email" id="email" type="email" label="ایمیل خود را وارد کنید" hasLabel={true} onChange={() => {}}/>          
                  <Button text="دریافت ایمیل بازیابی رمز عبور" type="submit" onClick={handleClick}/>        
                </>
              : <p className="text-black text-sm font-normal leading-normal">
                  .لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی
                  کنید
                </p>
            } 
          </form>
      </Card>
    </AuthLayout>
  );
};

export default ForgotPassword;
