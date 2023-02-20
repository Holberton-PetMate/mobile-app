import { PropsWithoutRef } from "react";
import "../styles/components/alert.css";
import { Small } from "./fonts";

interface AlertProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
	model: boolean;
	closeModel: () => void;
	title: string;
	body: string;
	primaryButtonText: string;
	secondaryButtonText?: string;
	onClickPrimaryButton: () => void;
	onClickSecondaryButton?: () => void;
}

const Alert = ({
	model,
	closeModel,
	title,
	body,
	primaryButtonText,
	secondaryButtonText,
	onClickPrimaryButton,
	onClickSecondaryButton,
	...rest }: AlertProps) => {
	return (
		<>
			{model && (
				<div className="alertOverlay" onClick={closeModel}>
					<div
						className="alertContainer"
						onClick={(e) => e.stopPropagation()}
						{...rest}
					>
						<div className="text-container">
							<h3 className="title">{title}</h3>
							<Small>{body}</Small>
						</div>

						<div className="buttons-container">
							<button className="primaryButton" onClick={onClickPrimaryButton}>{primaryButtonText}</button>
							{secondaryButtonText && (
								<button className="secondaryButton" onClick={onClickPrimaryButton}>{secondaryButtonText}</button>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Alert;