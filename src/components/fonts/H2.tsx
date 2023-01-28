import { PropsWithoutRef } from "react";
import "../../styles/components/fonts.css";

interface H2Props extends PropsWithoutRef<JSX.IntrinsicElements["h2"]> {
  otherClasses?: string;
}

const H2 = ({ children, ...rest }: H2Props) => {
  return (
    <h2 className="h2" {...rest}>
      {children}
    </h2>
  );
};

export default H2;
