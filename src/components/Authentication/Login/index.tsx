import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";
import Input from "../../Common/Form/Input";
import { Link } from "react-router-dom";
import Button from "../../Common/Form/Button";
import {useState} from 'react'
import {required, validate} from '../../../Utils/validator'
import Icon from '../../Common/Icon'

const rules = {
  email: [required],
  password: [required],
}

type Values = {
  [key: string]: string
}

const Login: React.FC = (): JSX.Element => {  
  const [errors, setErrors] = useState<string[]>([])
  const [values, setValues] = useState<Values>({
    email: "",
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
      <Card page={"login"} errors={errors}>
        <form className="flex flex-col items-center gap-L self-stretch">
          <div className="flex flex-col gap-M self-stretch">
            <Input name="email" id="email" type="email" label="ایمیل" hasLabel={true} onChange={(name, value) => handleChange(name, value)}/>
            <Input 
              name="password"
              id="password" 
              type="password" 
              label="رمز عبور" 
              hasLabel={true}
              subText={{
                text: "رمز عبور را فراموش کرده‌ای؟",
                link: "/forgot"
              }}
              onChange={(name, value) => handleChange(name, value)}
          />                
          </div>
          <div className="flex flex-col items-center gap-M self-stretch">
            <Button text="ورود" type="button" onClick={handleClick}/>              
            <div className="flex gap-XS">             
              <Link className="text-brand-primary text-base font-extrabold" to="/register">ثبت‌نام</Link>
              <span className="text-black text-base font-medium">
                ثبت‌نام نکرده‌ای؟
              </span>
            </div>
          </div>
        </form>
      </Card>
    </AuthLayout>
  );
};

export default Login;
