import React ,{useState,useEffect} from 'react';

function Friends() {
  const [SteamFriends, setSteamFriends] = useState([]);
  const [src,setSrc] = useState(0);
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
    //https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=XXXXXXXXXXXXXXXXXXXXXXX&steamids=76561197960435530 -- retireve friends profile id and info, push to profile of theirs on click ?
    const data = async(frndid) => {
        const image = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.REACT_APP_STEAM_API}&steamids=`+frndid);
        let imageData = await image.json();
        console.log(imageData.response.players[0].avatarfull);
        setSrc(imageData.response.players[0].avatarfull);
      }


    return (
    <div> 
    <h1>Friends</h1>
    {
        SteamFriends.map((friend) => {
          return (
            <div className='bg-white text-black mt-20 ml-40' key={friend.steamid}>
              <img src={data(friend.steamid)} alt='friend' loading="lazy"/>
              <h3>{friend.steamid}</h3>
              <h3>{friend.friend_since}</h3>
            </div>
        )})
    }
    </div>
  );
}

export default Friends;

