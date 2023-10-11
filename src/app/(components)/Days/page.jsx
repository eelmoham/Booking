'use client';

// reduce
import { useDispatch } from 'react-redux'
import { setOrder } from '../Shared/Days';
// fin
import { use, useEffect, useState } from 'react';
import DatePicker from './DatePicker';
import { useSelector } from 'react-redux';
import Link from 'next/link';



export default function Days() {
    const DaysInfo = useSelector((state) => state.Days);
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [isOffer, setIsOffer] = useState(null);
    const dispatch = useDispatch()
    const [Submited, setSubmited] = useState(false);
    const isPackData = useSelector((state) => state.Pack.dataExist);

    useEffect(() => {
        if (isPackData == false)
            location.href = "/Packs";
        if (DaysInfo.dataExist == true) {
            // alert("second");
            setFromDate(new Date(DaysInfo.data.from));
            setToDate(new Date(DaysInfo.data.to));
            setIsOffer(DaysInfo.data.offer);
        } else {
            // alert("first");
            setFromDate(new Date());
            setToDate(new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000)));
            setIsOffer(true);
        }
    }, [])


    useEffect(() => {
        if (fromDate && isOffer) {

            setToDate(new Date(fromDate.getTime() + (7 * 24 * 60 * 60 * 1000)))
            setSubmited(true);
            dispatch(setOrder({ from: fromDate.toString(), to: toDate.toString(), offer: isOffer }))
        }
    }, [fromDate])

    useEffect(() => {

        if (fromDate > toDate && !isOffer) {
            setSubmited(false);
        }
        else {
            setSubmited(true);

            if (fromDate != null && toDate != null && isOffer != null) {
                if (isOffer == true)
                    setToDate(new Date(fromDate.getTime() + (7 * 24 * 60 * 60 * 1000)))
                dispatch(setOrder({ from: fromDate.toString(), to: toDate.toString(), offer: isOffer }))
            }
        }
    }, [isOffer])

    useEffect(() => {
        if (toDate && !isOffer && fromDate) {
            if (fromDate > toDate) {
                setSubmited(false);
                alert("Please choose a date after the start date");
            }
            else {
                setSubmited(true);
                dispatch(setOrder({ from: fromDate.toString(), to: toDate.toString(), offer: isOffer }))
            }

        }
    }, [toDate, fromDate])

    function handleRadioChange(e) {
        console.log(e.target.value, "<<<");
        setIsOffer(!isOffer);
    };

    return (
        <div className=" flex flex-col justify-between items-center w-full h-full m-auto bg-inherit">
            {
                fromDate && isOffer != null &&
                <div className='w-full h-full flex flex-col m-auto justify-center'>
                    <div className="w-full flex justify-center mr-2 ">
                        <div className="md:flex justify-center items-center gap-10">

                            <div className="flex items-center pl-4">
                                <input
                                    checked={isOffer}
                                    type="radio"
                                    name="offers"
                                    value="true"
                                    onChange={(e) => handleRadioChange(e)}
                                    id="offer" className="w-4 h-4 text-green-400 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label className=" bg-green-100 text-green-800 text-xs font-medium mx-2 px-2.5 py-0.5 rounded-full" htmlFor="offer">
                                    OFFER for 7 days
                                </label>
                            </div>
                            <div className="flex items-center pl-4">
                                <input
                                    checked={!isOffer}
                                    type="radio"
                                    name="offers"
                                    value="false"
                                    onChange={(e) => handleRadioChange(e)}
                                    id="custom" className="w-4 h-4 text-green-400 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="custom" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Custom dates
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full justify-center flex items-center">
                        <div className=''>
                            {/* {DaysInfo.data.from} */}
                            <DatePicker name="FROM" seter={setFromDate} defaultDate={fromDate} />
                        </div>
                        <span className="mx-4 text-gray-500">to</span>
                        {
                            isOffer ?
                                <div className='flex gap-1 items-center'>
                                    <div className=' opacity-40 border py-2 px-1 pr-9 flex gap-3 items-center rounded-lg justify-between bg-[#f9fafb]'>
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                        <span className=' text-sm text-gray-800'>
                                            {toDate.toDateString()}
                                        </span>
                                    </div>
                                </div>
                                :
                                <div className=''>
                                    <DatePicker name="TO" seter={setToDate} defaultDate={toDate} />
                                </div>
                        }
                    </div>
                </div>
            }
            <div className="w-full flex bg-white pt-3 pb-[.6rem] text-black sticky bottom-0 justify-between">
                <Link
                    href="/Hostel"
                    className="w-max mx-2 px-4 py-2 bg-inherit hover:bg-gray-200 rounded-md text-black border flex gap-1 items-center cursor-pointer"
                >
                    <span className=' rotate-180'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></span>
                    <span>Prev</span>
                </Link>
                <Link className={Submited ? " bottom-1 right-1 p-2 mx-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400" : " pointer-events-none opacity-30 absolute bottom-1 right-1 p-2 mx-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400"} href="/CheckOut">
                    <div className="flex gap-1 items-center">
                        <span>Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='white' className='text-white' viewBox="0 0 320 512"> <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                    </div>
                </Link>
            </div>


        </div>
    );
}
