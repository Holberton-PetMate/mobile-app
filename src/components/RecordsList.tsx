import RecordsCard from "./RecordsCard";
import "../styles/components/recordsList.css";
import H3 from "./fonts/H3";

const RecordsList = () => {
	const records = [
		{
			date: "08-02-2023 15:34:00",
			notification: "Empty stock"
		},
		{
			date: "08-02-2023 15:30:00",
			notification: "Food dispensed ok"
		},
		{
			date: "08-02-2023 15:25:00",
			notification: "Full stock"
		}
	];

	return (
		<div className="recordsList">
			<div className="titleHedings">
				<H3>Date</H3>
				<H3>Notification</H3>
			</div>
			{records.map(item => (
				<RecordsCard 
					date={item.date}
					notification={item.notification}
					key={item.date}
				/>
			))}
		</div>
	);
};

export default RecordsList;
