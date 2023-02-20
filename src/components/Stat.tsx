import { PropsWithoutRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);


interface StatProps extends PropsWithoutRef<JSX.IntrinsicElements['div']> {}

const Stat = () => {
  const data = {
    labels: ['8 hs.', '9 hs.', '10 hs.', '11 hs.', '12 hs.'],
    datasets: [
      {
        data: [30, 20, 20, 50, 30],
        backgroundColor: 'transparent',
        borderColor: '#fb6e1f',
        pointBorderColor: 'transparent',
      },
    ],
  };
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
        max: 100,
        ticks: {
          stepSize: 20,
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
