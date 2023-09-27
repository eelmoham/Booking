'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation'
const Navigator = () => {
    const paths = ['Packs', 'Hostel', 'Days', 'CheckOut'];
    
    const pathname = usePathname()
    function handleNext() {
        if (paths.indexOf(pathname.split('/')[1]) < paths.length - 1)
         {   
            return paths[paths.indexOf(pathname.split('/')[1]) + 1]
        }
        else
            return "javascript:;"
    }
    
    function handlePrev() {
        if (paths.indexOf(pathname.split('/')[1]) > 0)
            return paths[paths.indexOf(pathname.split('/')[1]) - 1]
        else
            return "javascript:;"
    }

    return (
        <div className="w-full flex justify-between">
            <button disabled={()=>{
                if (paths.indexOf(pathname.split('/')[1]) == 0 )
                    return true
                else
                    return false
            }} className={paths.indexOf(pathname.split('/')[1]) == 0?'opacity-25':''}> <Link className="p-2 mx-2" href={handlePrev()}>Prev</Link></button>
            <button disabled={
                ()=>{
                    if (paths.indexOf(pathname.split('/')[1]) == paths.length - 1)
                        return true
                    else if (pathname.split('/')[1] == 'Packs' || pathname.split('/')[1] == 'Hostel')
                        return false
                    else
                        return false
                }
            } className={paths.indexOf(pathname.split('/')[1]) == paths.length - 1?'opacity-25':''}> <Link className="p-2 mx-2" href={handleNext()}>Next</Link></button>
        </div>
    );
};

export default Navigator;
