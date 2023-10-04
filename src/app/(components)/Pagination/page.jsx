'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { use, useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import Submet from './submet';


const Pagination = () => {

    const serviceData = useSelector((state) => state.Info.data);
    const daysData = useSelector((state) => state.Days.data);

    const paths = ['Packs', 'Hostel', 'Days', 'CheckOut', 'facture'];

    const pathname = usePathname()

    const [submeted, setSubmeted] = useState(false);
    function handleNext() {
        if (submeted) {
            if (paths.indexOf(pathname.split('/')[1]) < paths.length - 1) {
                return paths[paths.indexOf(pathname.split('/')[1]) + 1]
            }
            else
                return '/'
        }
        return pathname
    }

    function handlePrev() {
        if (paths.indexOf(pathname.split('/')[1]) > 0)
            return paths[paths.indexOf(pathname.split('/')[1]) - 1]
        else
            return '/'
    }

    useEffect(() => {
        if (pathname === '/Days') {
            if (daysData.from === undefined || daysData.from === null)
                setSubmeted(false)
        }
        else if (pathname === '/CheckOut') {
            if (serviceData.fullName === undefined || serviceData.full_name === null)
                setSubmeted(false)
            else if (serviceData.Email === undefined || serviceData.Email === null)
                setSubmeted(false)
            else if (serviceData.Telephone === undefined || serviceData.Telephone === null) 
                setSubmeted(false)
            else if (serviceData.Guest === undefined || serviceData.Guest === null) 
                setSubmeted(false)
            else
                setSubmeted(true)
        } else 
            setSubmeted(true)
    }, [serviceData , daysData])
    return (
        <div className="w-full flex justify-between">
            <button className={pathname === '/' || pathname === '/Packs' || paths.indexOf(pathname.split('/')[1]) == 0 ? ' opacity-20 pointer-events-none' : ''}> <Link className="p-2 mx-2" href={handlePrev()}>Prev</Link></button>
            <button className={ !submeted || pathname === '/' || pathname === '/Packs' || pathname === '/Hostel' || pathname === '/facture' ? ' opacity-20 pointer-events-none' : ''}> <Link className="p-2 mx-2" href={handleNext()}>Next</Link></button>
        </div>
    );
};

export default Pagination;