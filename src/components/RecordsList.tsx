import RecordsCard from "./RecordsCard";
import "../styles/components/recordsList.css";
import H3 from "./fonts/H3";
import dayjs from 'dayjs';

var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat);

// to check the actual date and compare with every string "date"...
//const today = new Date();

const RecordsList = () => {
	const records = [
		{
			date: (dayjs("08-02-2023 15:34:00").format("dddd, MMM D - h:mm A")).toString(),
			notification: "Empty stock"
		},
		{
			date: (dayjs("08-02-2023 15:30:00").format("dddd, MMM D - h:mm A")).toString(),
			notification: "Food dispensed ok"
		},
		{
			date: (dayjs("08-02-2023 15:25:00").format("dddd, MMM D - h:mm A")).toString(),
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
