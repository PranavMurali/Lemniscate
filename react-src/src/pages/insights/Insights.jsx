import React from 'react';

function Insights() {
    var colors = [""];
  return (
    
<section class=" w-screen text-white bg-gray-900">
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="max-w-xl">
      <h2 class="text-4xl font-bold sm:text-6xl">
        <span className='w-full text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>{colors[Math.floor(Math.random()*colors.length)]}</span>
      </h2>

      <p class="mt-4 sm:text-xl">
        Let's find out what you've been upto lately.
      </p>
    </div>

    <ul class="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
      <li class="p-8 shadow-xl rounded-xl">
        <p class="text-3xl font-extrabold">X</p>
        <p class="mt-1 text-xl font-medium">Hours played</p>
      </li>

      <li class="p-8 shadow-xl rounded-xl">
        <p class="text-3xl font-extrabold">Y</p>
        <p class="mt-1 text-xl font-medium">Games Played</p>
      </li>

      <li class="p-8 shadow-xl rounded-xl">
        <p class="text-3xl font-extrabold">Z</p>
        <p class="mt-1 text-xl font-medium">Platforms</p>
      </li>
    </ul>
  </div>
</section>

  
  );
  
}

export default Insights;
