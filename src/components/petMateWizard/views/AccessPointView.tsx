import { H1 } from '../../fonts';
import '../../../styles/pages/createPetMateWizard.css';
import H3 from '../../fonts/H3';
import { PropsWithoutRef } from 'react';

interface AccessPointViewProps
  extends PropsWithoutRef<JSX.IntrinsicElements['div']> {
  nextStep: () => void;
}

const AccessPointView = ({nextStep}:AccessPointViewProps) => {
  return (
    <>
      <img className="petmateLogo" src="/assets/blue.png" alt="capybara"/>
      <div className="formContainer">
        <H1>Connect to this Wifi: </H1>
        <H3 style={{ fontSize:"1.5rem", color:"#EBEBED"}}>PetMate123</H3>
      </div>
    </>
  );
};

export default AccessPointView;
