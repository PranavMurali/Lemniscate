import React , {useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Login from "./pages/Login/Login.jsx";
import Layout from './components/Layout/Layout.jsx';
import Post from './components/Post/Post.jsx';
import News from './pages/News/News.jsx';
import Insights from './pages/insights/Insights.jsx';
import Settings from './pages/Settings/Settings.jsx';
import Friends from './pages/friends/Friends.jsx';
import { authentication } from "../src/firebase-config";
import { useStateValue } from "./StateProvider";

function App() {
    const[{user},dispatch]=useStateValue();
    useEffect(() => {
      authentication.onAuthStateChanged((authUser)=>{
        if (authUser){
          console.log(authUser);
          dispatch({
            type:"SET_USER",
            data:authUser,
          })
        }
  
        else{
          console.log('user is logged out');
          dispatch({
            type:"SET_USER",
            data:null,
          })
        }
        
      })
  
    },[user])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home/>}/>
              <Route exact path='/login' element={<Login />}/>
              <Route exact path='/news' element={<News/>}/>
              <Route exact path='/insights' element={<Insights/>}/>
              <Route exact path='/settings' element={<Settings/>}/>
              <Route exact path='/friends' element={<Friends/>}/>
              <Route exact path='/posts' element={<Post/>}/>
            </Route>
          </Routes>
    </Router>
  );
}
export default App;
