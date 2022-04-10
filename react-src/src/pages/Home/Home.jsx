import {React} from 'react'
import { authentication } from "../../firebase-config";

function Home(){
  const user = authentication.currentUser;
  return (
    <>
    {user ? 
    <>

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