'use client';

// reduce
import {useDispatch} from 'react-redux'
import {setOrder} from '../Shared/Days';
// fin
import { useEffect, useState} from 'react';
import DatePicker from './DatePicker';



export default function Days() {
    const [fromDate, setFromeDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000)));
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setOrder({from: fromDate.toString(), to: toDate.toString(), offer: disabled}))
    }, [fromDate])
    return (
        <div className=" flex flex-col justify-center items-center w-full h-1/2 m-auto bg-[#ffffff]">
            <div className="w-full flex justify-center mr-2 ">
                <div className="md:flex justify-center items-center gap-10">
                    <div className="inline-flex items-center">
                        <label className="relative flex cursor-pointer items-center rounded-full p-3" htmlFor="Sivendays" data-ripple-dark="true">
                            <input defaultChecked
                                onChange={
                                    (e) => {
                                        setDisabled(true);
                                    }
                                }
                                id="Sivendays"
                                name="type"
                                type="radio"
                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-green-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-400 checked:before:bg-green-400 hover:before:opacity-10"/>
                            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-400 opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                </svg>
                            </div>
                        </label>
                        <label className=" bg-green-100 text-green-800 text-xs font-medium mx-2 px-2.5 py-0.5 rounded-full" htmlFor="html">
                            OFFER for 7 days
                        </label>
                    </div>
                    <div className="inline-flex items-center">
                        <label className="relative flex cursor-pointer items-center rounded-full p-3" htmlFor="Custom_days" data-ripple-dark="true">
                            <input onChange={
                                    (e) => {
                                        setDisabled(!disabled);
                                    }
                                }
                                id="react"
                                name="type"
                                value={true}
                                type="radio"
                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-green-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-400 checked:before:bg-green-400 hover:before:opacity-10"/>
                            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-400 opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                </svg>
                            </div>
                        </label>
                        <label className="block ml-2 text-sm font-medium text-gray-900" htmlFor="Custom_days">
                            Custom days
                        </label>
                    </div>
                </div>
            </div>
            <div className="w-full justify-center flex items-center">
                <div className=''>
                    <DatePicker seter={setFromeDate} NewdefaultDate={fromDate} />
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className={disabled?'opacity-25 pointer-events-none':''}>
                    <DatePicker seter={setToDate} NewdefaultDate={toDate}/>
                </div>
            </div>
        </div>
    );
}
