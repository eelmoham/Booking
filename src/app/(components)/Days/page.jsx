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
        <div className=" flex flex-col justify-between items-center w-full h-full m-auto bg-inherit">
            {
                fromDate && isOffer != null &&
                <div className='w-full h-full flex flex-col m-auto justify-center'>
                    <div className="w-full flex justify-center pb-2">
                        <div className="flex justify-center items-center gap-5 w-full">

                            <div className="flex items-center px-2 ">
                                <input
                                    checked={isOffer}
                                    type="radio"
                                    name="offers"
                                    value="true"
                                    onChange={(e) => handleRadioChange(e)}
                                    id="offer" className="w-4 h-4 text-green-400 bg-white border-gray-300 focus:ring-green-500 dark:focus:ring-green-400 focus:ring-2" />
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
                                    id="custom" className="w-4 h-4 text-green-400 bg-green-50 border-green-300 focus:ring-green-500 focus:ring-2" />
                                <label htmlFor="custom" className="w-full py-4 ml-2 text-sm font-normal text-gray-900">
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
                <Priv link={PackData.with_hosting === '1' ? "/Hostel" : "/Packs"}/>
                <Back link="/CheckOut"/>
            </div>
        </div>
    );
}
