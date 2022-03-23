import {React,useState,useEffect} from 'react';

function News() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://newsapi.org/v2/everything?q=Games&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API}`);
      const Data = await response.json()
      setData(Data.articles.slice(0,10))
    }
    fetchData()
    }, [])
    
  return (
    <>
  <div className="ml-40 grid grid-cols-5 content-evenly self-center">
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
