import { PropsWithoutRef } from "react";
import "../../styles/components/fonts.css";

interface H3Props extends PropsWithoutRef<JSX.IntrinsicElements["h3"]> {
  otherClasses?: string;
}

const H3 = ({ children, otherClasses, ...rest }: H3Props) => {
  return (
    <h3 className={`h3 ${otherClasses}`} {...rest}>
      {children}
    </h3>
  );
};

export default H3;
