import { IonContent, IonPage } from "@ionic/react";
import "../styles/components/layout.css";

const Layout: React.FC = ({ children }) => {
  return (
    <IonPage>
      <IonContent>
        <div className="layout">{children}</div>
      </IonContent>
    </IonPage>
  );
};

export default Layout;
