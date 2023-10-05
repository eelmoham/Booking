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
            setSubmeted(true)
        if (Pathname === '/CheckOut') {
            if (!infoData.fullName)
                setSubmeted(false)
            else
                setSubmeted(true)
        }
    }, [infoData , daysData, Pathname])



    if (!(Pathname === '/' || Pathname === '/Packs' || paths.indexOf(Pathname.split('/')[1]) == 0))
        return (
            <div className="w-full flex justify-between bg-white pt-3 pb-[.6rem]">
                
                <Link className="p-2 mx-2" href={handlePrev()}>Prev</Link>
                {
                    (Pathname == '/Hostel' || Pathname == '/facture') ? null :
                    <Link className={submeted?"p-2 mx-2":'p-2 mx-2 opacity-20'} href={handleNext()}>Next</Link>
                }
            </div>
        );
};

export default Pagination;