import {React} from 'react'
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';

function Layout(){
    return (
        <div className="bg-black flex flex-row">
        <Nav/>
        <Outlet />
        </div>
    )
}

export default Layout;