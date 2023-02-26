import { PropsWithoutRef, useState } from "react";
import "../styles/components/settingsCard.css";
import { Small } from "./fonts";
import { Delete } from "./Icons";
import Alert from "./Alert";


interface SettingsCardProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
	feedingTimeId: number;
	hour: string;
	minutes: string;
	quantity: number;
	onDelete: (id: number) => void;
}

const SettingsCard = ({ feedingTimeId, hour, minutes, quantity, onDelete }: SettingsCardProps) => {
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
				onClickPrimaryButton={() => {
					setDeleteAlert(false);
					onDelete(feedingTimeId)

				}}
				onClickSecondaryButton={() => setDeleteAlert(false)}
				secondaryButtonText="No"
			/>
		</>
	);
};

export default SettingsCard;