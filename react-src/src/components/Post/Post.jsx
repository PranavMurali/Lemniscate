import React from 'react'

const Post = () => {
  return (
    <a class="relative block border border-gray-100 ml-40 mt-10" >
    <button
      class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
      type="button"
    >
      <svg class="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    </button>
  
    <Player
      playsInline
      fluid = {false}
      width = {600}
      height = {400}
      poster="/assets/poster.png"
      src="https://firebasestorage.googleapis.com/v0/b/lemniscate-30462.appspot.com/o/jeff%20singh.mp4?alt=media&token=16522121-e56a-41d6-b68b-8815aaf32ea6"
    />
  
    <div class="p-6">
      <strong class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
        New
      </strong>
  
      <h5 class="mt-4 text-lg font-bold text-white">
        Weew Jeff sings
      </h5>
  
      <p class="mt-2 text-sm text-white">
        x Likes
      </p>
  
      <button
        class="w-15 p-4 mt-4 text-sm font-medium bg-yellow-500 rounded-sm content-center"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
      <button
        class="ml-20 w-15 p-4 mt-4 text-sm font-medium bg-yellow-500 rounded-sm content-center"
        type="button"
      >
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
      </button>
    </div>
  </a>
  )
}

export default Post