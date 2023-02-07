import { PropsWithoutRef } from "react";
import "../../styles/components/fonts.css";

interface H1Props extends PropsWithoutRef<JSX.IntrinsicElements["h1"]> {
  dark?: boolean;
}

const H1 = ({ children, ...rest }: H1Props) => (
  <h1
    className="h1"
    {...rest}
  >
    {children}
  </h1>
);

export default H1;
