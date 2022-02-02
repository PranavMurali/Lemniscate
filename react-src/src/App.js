import {React} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Login from "./components/Login/Login.jsx";

function App() {
  return (
    <Router>
      <div className="bg-black z-0">
      <Header/> 
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/login' element={<Login />}/>
          </Routes>
        </div>
    </Router>
  );
}
export default App;
