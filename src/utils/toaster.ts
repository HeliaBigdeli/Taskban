import { toast } from "react-toastify";

export const errorToaster = (errors) => {
    errors.map((error) => {
      toast.error(error, {
        position: "bottom-left",
        autoClose: 3000,
      });
    });
  };

  export const successToaster = (messages) => {
    messages.map((message) => {
      toast.success(message, {
        position: "bottom-left",
        autoClose: 3000,
      });
    });
  };