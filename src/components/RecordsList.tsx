import { PropsWithoutRef } from "react";
import RecordsCard from "./RecordsCard";
import { useHistory } from "react-router";
import "../styles/components/recordsList.css";

interface RecordsListProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {

}

const RecordsList = ({}:RecordsListProps) => {
	const history = useHistory();
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
	]
	return (
		<div className="recordsList">
			{records.map(item => (
				<RecordsCard 
					date={item.date}
					notification={item.notification}
					key={item.date}
					onClick={() => history.push("/dashboard/1/progress")}
				/>
			))}
		</div>
	);
};

export default RecordsList;
