import { PropsWithoutRef } from "react";

interface SmallProps extends PropsWithoutRef<JSX.IntrinsicElements["small"]> {
  dark?: boolean;
}

const Small: React.FC<SmallProps> = ({ children, dark = false, ...rest }) => (
  <small
    {...rest}
    className="small"
    style={{
      color: dark ? "#92949c" : "#92949c",
    }}
  >
    {children}
  </small>
);

export default Small;
