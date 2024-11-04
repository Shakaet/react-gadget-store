import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { getItemFromLs, getItemFromLsW } from './AddToDb';
import Cart from './Cart';
import Datawish from './Datawish'
import Modal from './Modal';
 
const Dashboard = () => {
    let [showModal, setShowModal] = useState(false); // Modal visibility state

    let [price,setPrice]=useState(0)

    let[data,setData ]=useState([])

    let[wishList,setWishlist]=useState([])

    let Ls_data= useLoaderData()
    console.log(Ls_data)

    useEffect(()=>{
        let getLsData=getItemFromLs()
        let getWishListData=getItemFromLsW()

        console.log(data,getLsData)

        let dataInt= getLsData.map(id=>parseInt(id))
        let WishdataInt= getWishListData.map(id=>parseInt(id))

        console.log(typeof dataInt)

        let readBookList= Ls_data.filter(item=>dataInt.includes(item.product_id))
        let readWishBookList= Ls_data.filter(item=>WishdataInt.includes(item.product_id))

        setData(readBookList)
        setWishlist(readWishBookList)
    // eslint-disable-next-line react-hooks/exhaustive-deps

    // Calculate the total cost
    let totalCost = readBookList.reduce((acc, item) => acc + item.price, 0);
      setPrice(totalCost);
    },[])

    const sortByPriceDescending = () => {
        const sortedData = [...data].sort((a, b) => b.price - a.price);
        setData(sortedData);

    }


    const handlePurchase = () => {
        setShowModal(true); // Show the modal
    };

    

    return (
        <div>
              {/* Modal */}
              {showModal && <Modal onClose={() => setShowModal(false)} totalPrice={price} />}
            

            <div className=''>
               

            <div className="hero bg-[#9538E2] min-h-screen relative ">
            <div className="hero-content text-center">
                <div className="max-w-6xl  ">
                <h1 className="text-5xl font-bold text-white">Dashboard</h1>
                <p className="py-6 text-white">
                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                </div>

            </div>
            </div>
            
            <Tabs>
    <TabList className={"flex relative -top-40 justify-center gap-5"}>
      <Tab className="btn text-blue-800 font-bold">Cart</Tab>
      <Tab className="btn text-blue-800 font-bold">Wishlist</Tab>
    </TabList>

    <TabPanel>
      <div className='flex justify-between items-center'>
        <div className=''>

            <h2 className='text-2xl font-bold'>Cart</h2>

        </div>
        <div className='flex gap-10 justify-center items-center'>
        
           <p className='text-2xl font-bold'>Total Cost: ${price}</p>
            
            <button onClick={sortByPriceDescending} className='btn btn-outline bg-gray-300 font-bold'>Sort by Price</button>
            <button onClick={handlePurchase} className='btn  bg-blue-600 font-bold'>Purchase</button>

        </div>
      </div>

      {
        data.map(cart=><Cart cart={cart}></Cart>)
      }
    </TabPanel>
    <TabPanel>
      <div>

      <div className='flex justify-between items-center'>
        <div className=''>

            <h2 className='text-2xl font-bold'>Wishlist</h2>

        </div>
        <div className='flex gap-10 justify-center items-center'>
        
           

        </div>
      </div>

      </div>

      {
        wishList.map(wish=><Datawish wish={wish}></Datawish>)
      }
    </TabPanel>
  </Tabs>

            </div>
            
        </div>
    );
};

export default Dashboard;