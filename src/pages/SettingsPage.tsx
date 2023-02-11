import BottomMenu from "../components/BottomMenu";
import SettingsList from "../components/SettingsList";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";

const SettingsPage: React.FC = () => {
  return (
    <Layout>
      <PageHeading backUrl="/my-petmates" title="Settings" />
	  <SettingsList />
    <BottomMenu />
    </Layout>
  );
};

export default SettingsPage;
