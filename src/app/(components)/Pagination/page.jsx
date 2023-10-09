'use client';

import Link from "next/link";
import { use, useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import Submet from './submet';


const Pagination = ({Pathname}) => {

    const infoData= useSelector((state) => state.Info.data);
    const daysData = useSelector((state) => state.Days.data);

    const paths = ['Packs', 'Hostel', 'Days', 'CheckOut', 'facture'];
    
    const [submeted, setSubmeted] = useState(true);

    function handleNext() {
        if (submeted) {
            if (paths.indexOf(Pathname.split('/')[1]) < paths.length - 1) {
                return paths[paths.indexOf(Pathname.split('/')[1]) + 1]
            }
            else
                return '/'
        }
        return Pathname
    }

    function handlePrev() {
        if (paths.indexOf(Pathname.split('/')[1]) > 0)
            return paths[paths.indexOf(Pathname.split('/')[1]) - 1]
        else
            return '/'
    }

    useEffect(() => {
        if (Pathname === "/Days")
        {
            if (!daysData.from)
                setSubmeted(false)
            else if (daysData.offer === false && !daysData.to)
                setSubmeted(false)
            else
                setSubmeted(true)
        }
        if (Pathname === '/CheckOut') {
            if (!infoData.fullName)
                setSubmeted(false)
            else
                setSubmeted(true)
        }
    }, [infoData , daysData, Pathname])



    if (!(Pathname === '/' || Pathname === '/Packs' || paths.indexOf(Pathname.split('/')[1]) == 0))
        return (
            <div className="w-full flex justify-between bg-white pt-3 pb-[.6rem] text-black">
                
                <Link className="text-black p-2 mx-2" href={handlePrev()}>Prev</Link>
                {
                    (Pathname == '/Hostel' || Pathname == '/facture' || Pathname == '/Days') ? null :
                    <Link className={submeted?" px-7 py-2.5 text-sm font-medium text-green-600 bg-[#b8ff65b0] hover:bg-[#b7ff65e5] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center":'px-7 py-2.5 text-sm font-medium text-green-600 bg-[#b8ff65b0] hover:bg-[#b7ff65e5] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center opacity-20'} href={handleNext()}>Next</Link>
                }
            </div>
        );
};

export default Pagination;