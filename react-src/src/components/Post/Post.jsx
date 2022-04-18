import React, {useEffect, useState} from 'react'
import { Player } from 'video-react';
import { storage } from '../../firebase-config';
import { uploadBytes,ref, listAll, getDownloadURL} from 'firebase/storage';

const Post = () => {
    const vidRef = ref(storage, 'gs://lemniscate-30462.appspot.com/');
    const storageRef = ref(storage, 'UserNamehere');
    const [data, setData] = useState([]);
    const [vidName, setvidName] = useState([]);
    const files= (file) => {
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  }
  useEffect(() => {
    listItem();
  }, []);
  const listItem = () => {
    listAll(vidRef)
        .then((res) => {
            res.items.forEach((item) => {
                const str = 'gs://lemniscate-30462.appspot.com/' + item.name;
                getDownloadURL(ref(storage, str))
                    .then((url) => {
                        setvidName(vidN => [...vidN, item.name]);
                        setData(arr => [...arr, url]);
                        console.log(url);
                        console.log(item.name);
                    })
            })
        })   
  }
  return (
    <>
      <div className="flex flex-wrap items-center mt-10">
            {
                data.map((val, sIndex) => (
                    <a className="relative block border border-gray-100 ml-40 mt-10">
                        <Player
                            playsInline
                            fluid = {false}
                            width = {750}
                            height = {500}
                            preload = "metadata"
                            poster="/assets/poster.png"
                            src= {val}
                            />

                            <div className="p-6">
                                <h5 className="mt-4 text-lg font-bold text-white">
                                    {
                                        vidName.at(sIndex)
                                    }
                                </h5>
                            </div>
                        </a>
                ))
            }
        </div>
        <input type="file" onChange={(e) => files(e.target.files[0])}/>
    </>
  )
}

export default Post