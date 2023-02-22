/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import '../styles/pages/createPetMateWizard.css';
import { useHistory } from 'react-router';
import InsertCodeView from '../components/petMateWizard/views/InsertCodeView';
import AccessPointView from '../components/petMateWizard/views/AccessPointView';
import WifiListView from '../components/petMateWizard/views/WifiListView';
import Layout from '../components/Layout';
import PasswordView from '../components/petMateWizard/views/PasswordView';
import { Small } from '../components/fonts';
import { ChevronRight } from '../components/Icons';

const CreatePetMateWizard: React.FC = () => {
  const history = useHistory();
  const [step, setStep] = useState<number>(4);
  const [codeId, setCodeId] = useState<string | null>(null);
  const [wifiSsid, setWifiSsid] = useState<string | null>(null);
  const [wifiPassword, setWifiPassword] = useState<string | null>(null);

  const [nextButtonDisabled, setNextButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (step === 1) setNextButtonDisabled(codeId?.length !== 6 || !codeId);
  }, [codeId]);

  useEffect(() => {
    if (step === 4) setNextButtonDisabled(!wifiPassword || wifiPassword?.length < 8);
  }, [wifiPassword]);

  // When we go to the next view
  useEffect(() => {
    if (step === 2) setTimeout(() => setNextButtonDisabled(false), 5000);
  }, [step]);

  const selectWifiSsid = (ssid: string) => {
    setWifiSsid(ssid);
    nextStep();
  };

  const nextStep = () => {
    if (step === 4) {
      console.log({ codeId, wifiSsid, wifiPassword });
      return;
    }
    setStep(step + 1);
    setNextButtonDisabled(true);
  };

   const cancel = () => {
    setStep(1);
    setCodeId(null);
    setWifiSsid(null);
    setWifiPassword(null);
    setNextButtonDisabled(true);
    history.push('/my-petmates');
   }

  return (
    <Layout>
      <div className="wizardContainer">
        <div className="topToolsContainer">
          <Small onClick={cancel}>Cancel</Small>
        </div>

        {step === 1 && <InsertCodeView setCodeId={setCodeId} />}
        {step === 2 && <AccessPointView nextStep={() => setStep(3)} />}
        {step === 3 && <WifiListView selectWifiSsid={selectWifiSsid} />}
        {step === 4 && (
          <PasswordView
            setWifiPassword={setWifiPassword}
          />
        )}

        {step !== 3 && (
          <div className="buttonsContainer">
            <button
              className="primaryButton"
              disabled={nextButtonDisabled}
              onClick={nextStep}
            >
              Next <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CreatePetMateWizard;
