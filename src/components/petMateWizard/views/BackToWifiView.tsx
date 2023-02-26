import { H1 } from '../../fonts';
import '../../../styles/pages/createPetMateWizard.css';
import { PropsWithoutRef } from 'react';

interface BackToWifiViewProps
	extends PropsWithoutRef<JSX.IntrinsicElements['div']> {
	codeId: string | null;
}

const BackToWifiView = ({ codeId }: BackToWifiViewProps) => {
	return (
		<>
			<img className="petmateLogo" src="/assets/blue.png" alt="capybara" />
			<div className="formContainer">
				<H1>Connect back to your home Wifi</H1>
			</div>
		</>
	);
};

export default BackToWifiView;
