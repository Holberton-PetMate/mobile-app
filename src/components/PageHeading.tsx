import { IonToolbar } from "@ionic/react";
import { Body, Small, P } from "./fonts/index";
import "../styles/components/pageHeading.css";

interface PageHeadingProps {
  subtitle?: string;
  title?: string;
}

const PageHeading = ({ subtitle, title }: PageHeadingProps) => {
  return (
    <div className="pageHeading">
      <IonToolbar>
        <div className="titleContainer">
          <div>
            <P style={{ paddingLeft: "0rem", color: "#BEBFBF" }}>{subtitle}</P>
            <Body style={{ marginTop: "-0.25rem", color: "#121617" }}>
              {title}
            </Body>
          </div>
        </div>
      </IonToolbar>
    </div>
  );
};

export default PageHeading;
