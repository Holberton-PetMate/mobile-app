import { PropsWithoutRef } from 'react';
import '../styles/components/modalCard.css';
import H3 from './fonts/H3';

interface ModalCardProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
	action?: "create" | "update";
	title?: string;
	isActive: boolean;
	onSubmit?: () => void
	closeModal?: () => void
}

const ModalCard = ({ action, title, isActive, onSubmit, closeModal, children, ...rest }: ModalCardProps) => {
	return (
		<div className={`general-container 
			${isActive ? "show" : ""}`} {...rest}>
			<div className="grey-line" onClick={closeModal}></div>
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
