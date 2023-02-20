import SettingsCard from "./SettingsCard";
import "../styles/components/settingsList.css";
import H3 from "./fonts/H3";
import { PropsWithoutRef } from "react";
import { FeedingTimesProps } from "../lib/FeedingTimes";

interface SettingsListProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
	feedingTimes: FeedingTimesProps[]
}

// const SettingsList = () => {
// 	const settings = [
// 		{
// 			time: "10:00 hs.",
// 			quantity: "80 gr."
// 		},
// 		{
// 			time: "15:00 hs.",
// 			quantity: "100 gr."
// 		},
// 		{
// 			time: "22:00 hs.",
// 			quantity: "70 gr."
// 		}
// ];

const SettingsList = ({ feedingTimes }: SettingsListProps) => {
	return (
		<div className="settingsList">
			<div className="titleHedingsSettings">
				<H3 otherClasses="schedule">Schedule</H3>
				<H3 otherClasses="quantity">Quantity</H3>
			</div>
			{feedingTimes.map(item => (
				<SettingsCard
					hour={item.hour}
					minutes ={item.minute}
					quantity={item.weight}
					key={item.id}
				/>
			))}
		</div>
	);
};

export default SettingsList;
