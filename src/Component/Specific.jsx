import React from 'react';
import { useLoaderData, useOutletContext, useParams } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { AddToLocalStorage, AddToLocalStorageW } from './AddToDb';

const Specific = () => {

    const { handleAddToCart, handleAddToWishlist } = useOutletContext();


    let {id}=useParams()
    console.log(id)
    let data= useLoaderData()
    console.log(data)

    let gadget=data.find(item=>item.product_id=== parseInt(id))
    console.log(gadget)

    // let handleCart=(id)=>{
    //     AddToLocalStorage(id)
    //     incrementCart()
    // }
    // let handleWishlist=(id)=>{
    //     AddToLocalStorageW(id)
    //     incrementWishlist()
    // }

    
    return (
        <div>

<div className='relative'>

<div className="hero bg-[#9538E2] min-h-screen">
<div className="hero-content text-center">
    <div className="max-w-6xl">
    <h1 className="text-5xl font-bold text-white">Product Details</h1>
    <p className="py-6 text-white">
    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
    </p>
    </div>
</div>
</div>

{/* <div className='relative -top-40'>
        <img className='md:w-1/2 mx-auto rounded-lg' src={img}></img>
    </div> */}

</div>

   <div className="relative -top-72 max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:max-w-5xl p-6">
      <div className="md:flex">
        {/* Product Image */}
        <div className="w-full h-48 md:h-auto md:w-1/3 flex items-center justify-center">
          {/* Placeholder for image */}
          
          <div className="w-full ">
          <img className='w-full h-80' src={gadget.product_image} alt="" />
            
          </div>
        </div>

        {/* Product Details */}
        <div className="p-4 md:w-2/3 mt-10">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{gadget.product_title}</h2>
          {/* Price */}
          <p className="text-xl text-gray-600 font-bold">Price: ${gadget.price}</p>

          {/* Availability Status */}
          {
            gadget.availability && <p className="text-green-500 font-bold mb-4 mt-4">In Stock</p>
          }
          

          {/* Description */}
          <p className="text-gray-700 mb-4 font-bold">
            {gadget.description}
          </p>

        {/* Specifications */}
            <div className="mb-4">
            <h3 className="font-bold text-gray-800">Specification:</h3>
            <ul className="list-decimal list-inside text-gray-700">
                {gadget.Specification.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
            </div>


          {/* Rating */}
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-lg mr-1">★★★★☆</span>
            <span className="text-gray-600 text-sm ml-2 font-bold">{gadget.rating}</span>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 gap-10">
            <button onClick={()=>handleAddToCart(gadget.product_id)} className=" text-xl  py-2 rounded-full bg-gray-200 font-bold flex items-center gap-2 shadow-lg p-5 hover:bg-red-400">
            Add to Cart<FaShoppingCart />
            </button>
            <button onClick={()=>handleAddToWishlist(gadget.product_id)} className="bg-gray-200 p-2 rounded-full  hover:bg-red-400">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
            
        </div>
    );
};

export default Specific;