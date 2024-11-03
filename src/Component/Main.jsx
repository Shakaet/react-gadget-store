import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { AddToLocalStorage, AddToLocalStorageW, getItemFromLs ,getItemFromLsW} from './AddToDb';

const Main = () => {

    const [cartCount, setCartCount] = useState(getItemFromLs().length);
    const [wishlistCount, setWishlistCount] = useState(getItemFromLsW().length);

    const handleAddToCart = (id) => {
        AddToLocalStorage(id);
        setCartCount(getItemFromLs().length); // Update count after adding to localStorage
    };

    const handleAddToWishlist = (id) => {
        AddToLocalStorageW(id);
        setWishlistCount(getItemFromLsW().length); // Update count after adding to localStorage
    };

    useEffect(() => {
        // Sync with localStorage when component mounts or localStorage changes
        setCartCount(getItemFromLs().length);
        setWishlistCount(getItemFromLsW().length);
    }, []);


    
    
    return (
        <div className='overflow-x-hidden'>

            <NavBar cartCount={cartCount} wishlistCount={wishlistCount}></NavBar>
            <Outlet context={{ handleAddToCart, handleAddToWishlist }} ></Outlet>

            <Footer></Footer>

        

            
            
        </div>
    );
};

export default Main;