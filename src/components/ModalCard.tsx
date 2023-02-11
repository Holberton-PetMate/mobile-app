import { PropsWithoutRef } from "react";
import "../styles/components/modalCard.css";
import H3 from "./fonts/H3";

interface ModalCardProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
	action: "Create" | "Update";
	title: "New feeding time" | "Update feeding time"
}

const ModalCard = ({ action, title, children }:ModalCardProps) => {
	return (
		<div className="general-container">
			<div className="grey-line"></div>
			<div className="action-title">
				<H3>New feeding time</H3>
			</div>
			{children}
			<button className="action-buttom">
				Create
			</button>
		</div>
	);
};

export default ModalCard;