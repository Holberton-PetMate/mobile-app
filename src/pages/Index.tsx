import { IonPage, useIonRouter } from "@ionic/react";
import { useEffect } from "react";
import { useSessionContext } from "../hooks/useSession";

const Index = () => {
  const router = useIonRouter();
  const { initializeSession, clearSession } = useSessionContext();

  useEffect(() => {
    (async () => {
      try {
        await initializeSession({ refetch: true });
        router.push("/dashboard");
      } catch (error) {
        await clearSession();
        router.push("/login");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <IonPage />;
};

export default Index;
