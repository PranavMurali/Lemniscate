import {React} from 'react'
import {useStateValue} from '../../StateProvider'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Average Play Time Apex Legends',
    },
  },
};

export const options1 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Average Play Time CSGO',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Pranav Murali',
      data: [30,32,28,40,45,23,25,30,34,56,43,50],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Average',
      data: [90,122,89,60,99,113,116,97,98,104,101,170],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const data1 = {
  labels,
  datasets: [
    {
      label: 'Pranav Murali',
      data: [20,80,30,50,10,60,99,100,103,40,12,0],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Average',
      data: [100,50,20,30,100,60,78,23,320,80,30,56],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


function Home(){
  const [{user}, dispatch] = useStateValue();
  return (
    <>
    {user ? 
    <>
    <h1 className="ml-20 text-4xl font-extrabold leading-none tracking-normal text-white md:text-6xl md:tracking-tight">
          Your top Games this week
    </h1>
      <div className="p-5 h-max w-6/12 -ml-6 mt-16 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="h-max w-full">
        <Line options={options} data={data} />
        </div>
      </div>
      <div className=" p-5 h-max w-6/12 ml-4 mt-16 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="h-max w-full">
        <Line options={options1} data={data1} />
        </div>
      </div>

    </> : 
    <>
      <section className="px-4 py-24 mx-auto max-w-7xl">
      <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-white md:text-6xl md:tracking-tight">
          All your <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Games</span> in one single place.
        </h1>
        <p className="px-0 mb-6 text-lg text-gray-200 md:text-xl lg:px-24">
          Lemniscate is a platform that allows you to track all your game activity in one place and share it with your friends, along with your best moments in game and out.
        </p>
        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
        <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Get Started
        </button>
        </div>
      </div>
    </section>
    </>}
      
    </>
    )
}

export default Home;