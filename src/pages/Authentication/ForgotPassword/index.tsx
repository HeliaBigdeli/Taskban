import { useState } from "react";
import Card from "../../../components/Layouts/Auth/Card";
import Button from "../../../components/Common/Form/Button";
import Input from "../../../components/Common/Form/Input";
import { email, required, validate } from "../../../utils/validator";

const rules = {
  email: [required, email],
};

const ForgotPassword: React.FC = (): JSX.Element => {
  const [isSent, setIsSent] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [values, setValues] = useState<{}>({
    email: "",
  });

  const handleChange = (name: string, value: string) => {
    setValues({ ...values, [name]: value });
  };

  const handleClick = () => {
    const resultErrors = validate(values, rules);
    setErrors(resultErrors);
    if (!resultErrors.length) {
      setIsSent(!isSent);
    }
  };

  return (
      <Card page={"forgot"} errors={errors}>
        {!isSent ? (
          <form className="flex flex-col gap-5 self-stretch">
            <Input
              name="email"
              id="email"
              type="email"
              className="h-XL"
              label="ایمیل خود را وارد کنید"
              hasLabel={true}
              onChange={(name, value) => handleChange(name, value)}
            />
            <Button
              text="دریافت ایمیل بازیابی رمز عبور"
              type="button"
              onClick={handleClick}
              hasIcon={false}
              className="text-white text-sm leading-normal font-extrabold h-12 self-stretch rounded-md bg-brand-primary"
            />
          </form>
        ) : (
          <p className="text-black text-sm font-normal leading-normal">
            .لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی
            کنید
          </p>
        )}
      </Card>
  );
};

export default ForgotPassword;
