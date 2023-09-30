import Icon from "../Icon/";

interface ITitle {
  text?: string;
  alignment?: string;
}

interface ICloseIcon {
  color?: string;
  alignment?: string;
}

interface IBackIcon {
  color?: string;
  alignment?: string;
}

interface IProps extends React.PropsWithChildren {
  modal: boolean;
  setModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  hasTitle?: boolean;
  title?: ITitle;
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
  hasTitle,
  title,
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
          className="flex items-center justify-center bg-modalOverlay fixed top-0 right-0 left-0 bottom-0 z-20"
          onClick={handleClick}
        >
          <div className="flex w-auto min-w-[20%] rounded-xl p-[20px] flex-col items-center gap-XL bg-white">
            <div
              className={`flex justify-between items-center w-full h-L ${hasTitle === false &&
                hasBackIcon === false &&
                hasCloseIcon === false
                ? "hidden"
                : ""
                }`}
            >
              <button
                className={`flex items-center w-auto h-M ${backIcon?.alignment === 'right' ? 'order-3' : backIcon?.alignment === 'left' ? 'order-1' : 'order-2'} 
                ${hasBackIcon ? "" : "invisible"
                  }`}
                onClick={handleBack}
              >
                <Icon icon="back" color="#1e1e1ec4" size={32} />
              </button>
              <h2
                className={`flex items-center gap-[13px] font-extrabold text-xl text-black ${title?.alignment === 'right' ? 'order-3' : title?.alignment === 'left' ? 'order-1' : 'order-2'} 
                  ${hasTitle ? "" : "invisible"}
                `}
              >
                {title?.text}
                {hasColor && (
                  <div className={`w-XS h-XS bg-${coloredSquare}`}></div>
                )}
              </h2>
              <button
                className={`flex items-center w-auto h-M ${closeIcon?.alignment === 'right' ? 'order-3' : closeIcon?.alignment === 'left' ? 'order-1' : 'order-2'}
                 ${hasCloseIcon ? "" : "invisible"
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
