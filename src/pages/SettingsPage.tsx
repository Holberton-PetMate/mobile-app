/* eslint-disable react-hooks/exhaustive-deps */
import SettingsList from '../components/SettingsList';
import PageHeading from '../components/PageHeading';
import ModalCard from '../components/ModalCard';
import { TextField, InputAdornment } from '@mui/material';
import { useEffect, useState } from 'react';
import RoundedButton from '../components/RoundedButton';
import { useParams } from 'react-router';
import dayjs from 'dayjs';
import FeedingTimes, { FeedingTimesProps } from '../lib/FeedingTimes';
import { useToastContext } from '../hooks/useToast';
import Loader from '../components/Loader';

const SettingsPage: React.FC = () => {
	const toast = useToastContext();
	const [loading, setLoading] = useState<boolean>(false);

	const [primaryButtonIsDisabled, setPrimaryButtonIsDisabled] = useState<boolean>(true);
	const [time, setTime] = useState<string>(dayjs().format("HH:mm"));
	const [quantity, setQuantity] = useState<number | null>(null);
	const [createModalState, setCreateModalState] = useState<boolean>(false);
	const [feedingTimes, setFeedingTimes] = useState<FeedingTimesProps[]>([]);
	const params = useParams() as any;


	const loadFeedingTimes = async () => {
		try {
			console.log("loading feedingTime")
			setLoading(true);
			const response = await FeedingTimes.get(12);
			setFeedingTimes(response.data as FeedingTimesProps[]);
			setLoading(false);

		} catch (err: any) {
			toast.setToastData({ message: "Error: Something went wrong", status: "error", isActive: true })
			setLoading(false);
		}
	}

	useEffect(() => {
		(async () => await loadFeedingTimes())();
	}, []);

	// Validate form
	useEffect(() => {
		setPrimaryButtonIsDisabled(!time || !quantity);
	}, [time, quantity])

	const validateQuantity = (e: any) => {
		const value = e.target.value;
		setQuantity(value);
		if (value === undefined) return;
		if (value < 0) {
			setQuantity(0);
			e.target.value = 0;
		} else if (value > 500) {
			setQuantity(500);
			e.target.value = 500;
		}
	};

	const onSubmit = async () => {
		try {
			setLoading(true);
			const response = await FeedingTimes.create({
				hour: Number(time.split(":")[0]),
				minute: Number(time.split(":")[1]),
				weight: quantity as number,
				feeder_id: params.petmate_id
			});
			console.log(response);
			setCreateModalState(false);
			setLoading(false);
			await loadFeedingTimes();
		} catch (err: any) {
			setLoading(false);
			toast.setToastData({ message: "Error: Something went wrong", status: "error", isActive: true })
			console.log(err);
		}
	};

	const onDelete = async (feedingTimeId: number) => {
		try {
			setLoading(true);
			await FeedingTimes.delete(feedingTimeId);
			await loadFeedingTimes();
			setLoading(false);
		} catch (err: any) {
			setLoading(false);
			toast.setToastData({ message: "Error: Something went wrong", status: "error", isActive: true })
			console.log(err);
		}
	};

	return (
		<>
			{loading && <Loader />}
			<PageHeading backUrl="/my-petmates" title="Settings" />
			<SettingsList feedingTimes={feedingTimes} onDelete={onDelete} />
			<div className="roundedButtonContainer">
				<RoundedButton onClick={() => setCreateModalState(true)} />
			</div>

			{/* Create FeedingTime Form */}
			<ModalCard
				isActive={createModalState}
				action="create"
				title="New feeding time"
				onSubmit={onSubmit}
				closeModal={() => setCreateModalState(false)}
				style={{ minHeight: '350px' }}
				primaryButtonIsDisabled={primaryButtonIsDisabled}
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
					sx={{ width: '100%', marginBottom: '0.5rem' }}
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
						inputProps: { min: 0, max: 500 },
					}}
				/>
			</ModalCard>
		</>
	);
};

export default SettingsPage;
