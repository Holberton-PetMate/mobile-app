import ExploreContainer from "../components/ExploreContainer";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import "../styles/Tab3.css";

const Clients: React.FC = () => {
  return (
    <Layout>
      <PageHeading title="Clientes" />
      <ExploreContainer name="Pagina de Clientes" />
    </Layout>
  );
};

export default Clients;
