import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";
import Input from "../../Form/Input";
import Button from "../../Form/Button";
import {useState} from 'react'
import {required, strong, validate} from '../../../Utils/validator'

const rules = {
  password: [required, strong],
}

const Reset: React.FC = (): JSX.Element => {
  const [errors, setErrors] = useState<string[]>([])
  const [values, setValues] = useState<{}>({
    password: "",
  })

  const handleChange = (name: string, value: string) => {
    setValues({...values, [name]: value})
  }

  const handleClick = () => {
    const resultErrors = validate(values, rules);
    setErrors(resultErrors)
  }

  return (
    <AuthLayout>
      <Card page={"reset"} errors={errors}>
          <form className="flex flex-col gap-5 self-stretch">          
            <Input
              name="password"
              id="password" 
              type="password" 
              label="رمز عبور جدید را وارد کنید" 
              hasLabel={true}
              onChange={(name, value) => handleChange(name, value)}
            />                
            <Button text="تغییر رمز عبور" type="button" onClick={handleClick}/>           
          </form>
      </Card>
    </AuthLayout>
  );
};

export default Reset;
