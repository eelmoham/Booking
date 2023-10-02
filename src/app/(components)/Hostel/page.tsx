'use client';

import React, { useState, useEffect } from 'react';
import CardHostel from './cards';

const Hostel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
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
    return <div className='w-full flex justify-center items-center m-auto text-green-500'>Loading...</div>;
  }

  if (!Array.isArray(data)) {
    return <div className='w-full flex justify-center items-center m-auto text-red-500'>Data is not in the expected format</div>;
  }
  return (
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-auto" id="Rooms">
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
            />
          ))
        }
      </div>
  );
}
export default Hostel
