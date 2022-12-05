import React from 'react';
import {Outlet} from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
const Layout = () => {
    return(
        <>
        <div className='flex flex-row h-screen w-screen overflow-hidden bg-gray-100'>
            <div className='flex flex-row flex-1'>
                <Sidebar />
                    <div className='flex flex-col flex-1'>  
                        <Header />
                      
                        <div className='flex-1 p-4 overflow-auto'>
                            {<Outlet />}   
                        </div>
                        <Footer />
                    </div>
            </div>
        </div>    
        </>
    );
};
export default Layout;