'use client';

// import Link from "next/link";
// import { use, useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import submit from './submit';


const Pagination = ({ Pathname }) => {
    return
    <>
    </>

    // const infoData = useSelector((state) => state.Info.data);
    // const daysData = useSelector((state) => state.Days.data);

    // const paths = ['Packs', 'Hostel', 'Days', 'CheckOut', 'facture'];

    // const [submited, setsubmited] = useState(true);

    // function handleNext() {
    //     if (submited) {
    //         if (paths.indexOf(Pathname.split('/')[1]) < paths.length - 1) {
    //             return paths[paths.indexOf(Pathname.split('/')[1]) + 1]
    //         }
    //         else
    //             return '/'
    //     }
    //     return Pathname
    // }

    // function handle<span>Prev</span><span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></span>() {
    //     if (paths.indexOf(Pathname.split('/')[1]) > 0)
    //         return paths[paths.indexOf(Pathname.split('/')[1]) - 1]
    //     else
    //         return '/'
    // }

    // useEffect(() => {
    //     if (Pathname === "/Days") {
    //         if (!daysData.from)
    //             setsubmited(false)
    //         else if (daysData.offer === false && !daysData.to)
    //             setsubmited(false)
    //         else
    //             setsubmited(true)
    //     }
    //     if (Pathname === '/CheckOut') {
    //         if (!infoData.fullName)
    //             setsubmited(false)
    //         else
    //             setsubmited(true)
    //     }
    // }, [infoData, daysData, Pathname])



    // if (!(Pathname === '/' || Pathname === '/Packs' || paths.indexOf(Pathname.split('/')[1]) == 0))
    //     return (
    //         <div className="w-full flex justify-between bg-white pt-3 pb-[.6rem] text-black">

    //             <Link className="text-black p-2 mx-2" href={handle<span>Prev</span><span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></span>()}><span>Prev</span><span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></span></Link>
    //             {
    //                 (Pathname == '/Hostel' || Pathname == '/facture' || Pathname == '/Days' || Pathname == "/CheckOut") ? null :
    //                     <Link className={submited ? "absolute bottom-1 right-1 p-2 mx-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400" : " pointer-events-none opacity-30 absolute bottom-1 right-1 p-2 mx-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400"} href={handleNext()}>
    //                         <div className="flex gap-1 items-center">
    //                             <span>Next</span>
    //                             <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='white' className='text-white' viewBox="0 0 320 512"> <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
    //                         </div>
    //                     </Link>
    //             }
    //         </div>
};

export default Pagination;