'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Loading from '../Loading/page';


// reduce
import { useSelector, useDispatch } from 'react-redux'
import { setOrder } from '../Shared/Pack';
//fin



const Packs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(true);

  const dispatch = useDispatch()


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
      <div role="status" className='m-auto'>
        <svg aria-hidden="true" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  if (!Array.isArray(data)) {
    return <div className='w-full flex justify-center items-center m-auto text-red-500'>Data is not in the expected format</div>;
  }

  const handleLoading = () => {
    setHidden(false);
  }


  return (
    <div className={hidden === false?"relative flex w-full h-full overflow-hidden ":""}>
      <div className=" flex w-full flex-row flex-wrap justify-center items-center my-1 p-4" id="Packs">
        {
          data.map((pack: any) => (
            <div className="m-1 w-full rounded-lg border border-gray-200 bg-white shadow sm:max-w-xs" key={pack.id}>
              <div className="flex flex-col items-center pb-5 pt-4">
                <img className="mb-3 h-24 w-24 rounded-full shadow-lg" src={`https://booking.tayyurt-surf.com/storage/${pack.picture}`} alt="Bonnie image" />
                <h5 className="text-xl font-medium text-gray-900 text-center">
                  {pack.title}
                  {
                    pack.with_hosting == "0" &&
                      <p className='font-bold text-[10px] text-green-500 underline' style={{textUnderlineOffset: "5px"}}>WITHOUTY HOSTING</p>
                  }
                </h5>
                <span className="mt-1 px-3 text-center text-sm text-gray-500">{pack.short_description}</span>

                <span className="mt-2 text-center text-[15px] font-bold text-green-500">{pack.pack_price} €
                  <label className="text-[12px] text-gray-500">/ 7 days</label>
                </span>
                <div className="mt-4 flex space-x-3">
                  <Link
                    onClick={() => {handleLoading();dispatch(setOrder(pack))}}
                    href={pack.with_hosting === '1' ? "Hostel" : 'Days'} className=" inline-flex items-center rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-100">Select</Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <Loading hidden={hidden} />
    </div>
  );
};

export default Packs;
