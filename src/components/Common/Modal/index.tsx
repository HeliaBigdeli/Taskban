import Icon from "../Icon/";

interface IHeader {
  text?: string;
  order: number;
}

interface ICloseIcon {
  color?: string;
  order: number;
}

interface IBackIcon {
  color?: string;
  order: number;
}

interface IProps extends React.PropsWithChildren {
  modal: boolean;
  setModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  hasHeader: boolean;
  header: IHeader;
  hasCloseIcon: boolean;
  closeIcon: ICloseIcon;
  hasBackIcon: boolean;
  backIcon: IBackIcon;
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
  backIcon,
  hasCloseIcon,
  closeIcon,
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
          className="flex items-center justify-center bg-modalOverlay fixed top-0 right-0 left-0 bottom-0 z-50"
          onClick={handleClick}
        >
          <div className="flex w-auto min-w-[30%] rounded-[12px] p-[20px] flex-col items-center gap-XL bg-white">
            <div
              className={`flex justify-between items-center w-full h-L ${
                hasHeader === false &&
                hasBackIcon === false &&
                hasCloseIcon === false
                  ? "hidden"
                  : ""
              }`}
            >
              <button
                className={`flex items-center w-auto h-M ${
                  hasBackIcon ? "" : "invisible"
                }`}
                style={{ order: backIcon.order }}
                onClick={handleBack}
              >
                <Icon icon="back" color="#1e1e1ec4" size={32} />
              </button>
              <h2
                style={{ order: header.order }}
                className={`flex items-center gap-[13px] font-extrabold text-xl text-black order-$ ${
                  hasHeader ? "" : "invisible"
                }
                `}
              >
                {hasHeader ? header?.text : ""}
                {hasColor && (
                  <div className={`w-XS h-XS bg-${coloredSquare}`}></div>
                )}
              </h2>
              <button
                style={{ order: closeIcon.order }}
                className={`flex items-center w-auto h-M ${
                  hasCloseIcon ? "" : "invisible"
                }`}
                onClick={handleClose}
              >
                <Icon icon="close" color="#1e1e1ec4" size={32} />
              </button>
            </div>
            <div className="flex flex-col w-full gap-[28px]">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
