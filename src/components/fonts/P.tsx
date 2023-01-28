import { PropsWithoutRef } from "react";
import "../../styles/components/fonts.css";

interface PProps extends PropsWithoutRef<JSX.IntrinsicElements["p"]> {
  dark?: boolean;
}

const P: React.FC<PProps> = ({ children, dark = false, ...rest }) => (
  <p
    className="p"
    style={{
      color: dark ? "white" : "black",
    }}
    {...rest}
  >
    {children}
  </p>
);

export default P;
