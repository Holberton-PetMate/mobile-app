import { H1 } from '../../fonts';
import '../../../styles/pages/createPetMateWizard.css';
import H3 from '../../fonts/H3';
import { Dispatch, PropsWithoutRef } from 'react';

interface AccessPointViewProps
  extends PropsWithoutRef<JSX.IntrinsicElements['div']> {
  codeId: string | null;
}

const AccessPointView = ({codeId}:AccessPointViewProps) => {
  return (
    <>
      <img className="petmateLogo" src="/assets/blue.png" alt="capybara"/>
      <div className="formContainer">
        <H1>Connect to this Wifi: </H1>
        <H3 style={{ fontSize:"1.5rem", color:"#EBEBED"}}>PetMate-{codeId?.substr(codeId.length - 4)}</H3>
      </div>
    </>
  );
};

export default AccessPointView;
