'use client';

// reduce
import { useDispatch } from 'react-redux'
import { setOrder } from '../Shared/Days';
// fin
import { useEffect, useState } from 'react';
import DatePicker from './DatePicker';
import { useSelector } from 'react-redux';
import Priv from "../priv"
import Back from "../back"



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
        <div className="overflow-hidden flex h-full w-full flex-row flex-wrap justify-center items-center mt-1">
            {
                fromDate && isOffer != null &&
                <div className='w-full h-full flex flex-col m-auto justify-center'>
                    <div className="w-full flex justify-center pb-2">
                        <div className="flex justify-center items-center grap-0 md:gap-5 w-full">

                            <div className='flex sx:block sx:flex-wrap sx:pb-4'>
                                <div className="flex items-center px-2 ">
                                    <input
                                        checked={isOffer}
                                        type="radio"
                                        name="offers"
                                        value="true"
                                        onChange={(e) => handleRadioChange(e)}
                                        id="offer" className="w-4 h-4 text-green-400 bg-white border-gray-300 focus:ring-green-500 focus:ring-2" />
                                    <label className=" bg-green-100 text-green-800 text-xs font-medium mx-2 px-2.5 py-0.5 rounded-full" htmlFor="offer">
                                        OFFER (7 days)
                                    </label>
                                </div>
                                <div className="flex items-center px-2 pt-2">
                                    <input
                                        checked={!isOffer}
                                        type="radio"
                                        name="offers"
                                        value="false"
                                        onChange={(e) => handleRadioChange(e)}
                                        id="custom" className="w-4 h-4 text-green-400 bg-green-50 border-green-300 focus:ring-green-500 focus:ring-2" />
                                    <label className="  text-black text-xs font-medium ml-2 px-2.5 py-0.5 rounded-full" htmlFor="custom">
                                        Custom dates
                                    </label>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex items-center mb-6 px-3 justify-center flex-wrap">
                        <div className='relative w-full sm:w-auto text-black'>
                            <DatePicker seter={setFromDate} defaultDate={fromDate} />
                        </div>
                        <div className=" mx-4 text-gray-500 w-full py-2 sm:w-auto text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-green-400" viewBox="0 0 512 512"><defs></defs><path d="M0 256c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 56 96 0 0 96-96 0 0 56c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104C2.8 269 0 262.7 0 256z"></path><path className="opacity-[.4]" d="M512 256c0-6.7-2.8-13-7.7-17.6l-112-104c-7-6.5-17.2-8.2-25.9-4.4s-14.4 12.5-14.4 22l0 56-96 0 0 96 96 0 0 56c0 9.5 5.7 18.2 14.4 22s18.9 2.1 25.9-4.4l112-104c4.9-4.5 7.7-10.9 7.7-17.6z"></path></svg>
                            </div>
                        <div className='relative w-full sm:w-auto text-black'>
                            <DatePicker seter={setToDate} defaultDate={toDate} withFrom={fromDate} disabled={isOffer ? true : false} />

                        </div>
                    </div>
                </div>
            }
            <div className="w-full flex bg-white pt-3 pb-[.6rem] text-black sticky bottom-0 justify-between">
                <Priv link={PackData.with_hosting === '1' ? "/Hostel" : "/Packs"}/>
                <Back link="/CheckOut"/>
            </div>
        </div>
    );
}
