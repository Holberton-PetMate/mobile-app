import BottomMenu from "../components/BottomMenu";
import RecordsList from "../components/RecordsList";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";

const RecordsPage: React.FC = () => {
  return (
    <Layout>
      <PageHeading backUrl="/my-petmates" title="Records"/>
	  <RecordsList />
	  <BottomMenu />
    </Layout>
  );
};

export default RecordsPage;
