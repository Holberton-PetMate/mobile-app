import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import PetMateList from '../components/PetMateList';
import ModalCard from '../components/ModalCard';
import CreatePetMateForm from '../components/CreatePetMateForm';
import RoundedButton from '../components/RoundedButton';
import '../styles/pages/MyPetMates.css';
import Feeders from '../lib/Feeder';

const MyPetMatesPage: React.FC = () => {
  const [name, setName] = useState<string | null>(null);
  const [code_id, setCode_id] = useState<string | null>(null);
  const [food, setFood] = useState<number | null>(null);
  const [createModalState, setCreateModalState] = useState<boolean>(false);

  const onSubmit = () => {
    console.log({
      name,
      code_id,
      food,
    });
    Feeders.storeFeeders({name, code_id, active_food:food});
  };
  return (
    <Layout>
      <PageHeading title="My PetMates" />
      <PetMateList />
      <div className="roundedButtonContainer">
        <RoundedButton onClick={() => setCreateModalState(true)} />
      </div>
      <ModalCard
        isActive={createModalState}
        action="create"
        title="New PetMate"
        onSubmit={onSubmit}
        closeModal={() => setCreateModalState(false)}
        style={{ minHeight: '600px' }}
      >
        <CreatePetMateForm
          setName={setName}
          setPetMateId={setCode_id}
          setFood={setFood}
        />
      </ModalCard>
    </Layout>
  );
};

export default MyPetMatesPage;
