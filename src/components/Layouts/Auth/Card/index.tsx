import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ICardProps extends React.PropsWithChildren {
  page: string;
  errors?: string[];
}

const Card: React.FC<ICardProps> = ({
  page,
  children,
  errors,
}): JSX.Element => {
  useEffect(() => {
    errors?.map((error) => {
      toast.error(error, {
        position: "bottom-left",
        autoClose: 3000,
      });
    });
  }, [errors]);

  return (
    <>
      <div className="flex w-[640px] p-M flex-col items-center gap-L rounded-[20px] bg-white shadow-authCard">
        <h2 className="text-black text-[32px] font-extrabold text-center">
          {page === "login"
            ? "(: به کوئرا تسک منیجر خوش برگشتی"
            : page === "register"
            ? "ثبت‌نام در کوئرا تسک منیجر"
            : page === "forgot"
            ? "فراموشی رمز عبور"
            : page === "reset"
            ? "بازیابی رمز عبور"
            : null}
        </h2>
        {children}
      </div>
      <ToastContainer style={{ width: "380px" }} />
    </>
  );
};

export default Card;
