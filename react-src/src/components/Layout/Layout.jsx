import {React} from 'react'
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

function Layout(){
    return (
        <div className="bg-black flex flex-row">
        <Header/>
        <Outlet />
        </div>
    )
}

export default Layout;