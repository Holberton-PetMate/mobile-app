import { useHistory } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import { useSessionContext } from "../hooks/useSession";
import "../styles/Tab3.css";

const Tab3: React.FC = () => {
  const { clearSession } = useSessionContext();
  const router = useHistory();
  return (
    <Layout>
      <PageHeading title="Ajustes" />
      <ExploreContainer name="Ajustes page" />
      <button
        onClick={() => {
          clearSession();
          router.push("/login");
        }}
      >
        Log out
      </button>
    </Layout>
  );
};

export default Tab3;
