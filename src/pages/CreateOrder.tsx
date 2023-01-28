import ExploreContainer from "../components/ExploreContainer";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import "../styles/Tab2.css";

const Tab2: React.FC = () => {
  return (
    <Layout>
      <PageHeading title="Crear Pedido" />
      <ExploreContainer name="Crear Pedido page" />
    </Layout>
  );
};

export default Tab2;
