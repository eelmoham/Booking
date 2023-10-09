'use client';

import React, { useState, useEffect } from 'react';
import CardHostel from './cards';
import { useSelector } from "react-redux";
import { RootState } from '@/app/store';
import Loading from '../Loading/page';


const Hostel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const isPackData = useSelector((state: RootState) => state.Pack.dataExist);
  const [hidden, setHidden] = useState(true);
  
  useEffect(() => {
    if(isPackData == false)
    location.href = "/Packs";
  const fetchData = async () => {
    try {
      const res = await fetch('https://booking.tayyurt-surf.com/api/v1/rooms');
      
      if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await res.json();
        setData(jsonData.data);
      } catch (error) {
        return <div className='w-full flex justify-center items-center m-auto text-red-500 '>
          Something Wrrong try again later
        </div>
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) {
    return (
      <Loading hidden={false} />
    )
  }

  if (!Array.isArray(data)) {
    return <div className='w-full flex justify-center items-center m-auto text-red-500'>Data is not in the expected format</div>;
  }
  return (
      <div className="flex w-full h-full flex-row flex-wrap justify-center items-center" id="Rooms">
        {
          data.map((items: any, index: number) => (
            <CardHostel
              key={"room_" + index}
              id={items.id}
              title={items.title}
              picture={items.picture}
              short_description={items.short_description}
              description={items.description || "No description available"}
              pack_price={items.pack_price || 0}
              day_price={items.day_price || 0}
              siter={setHidden}
            />
          ))
        }
        <Loading hidden={hidden} />
      </div>
  );
}
export default Hostel
