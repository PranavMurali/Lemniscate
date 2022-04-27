import React  from 'react'
import { authentication } from "../../firebase-config";
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {useNavigate} from "react-router-dom";
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

function Login(){
    const history =useNavigate();
    const user = authentication.currentUser;
    const signInWithGoogle = (event) => {
        event.preventDefault();
        const provider = new GoogleAuthProvider();    
        signInWithPopup(authentication, provider)
        .then((result) => {
            const user = result.user;
            history('/');
        })
        .catch((error) => {
            console.log(error);
        });
    }
    return (
        <>
        {user ?   
        <>
        <div>
            <h1 className='ml-20 text-white'>Welcome {user.displayName}</h1>
            <img className='ml-20' src={user.photoURL} alt=""/>
        </div>
        <div className='w-full h-1/2'>
        <Line options={options} data={data} />
        </div>
</>
        
        :
        
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-black text-gray-200">
        <h1 className="text-2xl font-black dark:text-white py-4">Welcome Back :)</h1>
            <button >
            </button>
            <button className="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400" onClick={signInWithGoogle}>
            <svg className="w-4 h-4 mr-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="black" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                <span className="relative px-6 py-2.5 transition-all ease-in duration-75 text-black rounded-md group-hover:bg-opacity-0">
                    Google Sign-in
                </span>
            </button>
        </div>
        }
        </>
    )
}

export default Login;