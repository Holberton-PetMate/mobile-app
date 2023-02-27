import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
} from 'chart.js';
import dayjs from 'dayjs';
import { FeedingRecord } from '../lib/FeedingRecords';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
interface StatProps {
	feedingRecords: FeedingRecord[]
}

const Stat = ({ feedingRecords }: StatProps) => {

	const data = {
		labels: ["0hs", "4hs", "8hs", "12hs", "16hs", "20hs"],
		datasets: [
			{
				data: [0, 0, 0, 0, 0, 0],
				backgroundColor: 'transparent',
				borderColor: '#fb6e1f',
				pointBorderColor: 'transparent',
			},
		],
	}

	const map: { [key: number]: number } = {
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
	}

	feedingRecords.forEach((record) => {
		const index = Math.floor(Number(dayjs(record.date).format("HH")) / 4);
		let value = record.weight;
		if (Object.keys(map).includes(index.toString()))
			value += map[index];
		map[index] = value;
	});

	data.datasets[0].data = Object.values(map) as never[];

	const options = {
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			x: {
				grid: {
					display: false,
				},
			},
			y: {
				min: 0,
				max: 300,
				ticks: {
					stepSize: 50,
					callback: (value: any) => value + 'gr.',
				},
				grid: {
					tickBorderDash: [10],
				},
			},
		},
	};

	return (
		<Line data={data} options={options} />
	);
};

export default Stat;
