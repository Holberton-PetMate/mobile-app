import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import PetMateList from "../components/PetMateList";
import ModalCard from "../components/ModalCard";
import CreatePetMateForm from "../components/CreatePetMateForm";

const MyPetMatesPage: React.FC = () => {
  return (
    <Layout>
      <PageHeading title="My PetMates" />
      <PetMateList />
      <ModalCard action="create" title="New PetMate" style={{minHeight: "600px"}}>
        <CreatePetMateForm />
      </ModalCard>
    </Layout>
  );
};

export default MyPetMatesPage;
