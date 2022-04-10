import React from 'react'
import { Player } from 'video-react';
import { storage } from '../../firebase-config';
import { uploadBytes,ref, listAll} from 'firebase/storage';

const Post = () => {
  const listRef = ref(storage, 'gs://lemniscate-30462.appspot.com/');
  const storageRef = ref(storage, 'UserNamehere');
  const files= (file) => {
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  }
  const content = [];
  listAll(listRef)
  .then((res) => {
    res.items.forEach((itemRef) => {
      content.push(itemRef.name);
      console.log(itemRef.name);
    });
  }).catch((error) => {
    console.log(error);
  })
  return (
    <>
    {content.map((item) => {
      return (
        <div className='bg-white text-white mt-20 ml-50'>
          <Player
            playsInline
            fluid = {false}
            width = {750}
            height = {500}
            src={`https://firebasestorage.googleapis.com/v0/b/lemniscate-30462.appspot.com/o/${item}?alt=media&token=16522121-e56a-41d6-b68b-8815aaf32ea6`}
          />
        </div>
      )
    })}
    <a className="relative block border border-gray-100 ml-40 mt-10">
    <button className="absolute p-2 text-white bg-black rounded-full right-4 top-4" type="button">
      <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    </button>
    <Player
      playsInline
      fluid = {false}
      width = {750}
      height = {500}
      preload = "metadata"
      poster="/assets/poster.png"
      src="https://firebasestorage.googleapis.com/v0/b/lemniscate-30462.appspot.com/o/UserNamehere?alt=media&token=16522121-e56a-41d6-b68b-8815aaf32ea6"
    />
  
    <div className="p-6">
      <strong className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
        New
      </strong>
  
      <h5 className="mt-4 text-lg font-bold text-white">
        Weew Jeff sings
      </h5>
  
      <p className="mt-2 text-sm text-white">
        x Likes
      </p>
  
      <button
        className="w-15 p-4 mt-4 text-sm font-medium bg-yellow-500 rounded-sm content-center"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
      <button
        className="ml-20 w-15 p-4 mt-4 text-sm font-medium bg-yellow-500 rounded-sm content-center"
        type="button"
      >
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
      </button>
    </div>
  </a>

  <input type="file" onChange={(e) => files(e.target.files[0])}/>
  </>
  )
}

export default Post