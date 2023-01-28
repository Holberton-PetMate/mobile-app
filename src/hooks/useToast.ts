import { useState } from "react";
import constate from "constate";

export interface ToastData {
  message: string;
  status: "success" | "error";
  isActive: boolean;
}

const useToast = () => {
  const [toastData, setToastData] = useState<ToastData>({
    message: "",
    status: "error",
    isActive: false,
  });

  return { toastData, setToastData };
};
const [Provider, context] = constate(useToast);

export const ToastProvider = Provider;
export const useToastContext = context;
