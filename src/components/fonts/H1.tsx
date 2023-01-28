import "../../styles/components/fonts.css";

interface H1Props {
  dark?: boolean;
}

const H1: React.FC<H1Props> = ({ children, dark = false }) => (
  <h1
    className="h1"
    style={{
      color: dark ? "white" : "black",
    }}
  >
    {children}
  </h1>
);

export default H1;
