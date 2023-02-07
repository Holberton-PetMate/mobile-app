import BottomMenu from "../components/BottomMenu";
import ExploreContainer from "../components/ExploreContainer";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";

const ProgressPage: React.FC = () => {
  return (
    <Layout>
      <PageHeading backUrl="/my-petmates" title="Progress" />
	  <BottomMenu />
      <ExploreContainer name="Progress Page" />
    </Layout>
  );
};

export default ProgressPage;
