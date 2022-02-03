import {React,useState,useEffect} from 'react';

function News() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://newsapi.org/v2/everything?q=Apple&from=2022-02-03&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API}`);
      const Data = await response.json()
      setData(Data.articles.slice(0,10))
    }
    fetchData()
    }, [])
    
  return (
    <>
  <div class=" mx-20 grid grid-cols-5">
  {Data.map(article => (
    <>
    <div class="max-w-xs h-max mx-2 overflow-hidden rounded-lg shadow-lg bg-gray-800 my-10">
        <div class="px-4 py-2">
            <h1 class="text-xl font-bold uppercase text-white">{article.title}</h1>
            <p class="mt-1 text-sm text-gray-400 truncate">{article.description}</p>
        </div>

        <img class="object-cover w-full h-48 mt-2" src={article.urlToImage} alt="News Image"/>

        <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 class="text-lg font-bold text-white">{article.publishedAt.slice(0, 10)}</h1>
            <a href={article.url} target="_blank" class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Read More</a>
        </div>
    </div>
   </>
   ))}
   </div>
</>
);
}

export default News;
