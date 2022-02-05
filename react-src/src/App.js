import {React} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Login from "./pages/Login/Login.jsx";
import Layout from './components/Layout/Layout.jsx';
import Signup from './pages/Signup/Signup.jsx';
import News from './pages/News/News.jsx';
import Insights from './pages/insights/Insights.jsx';

function App() {
  return (
    <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home/>}/>
              <Route exact path='/login' element={<Login />}/>
              <Route exact path='/signup' element={<Signup />}/>
              <Route exact path='/news' element={<News/>}/>
              <Route exact path='/insights' element={<Insights/>}/>
            </Route>
          </Routes>
    </Router>
  );
}
export default App;
