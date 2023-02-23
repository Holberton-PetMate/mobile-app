import { H1, Small } from '../../fonts';
import '../../../styles/pages/createPetMateWizard.css';
import H3 from '../../fonts/H3';
import { Dispatch, PropsWithoutRef } from 'react';

interface AccessPointViewProps
  extends PropsWithoutRef<JSX.IntrinsicElements['div']> {
  setPetMateName: Dispatch<React.SetStateAction<string | null>>;
  setFoodType: Dispatch<React.SetStateAction<string | null>>;
}

const AccessPointView = ({
  setPetMateName,
  setFoodType,
}: AccessPointViewProps) => {
  return (
    <>
      <img className="petmateLogo" src="/assets/orange.png" alt="capybara" />
      <div className="formContainer">
        <p>Just one more step...</p>
        <H1>Configure your new PetMate!</H1>
        <div className="petMateNameContainer">
          <p>Name</p>
          <input
            type="petMateName"
            onChange={(e) => setPetMateName(e.target.value)}
          />
        </div>
        <div className="foodTypeContainer">
          <p>Food type</p>
          <select className="foodTypes">
            <option value="Cat Chow Adults">Cat Chow Adults</option>
            <option value="Dog Chow Adults">Dog Chow Adults</option>
            <option value="Kitten Chow">Kitten Chow</option>
            <option value="Pedigree Adult">Pedigree Adult</option>
            <option value="Pedigree Puppy">Pedigree Puppy</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default AccessPointView;
