import React from 'react';

function Signup() {
  return (
    <>
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-black text-gray-200">
    <h1 className="text-2xl font-black dark:text-white">Join us ;)</h1>
    <form className="p-4 max-w-sm rounded-lg border0 shadow-md sm:p-6 lg:p-8  bg-zinc-700 mt-12" action="">
        <label className="font-semibold text-xs" for="usernameField">Email ID</label>
        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 text-black" type="text"/>
        <label className="font-semibold text-xs mt-3" for="passwordField">Password</label>
        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 text-black"type="password"/>
        <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Login</button>
        <div className="flex mt-6 justify-center text-xs">
            <a className="text-blue-400 hover:text-blue-500" href="#">Forgot Password</a>
            <span className="mx-2 text-gray-300">/</span>
            <a className="text-blue-400 hover:text-blue-500" href="#" >Sign Up</a>
        </div>
    </form>
    </div>
    </>
  )
}

export default Signup;
