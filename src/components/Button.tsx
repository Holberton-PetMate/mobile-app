import { PropsWithoutRef } from "react";
import "../styles/components/button.css";

interface ButtonProps extends PropsWithoutRef<JSX.IntrinsicElements["button"]> {
  text: string;
  onClick?: () => void;
  type?: "submit" | "button";
  styleType?: "primary" | "secundary";
  disabled: boolean;
}

const Button = ({
  text,
  onClick,
  type = "button",
  styleType = "primary",
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`button ${styleType}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
