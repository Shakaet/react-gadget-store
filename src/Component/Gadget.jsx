import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const Gadget = () => {

    let data= useLoaderData()
    let {category}= useParams()

    let [gadget,setgadget] =useState([])
    
    useEffect(()=>{

        if(category){
            let filterByCategory=[...data].filter(item=>item.category=== category)
          setgadget(filterByCategory)

        }
        else{
            setgadget(data.slice(0,6))
        }

        

    },[data,category])
    
    return (
        <div>

            {
                gadget.map(item=><Card gadget={item}></Card>)
            }
            
        </div>
    );
};

export default Gadget;