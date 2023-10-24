import { useEffect } from "react";
import Icon from "../Icon/";

interface IHeader {
  text?: string;
  order: number;
}

interface ICloseIcon {
  color?: string;
  order: number;
  resetInputValue?: () => void;
}

interface IBackIcon {
  color?: string;
  order: number;
  handleBack?: () => void;
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
  style?: {};
  contentTopGap?: string;
  backgroundStyle?:string;
  fontSize?:string
}

const Modal: React.FC<IProps> = ({
  style,
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
  contentTopGap = " gap-XL",
  backgroundStyle,
  fontSize
}): JSX.Element => {
  const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const handleClose = () => {
    if (closeIcon.resetInputValue) closeIcon.resetInputValue();
    setModal(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modal]);

  return (
    <>
      {modal && (
        <div
          className={`flex items-center justify-center ${backgroundStyle} bg-modalOverlay  fixed top-0 right-0 left-0 bottom-0 z-50`}
          onClick={handleClick}
        >
          <div
            className={`trans flex w-auto min-w-[30%] rounded-[12px] p-[20px] flex-col items-center bg-white ${contentTopGap}`}
            style={style}
          >
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
                onClick={backIcon.handleBack}
              >
                <Icon icon="back" color="#1e1e1ec4" size={32} />
              </button>
              <h2
                style={{ order: header.order }}
                className={`flex items-center gap-[13px] font-extrabold ${fontSize? fontSize : "text-xl"} text-black order-$ ${
                  hasHeader ? "" : "invisible"
                }
                `}
              >
                {hasHeader ? header?.text : ""}
                {hasColor && (
                  <div
                    style={{ backgroundColor: coloredSquare }}
                    className={`w-S h-S rounded-sm`}
                  ></div>
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
            <div className="flex flex-col w-full mb[28px]">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
