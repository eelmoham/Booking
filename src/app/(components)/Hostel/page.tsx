'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
    <div className=" rounded-xl w-full h-full flex flex-col m-auto justify-center " id="Rooms">
      {
        data.map((items: any) => (
          <div className=" relative text-xs border border-gray-200 rounded-lg shadow flex w-full m-auto" key={items.id}>
            <img
              className=" w-1/4 rounded-t-lg"
              src={`https://booking.tayyurt-surf.com/storage/${items.picture}`} alt="hostel" />
            <div className=" my-3 mb-4 p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{items.name}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">{items.short_description}</p>
            </div>
            <div className=" absolute w-full flex justify-end bottom-1 right-3">
              <a href="#" className="inline-flex items-end rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-100">Select</a>
            </div>
          </div>))
      }
      
    </div>
  );
}
export default Hostel
