/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import PageHeading from '../components/PageHeading';
import Stat from '../components/Stat';
import H3 from '../components/fonts/H3';
import '../styles/pages/progressPage.css';

import {
	CircularProgressbar,
	buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import dayjs from 'dayjs';
import { useToastContext } from '../hooks/useToast';
import FeedingRecords, { FeedingRecord } from '../lib/FeedingRecords';
import Loader from '../components/Loader';
import Feeder, { FeederProps } from '../lib/Feeder';
import { useParams } from 'react-router';

const ProgressPage: React.FC = () => {
	const params = useParams() as any;
	const toast = useToastContext();
	const [loading, setLoading] = useState<boolean>(false);
	const today: string = dayjs().format("YYYY-MM-DD");
	const tomorrow: string = dayjs().add(1, "day").format("YYYY-MM-DD");
	const [feedingRecords, setFeedingRecords] = useState<FeedingRecord[]>([]);
	const [currentFeeder, setCurrentFeeder] = useState<FeederProps | null>(null);

	const loadFeedingRecords = async () => {
		try {
			setLoading(true);
			const response = await FeedingRecords.index({
				feeder_id: 12,
				mode: "output",
				startDate: today,
				endDate: tomorrow
			});
			setFeedingRecords(response.data as FeedingRecord[]);
			setLoading(false);
		} catch (err: any) {
			toast.setToastData({ message: "Error: Something went wrong", status: "error", isActive: true })
			setLoading(false);
		}
	}

	const getCurrentFeeder = async () => {
		try {
			setLoading(true);
			const response = await Feeder.show(params.petmate_id);
			setCurrentFeeder(response.data as FeederProps);
			setLoading(false);
		} catch (err: any) {
			toast.setToastData({ message: "Error: Something went wrong", status: "error", isActive: true })
			setLoading(false);
		}
	}

	useEffect(() => {
		(async () => {
			await loadFeedingRecords();
			await getCurrentFeeder();
		})();
	}, [])

	return (
		<>
			{loading && <Loader />}
			<PageHeading backUrl="/my-petmates" title="Progress" />
			<div className="progressSelector">
				<button className="todayButton">
					<span>Today</span>
				</button>
				<button className="weekButton">
					<span>Week</span>
				</button>
			</div>

			<div className="dietChartContainer">
				<H3>Diet</H3>
				<div className="dietChart">
					<Stat feedingRecords={feedingRecords} />
				</div>
			</div>

			<div className="stockContainer">
				<H3>Stock Status</H3>
				<div>
					<CircularProgressbar
						value={currentFeeder?.food_storage || 0}
						text={`${currentFeeder?.food_storage || 0}%`}
						circleRatio={0.75}
						styles={
							buildStyles({
								rotation: 1 / 2 + 1 / 8,
								strokeLinecap: "butt",
								trailColor: "#ccc",
								pathColor: "#FB6E1F",
								textColor: "#000"
							})
						}
					/>
				</div>


				{/* <div className="foodStatus">
          <H3>Food status</H3>
          <div className="foodStock">
            <div className="food"></div>
          </div>
          <span>50%</span>
        </div>
        <div className="bowlStatus">
          <H3>Bowl Status</H3>
          <div className="bowlStock">
            <div className="bowl"></div>
          </div>
          <span>30%</span>
        </div> */}
			</div>
		</>
	);
};

export default ProgressPage;
