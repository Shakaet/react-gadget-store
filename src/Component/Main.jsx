import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Main = () => {
    return (
        <div className='overflow-x-hidden'>

            <NavBar></NavBar>
            <Outlet></Outlet>

            <Footer></Footer>

        

            
            
        </div>
    );
};

export default Main;