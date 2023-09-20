import styles from "./style.module.css";
import { useFormik } from 'formik';

type FormValues = {
    fullName?: String,
    email?: String,
    password?: String,
}

type Inputs = {
  name: string,
  type: string,
  placeholder?: string
  labelText: string
}

type Validation = {
  [key: string]: string[],  
}

interface ICardProps {
  inputs: Inputs[],
  validation: Validation,
  onFormSubmit: (values: FormValues) => void
}

// const validate = values => {
  // console.log(values)
  const errors = {};
  // if (!values.fullName) {
  //   errors.fullName = 'Required';
  // } else if (values.fullName.length > 15) {
  //   errors.fullName = 'Must be 15 characters or less';
  // }

  // return errors;
// };

const Card: React.FC<ICardProps> = ({
  inputs,
  validation,
  onFormSubmit,
}): JSX.Element => {

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
    },
    // validate,
    onSubmit: values => {
      console.log(values)
      onFormSubmit(values)
    },
  });

  return (
     <form onSubmit={formik.handleSubmit} className="w-full">
       {inputs?.map((input) => {
          return (
           <div key={input.name} className={styles.inputFiled}>
              <label className={styles.inputHeader} htmlFor={input.name}>{input.labelText}</label>
              <input
                className={styles.input}
                id={input.name}
                name={input.name}
                type={input.type}
                onChange={formik.handleChange}
                value={formik.values.fullName}
              /> 
              {formik.errors.fullName ? <div>{formik.errors.fullName}</div> : null}
           </div>
          )
       })}
    </form>
  );
};

export default Card;
