'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation'
const Pagination = () => {
    const paths = ['Packs', 'Hostel', 'Days', 'CheckOut', 'facture'];
    
    const pathname = usePathname()
    function handleNext() {
        if (paths.indexOf(pathname.split('/')[1]) < paths.length - 1)
         {   
            return paths[paths.indexOf(pathname.split('/')[1]) + 1]
        }
        else
            return '/'
    }
    
    function handlePrev() {
        if (paths.indexOf(pathname.split('/')[1]) > 0)
            return paths[paths.indexOf(pathname.split('/')[1]) - 1]
        else
            return '/'
    }

    return (
        <div className="w-full flex justify-between">
            
            
            
            <button disabled={paths.indexOf(pathname && pathname.split('/')[1]) == 0?true:false} 
            className={pathname==='/'||pathname==='/Packs'||paths.indexOf(pathname.split('/')[1]) == 0 ? 'hidden':''}> <Link className="p-2 mx-2" href={handlePrev()}>Prev</Link></button>
            
            
            
            <button disabled={
                ()=>{
                    if (paths.indexOf(pathname.split('/')[1]) == paths.length - 1)
                        return true
                    else if (pathname.split('/')[1] == 'Packs' || pathname.split('/')[1] == 'Hostel')
                        return false
                    else
                        return false
                }
            } className={pathname==='/'||pathname==='/Packs' || pathname==='/Hostel' || pathname==='/facture' ?'hidden':''}> <Link className="p-2 mx-2" href={handleNext()}>Next</Link></button>
        </div>
    );
};

export default Pagination;