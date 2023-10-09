import React from "react"
const Service = ({ items }) => {
    return (
            <div className="block">
                <img
                    className="w-10 h-10"
                    src={`https://booking.tayyurt-surf.com/storage/${items.picture}`}
                />
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