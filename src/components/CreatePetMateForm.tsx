import '../styles/components/createCard.css';

const CreatePetMateForm = () => {
  return (
    <div className="info-container">
        <div className="pic-container">
          {/* <img src="../components/avatar-icon.png" alt="" /> */}
          
        </div>
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
  );
};

export default CreatePetMateForm;
