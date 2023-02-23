/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import '../styles/pages/createPetMateWizard.css';
import { useHistory } from 'react-router';
import InsertCodeView from '../components/petMateWizard/views/InsertCodeView';
import AccessPointView from '../components/petMateWizard/views/AccessPointView';
import WifiListView from '../components/petMateWizard/views/WifiListView';
import NewPetMateView from '../components/petMateWizard/views/NewPetMateView';
import Layout from '../components/Layout';
import PasswordView from '../components/petMateWizard/views/PasswordView';
import { Small } from '../components/fonts';
import { ChevronRight } from '../components/Icons';
import ArduinoApi, { WifiProps } from "../lib/Arduino";

const CreatePetMateWizard: React.FC = () => {
	const history = useHistory();
	const [step, setStep] = useState<number>(1);
	const [codeId, setCodeId] = useState<string | null>(null);
	const [wifiSsid, setWifiSsid] = useState<string | null>(null);
	const [wifiPassword, setWifiPassword] = useState<string | null>(null);
	const [petMateName, setPetMateName] = useState<string | null>(null);
	const [foodType, setFoodType] = useState<string | null>(null);

	const [nextButtonDisabled, setNextButtonDisabled] = useState<boolean>(true);

  const [networks, setNetworks] = useState<WifiProps[]>([]);

  const getNetworksWifi = async () => {
    const response = await ArduinoApi.getNetworks();
    setNetworks(response.data as WifiProps[]);
  };

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

	useEffect(() => {
		if (step === 5) setNextButtonDisabled(!petMateName);
	}, [petMateName]);

  const selectWifiSsid = (ssid: string | null) => {
    setWifiSsid(ssid);
    nextStep();
  };

  const nextStep = async () => {
    if (step === 2) {
      await getNetworksWifi();
    }
    if (step === 4) {
      const response = ArduinoApi.setWifi({ ssid: wifiSsid, password: wifiPassword, rssi: null });
      console.log(response);
      return;
    }
    if (step === 5) {
      history.push({ pathname:"/my-petmates"})
      
      return
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
        {step === 2 && <AccessPointView codeId={codeId} />}
        {step === 3 && <WifiListView networkList={networks} selectWifiSsid={selectWifiSsid} />}
        {step === 4 && (
          <PasswordView
            setWifiPassword={setWifiPassword}
          />
        )}
        {step === 5 && <NewPetMateView  setPetMateName={setPetMateName} setFoodType={setFoodType} />}

				{
					step !== 3 && (
						<div className="buttonsContainer">
							<button
								className="primaryButton"
								disabled={nextButtonDisabled}
								onClick={nextStep}
							>
								Next <ChevronRight />
							</button>
						</div>
					)
				}
			</div >
		</Layout >
	);
};

export default CreatePetMateWizard;
