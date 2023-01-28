import { PropsWithoutRef } from "react";
import "../../styles/components/fonts.css";

interface BodyProps extends PropsWithoutRef<JSX.IntrinsicElements["p"]> {}

const Body = ({ children, ...rest }: BodyProps) => {
  return (
    <p className="body" {...rest}>
      {children}
    </p>
  );
};

export default Body;
