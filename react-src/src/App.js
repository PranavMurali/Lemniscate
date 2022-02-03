import {React} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Login from "./pages/Login/Login.jsx";
import Layout from './components/Layout/Layout.jsx';

function App() {
  return (
    <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home/>}/>
              <Route path='/login' element={<Login />}/>
            </Route>
          </Routes>
    </Router>
  );
}
export default App;
