import Icon from "../Icon/";

interface IHeader {
  text?: string;
  order?: number;
}

interface ICloseIcon {
  color?: string;
  order?: number;
}

interface IBackIcon {
  color?: string;
  order?: number;
}

interface IProps extends React.PropsWithChildren {
  modal: boolean;
  setModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  hasHeader?: boolean;
  header?: IHeader;
  hasCloseIcon?: boolean;
  closeIcon?: ICloseIcon;
  hasBackIcon?: boolean;
  backIcon?: IBackIcon;
  hasColor?: boolean;
  coloredSquare?: string;
}

const Modal: React.FC<IProps> = ({
  modal,
  setModal,
  hasHeader,
  header,
  children,
  hasBackIcon,
  backIcon = { name: "back" },
  hasCloseIcon,
  closeIcon = { name: "close" },
  hasColor,
  coloredSquare,
}): JSX.Element => {
  const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
    if (e.target === e.currentTarget) setModal(!modal);
  };

  const handleClose = () => {
    setModal(false);
  };

  const history: History = window.history;

  const handleBack = () => {
    history.back();
  };

  return (
    <>
      {modal && (
        <div
          className="flex items-center justify-center bg-modalOverlay fixed top-0 right-0 left-0 bottom-0 z-10"
          onClick={handleClick}
        >
          <div className="flex w-auto max-w-[80%] min-w-[20%] rounded-[12px] p-[20px] flex-col items-center gap-XL bg-white">
            <div
              className={`flex justify-between items-center w-[430px] h-L ${
                hasHeader === false &&
                hasBackIcon === false &&
                hasCloseIcon === false
                  ? "hidden"
                  : ""
              }`}
            >
              <button
                className={`order-1 w-auto h-M order-${backIcon.order} ${
                  hasBackIcon ? "" : "invisible"
                }`}
                onClick={handleBack}
              >
                <Icon icon="back" color="#1e1e1ec4" size={32} />
              </button>
              <h2
                className={`flex items-center gap-[13px] order-3 font-extrabold text-xl text-black order-${
                  header?.order
                } ${hasHeader ? "" : "invisible"}
                `}
              >
                {header?.text}
                {hasColor && (
                  <div className={`w-XS h-XS bg-${coloredSquare}`}></div>
                )}
              </h2>
              <button
                className={`order-2 w-auto h-M order-${closeIcon.order} ${
                  hasCloseIcon ? "" : "invisible"
                }`}
                onClick={handleClose}
              >
                <Icon icon="close" color="#1e1e1ec4" size={32} />
              </button>
            </div>
            <div className="flex w-auto gap-[28px]">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
