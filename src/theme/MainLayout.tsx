import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { ellipse, square, triangle } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import Orders from "../pages/Orders";
import CreateOrder from "../pages/CreateOrder";
import Clients from "../pages/Clients";
import Settings from "../pages/Settings";

const MainLayout = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/dashboard/orders" component={Orders} />
        <Route path="/dashboard/create-order" component={CreateOrder} />
        <Route path="/dashboard/clients" component={Clients} />
        <Route path="/dashboard/settings" component={Settings} />
        <Redirect path="/dashboard" to="/dashboard/orders" exact />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="orders" href="/dashboard/orders">
          <IonIcon icon={triangle} />
          <IonLabel>Pedidos</IonLabel>
        </IonTabButton>
        <IonTabButton tab="create-order" href="/dashboard/create-order">
          <IonIcon icon={ellipse} />
          <IonLabel>Crear Pedido</IonLabel>
        </IonTabButton>
        <IonTabButton tab="clients" href="/dashboard/clients">
          <IonIcon icon={square} />
          <IonLabel>Clientes</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/dashboard/settings">
          <IonIcon icon={square} />
          <IonLabel>Ajustes</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainLayout;
