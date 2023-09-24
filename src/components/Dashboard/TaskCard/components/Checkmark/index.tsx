const Checkmark: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-end items-center gap-0.5">
      <span className="text-[#BDC0C6] text-xs leading-5 font-normal">
        ۲ / ۱۲
      </span>
      <div className="flex w-4 h-4 justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
        >
          <path
            d="M11.137 7.24133L8.46759 9.90911L6.86279 8.30911"
            stroke="#BDC0C6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="2.99756"
            y="2.4975"
            width="12.005"
            height="12.005"
            rx="3.33333"
            stroke="#BDC0C6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
export default Checkmark;
