import ExploreContainer from "../components/ExploreContainer";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import { useSessionContext } from "../hooks/useSession";
import "../styles/Tab1.css";

const Tab1: React.FC = () => {
  const { currentUser, currentToken } = useSessionContext();
  return (
    <Layout>
      <PageHeading title={currentUser?.nombre} subtitle="Good morning," />
      <ExploreContainer name={currentUser?.email} />
      {currentToken}
    </Layout>
  );
};

export default Tab1;
