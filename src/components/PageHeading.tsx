import { H1 } from "./fonts/index";
import "../styles/components/pageHeading.css";
import { ChevronLeft } from "./Icons";
import { useHistory } from "react-router-dom";

interface PageHeadingProps {
  subtitle?: string;
  title?: string;
  backUrl?: string;
}

const PageHeading = ({ subtitle, title, backUrl }: PageHeadingProps) => {
  const history = useHistory();

  return (
    <div className="pageHeading">
		<div 
          className="leftContainer" 
          onClick={() => {
              backUrl && history.replace(backUrl)
            }}>
            {backUrl && (<ChevronLeft color="#fff"/>)}
		</div>
        <div className="titleContainer">
            <H1>
              {title}
            </H1>
        </div>
		<div className="logoContainer">
			<img src="/assets/black-logo.png" alt="" />
		</div>
    </div>
  );
};

export default PageHeading;
