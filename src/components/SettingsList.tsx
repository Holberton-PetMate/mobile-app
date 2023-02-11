import SettingsCard from "./SettingsCard";
import "../styles/components/settingsList.css";
import H3 from "./fonts/H3";
import RoundedButton from "./RoundedButton";


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
				<H3 otherClasses="schedule-h3">Schedule</H3>
				<H3 otherClasses="quantity-h3">Quantity</H3>
			</div>
			{settings.map(item => (
				<SettingsCard 
					time={item.time}
					quantity={item.quantity}
					key={item.time}
				/>
			))}
			<RoundedButton />
		</div>
	);
};

export default SettingsList;
