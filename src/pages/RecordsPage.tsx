import BottomMenu from "../components/BottomMenu";
import ExploreContainer from "../components/ExploreContainer";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";

const RecordsPage: React.FC = () => {
  return (
    <Layout>
      <PageHeading backUrl="/my-petmates" title="Records"/>
	  <BottomMenu />
      <ExploreContainer name="Records Page"/>
    </Layout>
  );
};

export default RecordsPage;
