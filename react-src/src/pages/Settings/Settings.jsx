import {React,useState,useEffect} from 'react';

function Settings() {
    const [SteamUser, setSteamUser] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const idResponse = await fetch(`https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${process.env.REACT_APP_STEAM_API}&vanityurl=Ohnucrinj`);
        const idData = await idResponse.json()
        const userResponse = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.REACT_APP_STEAM_API}&steamids=${idData.response.steamid}`);
        const userData = await userResponse.json()
        setSteamUser(userData.response.players[0]);
        console.log(userData.response.players[0]);
    }
    fetchData()
    }, [])

  return (
    <>
        <div className=" mx-20 grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="w-full max-w-xs text-center">
                <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={SteamUser.avatarfull} alt="avatar" />

                <div className="mt-2">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">{SteamUser.personaname}</h3>
                    <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">{SteamUser.realname}</span>
                </div>
            </div>

            <div className="w-full max-w-xs text-center">
                <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="" alt="avatar" />

                <div className="mt-2">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Epic games</h3>
                    <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">account</span>
                </div>
            </div>

            <div className="w-full max-w-xs text-center">
                <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="" alt="avatar" />

                <div className="mt-2">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Riot Games</h3>
                    <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Account</span>
                </div>
            </div>

            <div className="w-full max-w-xs text-center">
                <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="" alt="avatar" />

                <div className="mt-2">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Another</h3>
                    <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">account</span>
                </div>
            </div>
        </div>
      </>
  );
  
}

export default Settings;
