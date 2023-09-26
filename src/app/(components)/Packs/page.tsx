'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Packs = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('https://booking.tayyurt-surf.com/api/v1/packs');
  
          if (!res.ok) {
            throw new Error('Failed to fetch data');
          }
  
          const jsonData = await res.json();
          setData(jsonData.data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!Array.isArray(data)) {
      return <div>Data is not in the expected format</div>;
    }


  console.log('====================================');
  console.log(data);
  console.log('====================================');
    return (
        <div className=" flex flex-col">
            <div className=" text-black mt-3 font-bold text-center">
                PICKUP A PACK
            </div>
            <div className="flex w-full flex-row flex-wrap justify-center items-center" id="Packs">
                {
                    data.map((pack: any) => (
                        <div className="m-4 w-full rounded-lg border border-gray-200 bg-white shadow sm:max-w-xs" key={pack.id}>
                            <div className="flex flex-col items-center pb-5 pt-4">
                                <h5 className="mb-1 text-xl font-medium text-gray-900">{pack.name}</h5>
                                <img className="mb-3 h-24 w-24 rounded-full shadow-lg" src={`https://booking.tayyurt-surf.com/storage/${pack.picture}`} alt="Bonnie image" /><span className="px-3 text-center text-sm text-gray-500">{pack.short_description}</span>
                                <span className="mt-2 text-center text-[15px] font-bold text-green-500">{pack.pack_price} €
                                    <label className="text-[12px] text-gray-500">/ 7 days</label>
                                </span>
                                <div className="mt-4 flex space-x-3">
                                    <Link href="Hostel" className="inline-flex items-center rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-100">Select</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Packs;
