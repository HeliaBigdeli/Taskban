import Card from "../../Layouts/Auth/Card";
import Input from "../../Common/Form/Input";
import Button from "../../Common/Form/Button";
import Checkbox from "../../Common/Form/Checkbox";
import { useState } from "react";
import {
  required,
  minLength,
  email,
  validate,
  checked,
  strong,
} from "../../../Utils/validator";

type Values = {
  [key: string]: string | boolean | number;
};

const rules = {
  fullName: [required, minLength(4)],
  email: [required, email],
  password: [required, minLength(8), strong],
  rules: [checked],
};

const Register: React.FC = (): JSX.Element => {
  const [errors, setErrors] = useState<string[]>([]);
  const [values, setValues] = useState<Values>({
    fullName: "",
    email: "",
    password: "",
    rules: false,
  });

  const handleChange = (name: string, value: string | boolean) => {
    setValues({ ...values, [name]: value });
  };

  const handleClick = () => {
    const resultErrors = validate(values, rules);
    setErrors(resultErrors);
  };

  return (
      <Card page={"register"} errors={errors}>
        <form className="flex flex-col gap-5 self-stretch">
          <Input
            name="fullName"
            id="fullName"
            type="text"
            label="نام کامل"
            hasLabel={true}
            onChange={(name, value) => handleChange(name, value)}
          />
          <Input
            name="email"
            id="email"
            type="email"
            label="ایمیل"
            hasLabel={true}
            onChange={(name, value) => handleChange(name, value)}
          />
          <Input
            name="password"
            id="password"
            type="password"
            label="رمز عبور"
            hasLabel={true}
            onChange={(name, value) => handleChange(name, value)}
          />
          <Checkbox
            name="rules"
            id="rules"
            type="checkbox"
            label=".قوانین و مقررات را می‌پذیرم"
            hasLabel={true}
            onChange={(name, value) => handleChange(name, value)}
          />
          <Button
            text="ثبت‌نام"
            type="button"
            onClick={handleClick}
            hasIcon={false}
            className="text-white text-sm leading-normal font-extrabold h-12 self-stretch rounded-md bg-brand-primary"
          />
        </form>
      </Card>
  );
};

export default Register;
