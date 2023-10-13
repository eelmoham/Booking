'use client';

// reduce
import { useDispatch } from 'react-redux'
import { setOrder } from '../Shared/Days';
// fin
import { use, useEffect, useState } from 'react';
import DatePicker from './DatePicker';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { fr } from 'date-fns/locale';



export default function Days() {
    const DaysInfo = useSelector((state) => state.Days);
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [isOffer, setIsOffer] = useState(null);
    const dispatch = useDispatch()
    const [Submited, setSubmited] = useState(false);
    const isPackData = useSelector((state) => state.Pack.dataExist);
    const PackData = useSelector((state) => state.Pack.data);

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
        }else{
            if (fromDate >= toDate)
                setToDate(new Date(new Date(fromDate).getTime() + (1 * 24 * 60 * 60 * 1000)))
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
                // alert("Please choose a date after the start date");
            }
            else {
                setSubmited(true);
                dispatch(setOrder({ from: fromDate.toString(), to: toDate.toString(), offer: isOffer }))
            }

        }
    }, [toDate, fromDate])

    function handleRadioChange(e) {
        setIsOffer(!isOffer);
    };

    return (
        <div className=" flex flex-col justify-between items-center w-full h-full m-auto bg-inherit">
            {
                fromDate && isOffer != null &&
                <div className='w-full h-full flex flex-col m-auto justify-center'>
                    <div className="w-full flex justify-center">
                        <div className="flex justify-center items-center gap-10 w-full">

                            <div className="flex items-center px-2 ">
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
                            <div className="flex items-center px-2">
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
                            <DatePicker seter={setFromDate} defaultDate={fromDate} />

                        </div>
                        <span className="mx-4 text-gray-500">to</span>

                        <div className=''>
                            <DatePicker seter={setToDate} defaultDate={toDate} withFrom={fromDate} disabled={isOffer ? true : false} />

                        </div>
                    </div>
                </div>
            }
            <div className="w-full flex bg-white pt-3 pb-[.6rem] text-black sticky bottom-0 justify-between">
                <Link
                    href={PackData.with_hosting === '1' ? "/Hostel" : "/Packs"}
                    className="w-max mx-2 px-4 py-2 bg-inherit hover:bg-gray-200 rounded-md text-black border flex gap-1 items-center cursor-pointer"
                >
                    <span className=' rotate-180'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></span>
                    <span>Prev</span>
                </Link>
                <Link className={Submited ? " bottom-1 right-1 p-2 mx-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400" : " pointer-events-none opacity-30 absolute bottom-1 right-1 p-2 mx-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400"} href="/CheckOut">
                    <div className="flex gap-1 items-center px-2">
                        <span>Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='white' className='text-white' viewBox="0 0 320 512"> <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                    </div>
                </Link>
            </div>
        </div>
    );
}
