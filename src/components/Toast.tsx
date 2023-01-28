import { useEffect } from "react";
import { ToastData } from "../hooks/useToast";

import { P } from "./fonts";
import { CheckCircle, Times } from "./Icons";
import "../styles/components/toast.css";

interface ToastProps {
  toastData: ToastData;
  dismiss: () => void;
}

const Toast = ({
  toastData: { message, status, isActive },
  dismiss,
}: ToastProps) => {
  useEffect(() => {
    let timer = setTimeout(() => {}, 3000);

    if (isActive) {
      timer = setTimeout(() => dismiss(), 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isActive, message, status, dismiss]);

  return isActive ? (
    // TODO add transition from top of page
    <div className="toastContainer">
      <div className={`toast ${status}`}>
        <div className="textContainer">
          <CheckCircle color="white" style={{ marginRight: "0.5rem" }} />
          <P dark>{message}</P>
        </div>
        <Times
          color="white"
          style={{ cursor: "pointer" }}
          onClick={() => dismiss()}
        />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Toast;
