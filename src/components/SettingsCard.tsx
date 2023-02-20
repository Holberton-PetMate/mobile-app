import { PropsWithoutRef, useState } from "react";
import "../styles/components/settingsCard.css";
import { Small } from "./fonts";
import { Delete } from "./Icons";
import Alert from "./Alert";


interface SettingsCardProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
	hour: number;
	minutes: number;
	quantity: number
}

const SettingsCard = ({ hour, minutes, quantity }: SettingsCardProps) => {
	const [deleteAlert, setDeleteAlert] = useState<boolean>(false);

	return (
		<>
			<div className="settingsCard">
				<Small otherClasses="schedule">
					{hour}:{minutes}
				</Small>
				<Small otherClasses="quantity">{quantity}gr.</Small>
				<div className="toolsContainer">
					<Delete className="delete-icon" onClick={() => setDeleteAlert(true)} />
				</div>
			</div>
			<Alert
				model={deleteAlert}
				closeModel={() => setDeleteAlert(false)}
				title="Delete schedule"
				body="Are you sure?"
				primaryButtonText="Yes"
				onClickPrimaryButton={() => setDeleteAlert(false)}
				onClickSecondaryButton={() => setDeleteAlert(false)}
				secondaryButtonText="No"
			/>
		</>
	);
};

export default SettingsCard;