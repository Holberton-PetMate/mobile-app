import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import PetMateList from "../components/PetMateList";
import CreateUserCard from "../components/CreateUserCard";
import '../styles/components/createCard.css';

const MyPetMatesPage: React.FC = () => {
  return (
    <Layout>
      <PageHeading title="My PetMates" />
      <PetMateList />
      <CreateUserCard action="create" title="New PetMate">
        <div className="info-container">
          <div className="data-container">
            <span>Name</span>
            <input></input>
            <span>PetMate ID</span>
            <input></input>
            <span>Food Brand</span>
            <select name="food" id="pet-food">
              <option value="DogChow">DogChow</option>
              <option value="CatChow">CatChow</option>
              <option value="Pedigree">Pedigree</option>
            </select>
          </div>
          <div className="pic-container">
            {/* <img src="../components/avatar-icon.png" alt="" /> */}
          </div>
        </div>
      </CreateUserCard>
    </Layout>
  );
};

export default MyPetMatesPage;
