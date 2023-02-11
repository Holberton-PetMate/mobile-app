import { useMemo } from "react";
import { useHistory } from "react-router";
import { IonContent, IonPage } from "@ionic/react";
import BottomMenu from "../components/BottomMenu";
import SettingsPage from "../pages/SettingsPage";
import ProgressPage from "../pages/ProgressPage";
import RecordsPage from "../pages/RecordsPage";

const BottomMenuLayout = () => {

	const history = useHistory();
	const pagesComponents: any = {
		"settings": () => <SettingsPage />,
		"progress": () => <ProgressPage />,
		"records": () => <RecordsPage />,
	}
	const pageName = useMemo(
		() => history.location.pathname.split("/")[3], 
		[history.location.pathname]);

	// useEffect(() => {
	// 	console.log(pageName)
	// }, [pageName])
	

  return (
	<IonPage>
      <IonContent>
			{pagesComponents[pageName] && pagesComponents[pageName]()}
			<BottomMenu />
      </IonContent>
    </IonPage>
  );
};

export default BottomMenuLayout;