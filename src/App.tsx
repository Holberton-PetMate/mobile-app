import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";
import Login from "./pages/Login";
import MainLayout from "./theme/MainLayout";
import Index from "./pages/Index";
import { SessionProvider } from "./hooks/useSession";
import { ToastProvider } from "./hooks/useToast";

setupIonicReact();

const App: React.FC = () => {
  return (
    <SessionProvider>
      <ToastProvider>
        <IonApp>
          <IonReactRouter>
            <IonRouterOutlet>
              <Route path="/" component={Index} exact />
              <Route path="/dashboard" render={() => <MainLayout />} />
              <Route path="/login" component={Login} />
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
      </ToastProvider>
    </SessionProvider>
  );
};

export default App;
