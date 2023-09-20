interface ICardProps {
  page: string;
}
const Card: React.FC<React.PropsWithChildren<ICardProps>> = ({
  page,
  children,
}): JSX.Element => {
  return (
    <div className="flex w-[640px] p-M flex-col items-center gap-L rounded-[20px] bg-[#fff] shadow-card">
      <h2 className="text-Black text-right text-[32px] font-extrabold  capitalize">
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
  );
};

export default Card;
