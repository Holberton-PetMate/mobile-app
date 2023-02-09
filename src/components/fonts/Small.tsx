import { PropsWithoutRef } from "react";

interface SmallProps extends PropsWithoutRef<JSX.IntrinsicElements["small"]> {
  dark?: boolean;
  otherClasses?: string
}

const Small: React.FC<SmallProps> = ({
	children,
	otherClasses,
	dark = false, 
	...rest 
}) => (
  <small
    {...rest}
    className={`small ${otherClasses}`}
    style={{
      color: dark ? "#fff" : "#000",
    }}
  >
    {children}
  </small>
);

export default Small;
