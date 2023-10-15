import React from "react"
import Image from "next/image"
const Service = ({ items }) => {
    return (
        <div className="block">
            <Image
                className="w-10 h-10"
                alt="service"
                width={100} height={100}
                src={`https://booking.tayyurt-surf.com/storage/${items.picture}`} />
            <div className="w-full text-lg font-semibold text-black">
                {items.title}
                <span
                    className="ml-2 inline-flex items-center text-base font-semibold text-green-500"
                >
                    +{items.price}€
                </span>
            </div>
            <div className="w-full text-sm text-black">{items.short_description}</div>
        </div>
    )
}

export default Service