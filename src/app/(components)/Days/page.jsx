'use client';

// reduce
import { useDispatch } from 'react-redux'
import { setOrder } from '../Shared/Days';
// fin
import { use, useEffect, useState } from 'react';
import DatePicker from './DatePicker';
import { useSelector } from 'react-redux';



export default function Days() {
    const DaysInfo = useSelector((state) => state.Days);
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000)));
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch()

    useEffect(() => {
        if (fromDate && disabled){
            setToDate(new Date(fromDate.getTime() + (7 * 24 * 60 * 60 * 1000)))
            dispatch(setOrder({ from: fromDate.toString(), to: toDate.toString(), offer: disabled }))
        }
        else
            dispatch(setOrder({ from: fromDate.toString(), to: toDate.toString(), offer: disabled }))
    }, [fromDate])

    useEffect(() => {
        if (toDate && !disabled && fromDate)
            dispatch(setOrder({ from: fromDate.toString(), to: toDate.toString(), offer: disabled }))
    }, [toDate, fromDate])

    const handleRadioChange = (e) => {
        setDisabled(e.target.value === 'true');
    };

    return (
        <div className=" flex flex-col justify-center items-center w-full h-1/2 m-auto bg-[#ffffff]">
            <div className="w-full flex justify-center mr-2 ">
                <div className="md:flex justify-center items-center gap-10">

                    <div className="flex items-center pl-4">
                        <input
                            checked={disabled}
                            type="radio"
                            name="bordered-radio"
                            value="true"
                            onChange={handleRadioChange}
                            id="offer" className="w-4 h-4 text-green-400 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label className=" bg-green-100 text-green-800 text-xs font-medium mx-2 px-2.5 py-0.5 rounded-full" htmlFor="offer">
                            OFFER for 7 days
                        </label>
                    </div>
                    <div className="flex items-center pl-4">
                        <input
                            type="radio"
                            name="bordered-radio"
                            value="false"
                            onChange={handleRadioChange}
                            id="custom" className="w-4 h-4 text-green-400 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="custom" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
                    </div>
                </div>
            </div>
            <div className="w-full justify-center flex items-center">
                <div className=''>
                    <DatePicker name="FROM" seter={setFromDate} defaultDate={fromDate} />
                </div>
                <span className="mx-4 text-gray-500">to</span>
                {
                    disabled ? <div className='border py-2 px-1 pr-9 flex gap-3 items-center rounded-lg justify-between bg-[#f9fafb]'>
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                       <span className=' text-sm'>
                        {toDate.toDateString()}
                       </span>
                    </div> :
                        <div className=''>
                            <DatePicker name="TO" seter={setToDate} defaultDate={toDate} />
                        </div>
                }
                {/* <div className={disabled ? 'opacity-25 pointer-events-none' : ''}>
                    <DatePicker name="TO" seter={setToDate} defaultDate={toDate} />
                </div> */}
            </div>
        </div>
    );
}
