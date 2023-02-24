import { FC } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  Scale,
  CoreScaleOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const options = {
  responsive: true,
  scales: {
    x: {
      position: 'bottom' as const,
      ticks: {
        font: {
          size: 15
        },
        callback: function (
          this: Scale<CoreScaleOptions>,
          _tickValue: string | number,
          index: number
        ) {
          return [0, this.ticks.length - 1].includes(index) ? '' : `${labels[index]}`;
        }
      },
      grid: {
        display: false
      }
    },
    yAxis: {
      position: 'right' as const,
      ticks: {
        font: {
          size: 15
        }
      },
      grid: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      display: false,
      position: 'top' as const
    }
  },
  maintainAspectRatio: false
};

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Quantity',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderWidth: 2,
      borderColor: '#2AFD84',
      backgroundColor: '#2afd8426',
      yAxisID: 'yAxis',
      pointRadius: 0
    }
  ]
};

const ChartComponent: FC = () => <Line options={options} data={data} className="aspect-4/3" />;
export default ChartComponent;
