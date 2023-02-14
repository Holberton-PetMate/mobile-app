import { PropsWithoutRef } from 'react';
import '../styles/components/modalCard.css';
import H3 from './fonts/H3';

interface ModalCardProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
	action?: "create" | "update";
	title?: string
	onSubmit?: () => void
}

const ModalCard = ({ action, title, onSubmit, children, ...rest }: ModalCardProps) => {
	return (
		<div className="general-container" {...rest}>
			<div className="grey-line"></div>
			<div className="action-title">
				<H3>{title}</H3>
			</div>
			<div className="childrenContainer">
				{children}
			</div>
			<div className="buttonsContainer">
				<button className="action-buttom" onClick={onSubmit}>
					{action}
				</button>
			</div>
		</div>
	);
};

export default ModalCard;
