import React , {useState,useEffect} from 'react';

function Insights() {
  const [SteamGames, setSteamGames] = useState([]);
  const [gamedeets, setGameDeets] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const idResponse = await fetch(`https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${process.env.REACT_APP_STEAM_API}&vanityurl=Ohnucrinj`);
        const idData = await idResponse.json()
        const userResponse = await fetch(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.REACT_APP_STEAM_API}&steamid=76561198826674647&format=json`);
        const userData = await userResponse.json()
        setSteamGames(userData.response.games);
        console.log(userData.response.games);
    }
    fetchData()
    }, [])
    var colors = [""];
    
    useEffect(() => {
      const fetchGame = async (id) => {
        const resp = await fetch(`https://store.steampowered.com/api/appdetails/?appids=${id}`);
        const data = await resp.json()
        setGameDeets(data[id].data);
        console.log(data[id].data);
      }  
  fetchGame()
  }, [])
   
  return (
    <>
    <div className=" mx-20 grid gap-8 mt-8 grid-row-4">
      <section className=" w-screen text-white bg-gray-900">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold sm:text-6xl">
              <span className='w-full text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>{colors[Math.floor(Math.random()*colors.length)]}</span>
            </h2>

            <p className="mt-4 sm:text-xl">
              Let's find out what you've been upto lately.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            <li className="p-8 shadow-xl rounded-xl">
              <p className="text-3xl font-extrabold">X</p>
              <p className="mt-1 text-xl font-medium">Hours played</p>
            </li>

            <li className="p-8 shadow-xl rounded-xl">
              <p className="text-3xl font-extrabold">Y</p>
              <p className="mt-1 text-xl font-medium">Games Played</p>
            </li>

            <li className="p-8 shadow-xl rounded-xl">
              <p className="text-3xl font-extrabold">Z</p>
              <p className="mt-1 text-xl font-medium">Platforms</p>
            </li>
          </ul>
        </div>
      </section>
    {SteamGames.map(game => (
    <>
     <div className="w-full max-w-xs text-center" key={game.appid}>
      <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={gamedeets.background} alt="avatar" />

      <div className="mt-2">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">{game.appid}</h3>
          <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">{game.playtime_forever}</span>
      </div>
    </div>
   </>
   ))}
</div>
</>

  
  );
  
}

export default Insights;
