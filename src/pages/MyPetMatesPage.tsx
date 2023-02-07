import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import PetMateList from "../components/PetMateList";

const MyPetMatesPage: React.FC = () => {
  return (
    <Layout>
      <PageHeading title="My PetMates" />
	    <PetMateList />
    </Layout>
  );
};

export default MyPetMatesPage;
