'use client';

import React, { useState, useEffect } from 'react';
import CardHostel from './cards';
import { useSelector } from "react-redux";
import { RootState } from '@/app/store';
import Loading from '../Loading/page';
import Link from 'next/link';


const Hostel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const isPackData = useSelector((state: RootState) => state.Pack.dataExist);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (isPackData == false)
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
    <div className={hidden === false ? " w-full h-full" : " w-full h-full m-auto flex flex-col"}>
      <div className="flex w-full h-full flex-row flex-wrap justify-center items-center overflow-auto" id="Rooms">
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
      </div>
      <Loading hidden={hidden} />
      <div className="w-full flex justify-start bg-white pt-3 pb-[.6rem] text-black sticky bottom-0 ">
        <Link
          href="/Packs"
          className="w-max mx-2 px-4 py-2 bg-inherit hover:bg-gray-200 rounded-md text-black border flex gap-1 items-center cursor-pointer"
        >
          <span className='rotate-180'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></span>
          <span>Prev</span>
        </Link>
      </div>
    </div>
  );
}
export default Hostel
