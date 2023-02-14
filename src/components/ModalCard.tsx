import { PropsWithoutRef } from "react";
import "../styles/components/modalCard.css";
import H3 from "./fonts/H3";

interface ModalCardProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
	action?: "create" | "update";
	title?: string
}

const ModalCard = ({ action, title, children, ...rest }:ModalCardProps) => {

	return (
		<div className="general-container" { ...rest }>
			<div className="grey-line"></div>
			<div className="action-title">
				<H3>{title}</H3>
			</div>
			{children}
			<button className="action-buttom">
				{action}
			</button>
		</div>
	);
};

export default ModalCard;