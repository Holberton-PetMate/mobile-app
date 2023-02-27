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
import Loader from '../components/Loader';
import Feeders from '../lib/Feeder';
import { useToastContext } from '../hooks/useToast';
import Toast from '../components/Toast';
import BackToWifiView from '../components/petMateWizard/views/BackToWifiView';
import User from '../lib/User';

const CreatePetMateWizard: React.FC = () => {
	const history = useHistory();
	const toast = useToastContext();

	const [codeId, setCodeId] = useState<string | null>(null);
	const [feederId, setFeederId] = useState<number | null>(12);
	const [feederName, setFeederName] = useState<string | null>(null);
	const [feederFoodId, setFeederFoodId] = useState<number | null>(null);

	const [step, setStep] = useState<number>(1);
	const [loading, setLoading] = useState<boolean>(false);
	const [nextButtonDisabled, setNextButtonDisabled] = useState<boolean>(true);
	const [networks, setNetworks] = useState<WifiProps[]>([]);
	const [wifiSsid, setWifiSsid] = useState<string | null>(null);
	const [wifiPassword, setWifiPassword] = useState<string | null>(null);

	useEffect(() => {									
		console.log(feederFoodId)
	}, [feederFoodId])

	const check_redeemed = async () => {
		try {
			setLoading(true);
			const response = await Feeders.check_redeemed(codeId as string);
			setFeederId(response.data.id);
			setStep(step + 1);
			setNextButtonDisabled(true);
			setLoading(false);
		} catch (err: any) {
			setLoading(false)
			toast.setToastData({ message: "Error: invalid code", status: "error", isActive: true })
		}
	}

	const getNetworksWifi = async () => {
		try {
			setLoading(true);
			const response = await ArduinoApi.getNetworks();
			setNetworks(response.data as WifiProps[]);
			setStep(step + 1);
			setNextButtonDisabled(true);
			setLoading(false);
		} catch (err: any) {
			toast.setToastData({ message: "Error: Connection failed", status: "error", isActive: true })
			setLoading(false);
		}
	};

	const selectWifiSsid = (ssid: string | null) => {
		setWifiSsid(ssid);
		nextStep();
	};

	const sendCredentials = async () => {
		try {
			setLoading(true);
			await ArduinoApi.setWifi({ ssid: wifiSsid, password: wifiPassword, rssi: null });
			setStep(step + 1);
			setNextButtonDisabled(true);
			setLoading(false);
		} catch (err: any) {
			setLoading(false);
		}
	}

	const redeemFeeder = async () => {
		try {
			setLoading(true);
			await User.redeem_feeder({
				user_id: 2,
				feeder_id: feederId as number,
				feeder_name: feederName as string,
				feeder_food_id: feederFoodId as number,
			});
			history.push({ pathname: "/my-petmates" })
			setNextButtonDisabled(true);
			setLoading(false);
		} catch (err: any) {
			toast.setToastData({ message: err.message, status: "error", isActive: true })
			setLoading(false);
		}
	}

	const nextStep = async () => {
		if (step === 1) {
			await check_redeemed();
			return;
		}

		if (step === 2) {
			await getNetworksWifi();
			return;
		}

		if (step === 4) {
			await sendCredentials();
			return;
		}
		if (step === 6) {
			await redeemFeeder();
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

	useEffect(() => {
		if (step === 1) setNextButtonDisabled(codeId?.length !== 6 || !codeId);
	}, [codeId]);

	useEffect(() => {
		if (step === 4) setNextButtonDisabled(!wifiPassword || wifiPassword?.length < 8);
	}, [wifiPassword]);

	// When we go to the next view
	useEffect(() => {
		if (step === 2 || step === 5) setTimeout(() => setNextButtonDisabled(false), 5000);
	}, [step]);

	useEffect(() => {
		if (step === 6) setNextButtonDisabled(!feederName);
	}, [feederName]);




	return (
		<Layout>
			<Toast />
			{loading && <Loader />}
			<div className="wizardContainer">
				<div className="topToolsContainer">
					<Small onClick={cancel}>Cancel</Small>
				</div>

				{/* Stepper */}
				{step === 1 && <InsertCodeView setCodeId={setCodeId} />}
				{step === 2 && <AccessPointView codeId={codeId} />}
				{step === 3 && <WifiListView networkList={networks} selectWifiSsid={selectWifiSsid} />}
				{step === 4 && (
					<PasswordView
						setWifiPassword={setWifiPassword}
					/>
				)}
				{step === 5 && <BackToWifiView codeId={codeId} />}
				{step === 6 && <NewPetMateView setPetMateName={setFeederName} setFeederFoodId={setFeederFoodId} />}

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
