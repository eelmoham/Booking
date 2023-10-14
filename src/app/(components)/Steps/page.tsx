'use client';

import Link from "next/link";
// reduce
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "@/app/store";
//fin

const Steps = () => {
    const Pack = useSelector((state: RootState) => state.Pack)
    const PackExist = useSelector((state: RootState) => state.Pack.dataExist)
    const HostelExist = useSelector((state: RootState) => state.Hostel.dataExist)
    const DaysExist = useSelector((state: RootState) => state.Days.dataExist)
    const InfoExist = useSelector((state: RootState) => state.Info.dataExist)
    return (
        <div className="overflow-auto rounded-lg min-w-[50px] w-[50px] md:w-[350px] flex flex-col justify-center items-center bg-[#0c354d] p-1">
            <div className="flex justify-center items-center pt-2">
                <img src="/logo-light.png" className="w-[60%] hidden md:flex"/>
                <img src="/logo-192x192.png" className="w-[80%] max-w-[60px] md:hidden"/>
            </div>
            <div className="flex flex-col my-auto">
                <Link
                    href='#'
                    className=" flex gap-3 justify-between  md:text-sm text-xs">
                    <div className=" text-white hidden md:flex md:flex-col items-center w-full overflow-hidden ">
                        <h3 className="font-medium leading-tight pt-[.4rem]">Choosing Pack</h3>
                    </div>
                    <div className=" flex flex-col h-full">
                        {
                            PackExist ?
                                <span className=" flex flex-col items-center justify-center w-8 h-8 bg-green-200 rounded-full">
                                    <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                </span> :
                                <span className=" flex flex-col items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" height=".8em" viewBox="0 0 448 512">
                                        <path d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z" /></svg>
                                </span>
                        }
                        <div className={PackExist ? 'bg-[#bbf7d0] w-1 md:h-20 h-10 self-center' : 'bg-white bg-opacity-30 w-1 md:h-20 h-10 self-center'} ></div>
                    </div>
                </Link>
                <Link href="#" className=" flex gap-3 justify-between  md:text-sm text-xs">
                    <div className=" text-white hidden md:flex md:flex-col items-center w-full overflow-hidden ">
                        <h3 className="font-medium leading-tight pt-[.4rem]">Choosing Room</h3>
                        
                    </div>

                    <div className=" flex flex-col h-full">
                        {
                            (HostelExist || Pack.data.with_hosting === '0') ?
                                <span className=" flex flex-col items-center justify-center w-8 h-8 bg-green-200 rounded-full">
                                    <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                </span>
                                :
                                <span className=" flex flex-col items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" height=".8em" viewBox="0 0 512 512">
                                        <path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z" /></svg>
                                </span>
                        }

                        <div className={(HostelExist || Pack.data.with_hosting === '0') ? 'bg-[#bbf7d0] w-1 md:h-20 h-10 self-center' : 'bg-white bg-opacity-30 w-1 md:h-20 h-10 self-center'} ></div>
                    </div>
                </Link>
                <Link href="#" className=" flex gap-3 justify-between  md:text-sm text-xs">
                    <div className=" text-white hidden md:flex md:flex-col items-center w-full overflow-hidden ">
                        <h3 className="font-medium leading-tight pt-[.4rem]">SELECT DATE</h3>
                        
                    </div>

                    <div className=" flex flex-col h-full">
                        {
                            DaysExist ?
                                <span className=" flex flex-col items-center justify-center w-8 h-8 bg-green-200 rounded-full">
                                    <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                </span>
                                :
                                <span className=" flex flex-col items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" height=".8em" viewBox="0 0 448 512">
                                        <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" /></svg>
                                </span>
                        }
                        <div className={DaysExist ? 'bg-[#bbf7d0] w-1 md:h-20 h-10 self-center' : 'bg-white bg-opacity-30 w-1 md:h-20 h-10 self-center'} ></div>
                    </div>
                </Link>
                <Link href="#" className=" flex gap-3 justify-between  md:text-sm text-xs">
                    <div className=" text-white hidden md:flex md:flex-col items-center w-full overflow-hidden ">
                        <h3 className="font-medium leading-tight text-center">YOUR<br/>INFORMATIONS</h3>
                        
                    </div>
                    <div className=" flex flex-col h-full">
                        {
                            InfoExist ?
                                <span className=" flex flex-col items-center justify-center w-8 h-8 bg-green-200 rounded-full">
                                    <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                </span>
                                :
                                <span className=" flex flex-col items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" height=".8em" viewBox="0 0 576 512">
                                        
                                    <path d="M528 160V416c0 8.8-7.2 16-16 16H320c0-44.2-35.8-80-80-80H176c-44.2 0-80 35.8-80 80H64c-8.8 0-16-7.2-16-16V160H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z" /></svg>
                                </span>
                        }
                        {/* <div className=" bg-white bg-opacity-30 w-1 md:h-20 h-10 self-center" ></div> */}
                    </div>
                </Link>
            </div>
        </div >
    )

}
export default Steps
