import BottomMenu from "../components/BottomMenu";
import ExploreContainer from "../components/ExploreContainer";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";

const SettingsPage: React.FC = () => {
  return (
    <Layout>
      <PageHeading backUrl="/my-petmates" title="Settings" />
	  <BottomMenu />
      <ExploreContainer name="Settings page" />
    </Layout>
  );
};

export default SettingsPage;
