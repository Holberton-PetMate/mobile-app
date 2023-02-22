import { Dispatch, PropsWithoutRef } from 'react';
import { H1 } from '../../fonts';

interface PasswordViewProps
  extends PropsWithoutRef<JSX.IntrinsicElements['div']> {
  setWifiPassword: Dispatch<React.SetStateAction<string | null>>;
}

const PasswordView = ({ setWifiPassword }: PasswordViewProps) => {
  return (
    <>
      <img className="petmateLogo" src="/assets/blue.png" alt="logo"></img>
      <div className="formContainer">
        <H1>Enter password:</H1>
        <input 
            type="password"
            style={{fontSize: "32px", padding: "0.125rem 1rem" }} 
            onChange={(e) => setWifiPassword(e.target.value)}
        />
      </div>
    </>
  );
};

export default PasswordView;
