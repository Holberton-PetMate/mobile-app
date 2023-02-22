import { Dispatch, PropsWithoutRef } from 'react';
import { H1 } from '../../fonts';

interface InsertCodeViewProps extends PropsWithoutRef<JSX.IntrinsicElements['div']> {
  setCodeId: Dispatch<React.SetStateAction<string | null>>;
}

const InsertCodeView = ({ setCodeId }:InsertCodeViewProps) => {
  return (
    <>
      <img className="petmateLogo" src="/assets/blue.png" alt="logo"></img>
      <div className="formContainer">
        <H1>Enter your PetMate code</H1>
        <input type="text" onChange={(e) => setCodeId(e.target.value)} maxLength={6}/>
      </div>
    </>
  );
};

export default InsertCodeView;