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
import "./layouts/variables.css";

import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";
import Settings from "./pages/SettingsPage";
import Progress from "./pages/ProgressPage";
import Records from "./pages/RecordsPage";
import Login from "./pages/Login";
import Index from "./pages/Index";
import { SessionProvider } from "./hooks/useSession";
import { ToastProvider } from "./hooks/useToast";
import MyPetMatesPage from "./pages/MyPetMatesPage";

setupIonicReact();

const App: React.FC = () => {
  return (
    <SessionProvider>
      <ToastProvider>
        <IonApp>
          <IonReactRouter>
            <IonRouterOutlet>
              <Route path="/" component={Index} exact />
              <Route path="/my-petmates" render={() => <MyPetMatesPage />} />
		      <Route path="/dashboard/:petmate_id/settings" component={Settings} />
              <Route path="/dashboard/:petmate_id/progress" component={Progress} />
              <Route path="/dashboard/:petmate_id/records" component={Records} />
              <Route path="/login" component={Login} />
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
      </ToastProvider>
    </SessionProvider>
  );
};

export default App;
