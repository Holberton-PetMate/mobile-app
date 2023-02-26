import SettingsCard from "./SettingsCard";
import "../styles/components/settingsList.css";
import H3 from "./fonts/H3";
import { PropsWithoutRef } from "react";
import { FeedingTimesProps } from "../lib/FeedingTimes";

interface SettingsListProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
	feedingTimes: FeedingTimesProps[],
	onDelete: (id: number) => void;
}

const SettingsList = ({ feedingTimes, onDelete }: SettingsListProps) => {
	return (
		<div className="settingsList">
			<div className="titleHedingsSettings">
				<H3 otherClasses="schedule">Schedule</H3>
				<H3 otherClasses="quantity">Quantity</H3>
			</div>
			{feedingTimes.map(item => (
				<SettingsCard
					feedingTimeId={item.id}
					hour={`${item.hour < 10 ? "0" : ""}${item.hour}`}
					minutes={`${item.minute < 10 ? "0" : ""}${item.minute}`}
					quantity={item.weight}
					key={item.id}
					onDelete={onDelete}
				/>
			))}
		</div>
	);
};

export default SettingsList;
