import SettingsCard from "./SettingsCard";
import "../styles/components/settingsList.css";
import H3 from "./fonts/H3";

const SettingsList = () => {
	const settings = [
		{
			time: "10:00 hs.",
			quantity: "80 gr."
		},
		{
			time: "15:00 hs.",
			quantity: "100 gr."
		},
		{
			time: "22:00 hs.",
			quantity: "70 gr."
		}
	];

	return (
		<div className="settingsList">
			<div className="titleHedingsSettings">
				<H3 otherClasses="schedule">Schedule</H3>
				<H3 otherClasses="quantity">Quantity</H3>
			</div>
			{settings.map(item => (
				<SettingsCard
					time={item.time}
					quantity={item.quantity}
					key={item.time}
				/>
			))}
		</div>
	);
};

export default SettingsList;
