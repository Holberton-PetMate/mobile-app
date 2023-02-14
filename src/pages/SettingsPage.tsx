import SettingsList from "../components/SettingsList";
import PageHeading from "../components/PageHeading";
import ModalCard from "../components/ModalCard";
import { TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";

const SettingsPage: React.FC = () => {
	const [time, setTime] = useState<string>(dayjs().format("HH:mm"));
	const [quantity, setQuantity] = useState<number | null>(null);
	const [createModalState, setCreateModalState] = useState<boolean>(false);

	const validateQuantity = (e: any) => {
		const value = e.target.value;
		setQuantity(value)
		if (value === undefined) return
		if (value < 0) {
			e.target.value = 0;
		} else if (value > 500) {
			e.target.value = 500;
		}
	}

	const onSubmit = () => {
		console.log({
			time,
			quantity
		})
	}

	return (
		<>
			<PageHeading backUrl="/my-petmates" title="Settings" />
			<SettingsList />
			<ModalCard
				isActive={createModalState}
				action="create"
				title="New feeding time"
				onSubmit={onSubmit}
				style={{ minHeight: "350px" }}
			>
				<TextField
					defaultValue={time}
					className="time"
					label="Alarm clock"
					type="time"
					InputLabelProps={{ shrink: true }}
					onChange={(e: any) => setTime(e.target.value)}
					// 5 min
					inputProps={{ step: 300 }}
					sx={{ width: "100%", marginBottom: "0.5rem" }}
				/>
				<TextField
					label="Quantity of food"
					defaultValue=""
					id="outlined-start-adornment"
					sx={{ m: 1, width: '100%' }}
					type="number"
					onChange={validateQuantity}
					InputProps={{
						endAdornment: <InputAdornment position="end">gr.</InputAdornment>,
						inputProps: { min: 0, max: 500 }
					}}
				/>
			</ModalCard>
		</>
	);
};

export default SettingsPage;
