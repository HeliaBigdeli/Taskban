import Card from "../../Layouts/Auth/Card";
import Input from "../../Common/Form/Input";
import Button from "../../Common/Form/Button";
import { useState } from "react";
import { required, strong, validate } from "../../../Utils/validator";

const rules = {
  password: [required, strong],
};

const Reset: React.FC = (): JSX.Element => {
  const [errors, setErrors] = useState<string[]>([]);
  const [values, setValues] = useState<{}>({
    password: "",
  });

  const handleChange = (name: string, value: string) => {
    setValues({ ...values, [name]: value });
  };

  const handleClick = () => {
    const resultErrors = validate(values, rules);
    setErrors(resultErrors);
  };

  return (
      <Card page={"reset"} errors={errors}>
        <form className="flex flex-col gap-5 self-stretch">
          <Input
            name="password"
            id="password"
            type="password"
            label="رمز عبور جدید را وارد کنید"
            className="h-XL"
            hasLabel={true}
            onChange={(name, value) => handleChange(name, value)}
          />
          <Button
            text="تغییر رمز عبور"
            type="button"
            onClick={handleClick}
            hasIcon={false}
            className="text-white text-sm leading-normal font-extrabold h-12 self-stretch rounded-md bg-brand-primary"
          />
        </form>
      </Card>
  );
};

export default Reset;
