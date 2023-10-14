'use client';
import { useEffect } from "react"
import { useSelector } from "react-redux";


const Thanks = () => {
    const isPackDataLoading = useSelector((state) => state.Pack.dataExist);
    useEffect(() => {
        if (isPackDataLoading == false)
            location.href = "/Packs";
    }, [])

    return (
        <div className="flex m-auto">
            <div className=" bg-inherit p-6  md:mx-auto">
                <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                    <path fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                    </path>
                </svg>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Booking Done!</h3>
                    <p className="text-gray-600 my-2">Thank you for Choosing TAYYURT SURF.</p>
                    <p className=" text-black">
                        Our team is diligently working on processing your booking. We will review the details and contact you shortly to confirm your reservation and provide any additional information you may need.
                    </p>
                    <p className="mt-2 text-xs opacity-40 text-black"> Have a great day!  </p>
                    <div className="py-10 text-center">
                        <a href="https://tayyurt-surf.com/" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Our Activites
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thanks