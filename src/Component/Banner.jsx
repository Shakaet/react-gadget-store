import React from 'react';

import img from "../assets/banner.jpg"

const Banner = () => {
    return (
        <div className='relative'>

                <div className="hero bg-[#9538E2] min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-6xl">
                    <h1 className="text-5xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-6 text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button className="btn btn-[white] text-[blue] font-bold">Shop Now</button>
                    </div>
                </div>
                </div>

                <div className='relative -top-40'>
                        <img className='md:w-1/2 mx-auto rounded-lg' src={img}></img>
                    </div>
            
        </div>
    );
};

export default Banner;