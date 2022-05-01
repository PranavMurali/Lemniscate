import {React,useState,useEffect} from 'react';
import {useStateValue} from "../../StateProvider";
function News() {
  const [Data, setData] = useState([]);
  const [{gamenews}, dispatch] = useStateValue();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${gamenews}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API}`);
      const Data = await response.json()
      setData(Data.articles.slice(0,8))
    }
    fetchData()
    }, [])
    
  return (
    <>
        <span className="text-white ml-20 text-4xl font-extrabold">Based on games you've played <br/>
        <span className='text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600'>Apex Legends</span><br/>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500'>Valorant</span> <br/>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200'>God of War</span><br/>
        </span>
  <div className="-ml-40 mt-5 grid grid-cols-4 content-evenly self-center">

  {Data.map(article => (
    <>
    <div className=" max-w-xs h-max mx-2 overflow-hidden rounded-lg shadow-lg bg-gray-800 my-10">
        <div className="px-4 py-2">
            <h1 className="text-xl font-bold uppercase text-white">{article.title}</h1>
            <p className="mt-1 text-sm text-gray-400 truncate">{article.description}</p>
        </div>

        <img className="object-cover w-full h-48 mt-2" src={article.urlToImage} alt="News"/>

        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white">{article.publishedAt.slice(0, 10)}</h1>
            <a href={article.url} className="px-2 py-1 text-xs font-semibold text-gray-100 uppercase transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Read More</a>
        </div>
    </div>
   </>
   ))}
   </div>
</>
);
}

export default News;
