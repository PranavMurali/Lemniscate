import React ,{useState,useEffect} from 'react';

function Friends() {
  const [SteamFriends, setSteamFriends] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const idResponse = await fetch(`https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${process.env.REACT_APP_STEAM_API}&vanityurl=Ohnucrinj`);
        const idData = await idResponse.json()
        const frenresp = await fetch(`https://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=${process.env.REACT_APP_STEAM_API}&steamid=`+idData.response.steamid+`&relationship=friend&format=json`);
        const frenData = await frenresp.json()
        setSteamFriends(frenData.friendslist.friends);
        console.log(frenData.friendslist.friends);
    }
    fetchData()
    }, [])
  return (
    <div> 
    <h1>Friends</h1>
    </div>
  );
}

export default Friends;

