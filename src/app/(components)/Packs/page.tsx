import Link from "next/link"

const Packs = () => {
    return (
        <div className=" flex flex-col">
            <div className=" text-black font-bold text-center">
                PICKUP A PACK
            </div>
            <div className="flex w-full flex-row flex-wrap justify-center items-center" id="Packs">
                <div className="m-4 w-full rounded-lg border border-gray-200 bg-white shadow sm:max-w-xs">
                    <div className="flex flex-col items-center pb-5 pt-4">
                        <h5 className="mb-1 text-xl font-medium text-gray-900">Pack Surf Coaching Intermediate</h5>
                        <img className="mb-3 h-24 w-24 rounded-full shadow-lg" src="https://booking.tayyurt-surf.com/storage/packs/4/jLWkSNMxsOGx31PYdGU1NyTlOxZROVnzm3v7mtBv.webp" alt="Bonnie image" /><span className="px-3 text-center text-sm text-gray-500">For improvers and intermediates, this package includes lessons and tips adapted to your level.</span>
                        <span className="mt-2 text-center text-[15px] font-bold text-green-500">510 €
                            <label className="text-[12px] text-gray-500">/ 7 days</label>
                        </span>
                        <div className="mt-4 flex space-x-3">
                            <Link href="Hostel" className="inline-flex items-center rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-100">Select</Link>
                        </div>
                    </div>
                </div>

                <div className="m-4 w-full rounded-lg border border-gray-200 bg-white shadow sm:max-w-xs">
                    <div className="flex flex-col items-center pb-5 pt-4">
                        <h5 className="mb-1 text-xl font-medium text-gray-900">Pack Surf &amp; Yoga</h5>
                        <img className="mb-3 h-24 w-24 rounded-full shadow-lg" src="https://booking.tayyurt-surf.com/storage/packs/3/wbnYNwbiQG7PlZS43uJc1t529enUzMIfHhwf3Kgr.jpg" alt="Bonnie image" /><span className="px-3 text-center text-sm text-gray-500">The perfect combo for Surf and Yoga ! Practice your surf skills during the day and stretch in the evening with our yogi.</span>
                        <span className="mt-2 text-center text-[15px] font-bold text-green-500">560 €
                            <label className="text-[12px] text-gray-500">/ 7 days</label>
                        </span>
                        <div className="mt-4 flex space-x-3">
                            <a href="javascript:the_form.id_pack=3;the_form.pack_price=560;meta_data={pack: 560, days: 80, name:'Pack Surf &amp; Yoga', room:meta_data.room};steper(1);" className="inline-flex items-center rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-100">Select</a>
                        </div>
                    </div>
                </div>
                <div className="m-4 w-full rounded-lg border border-gray-200 bg-white shadow sm:max-w-xs">
                    <div className="flex flex-col items-center pb-5 pt-4">
                        <h5 className="mb-1 text-xl font-medium text-gray-900">Pack Surf Guiding</h5>
                        <img className="mb-3 h-24 w-24 rounded-full shadow-lg" src="https://booking.tayyurt-surf.com/storage/packs/2/WZQExAN7qcwcMwYjngJ6dB0rcukqbexg8WI7k8LJ.jpg" alt="Bonnie image" /><span className="px-3 text-center text-sm text-gray-500">For intermediate to advanced surfers, this package is marked by the rhythm of the tides and conditions.</span>
                        <span className="mt-2 text-center text-[15px] font-bold text-green-500">500 €
                            <label className="text-[12px] text-gray-500">/ 7 days</label>
                        </span>
                        <div className="mt-4 flex space-x-3">
                            <a href="javascript:the_form.id_pack=2;the_form.pack_price=500;meta_data={pack: 500, days: 120, name:'Pack Surf Guiding', room:meta_data.room};steper(1);" className="inline-flex items-center rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-100">Select</a>
                        </div>
                    </div>
                </div>
                <div className="m-4 w-full rounded-lg border border-gray-200 bg-white shadow sm:max-w-xs">
                    <div className="flex flex-col items-center pb-5 pt-4">
                        <h5 className="mb-1 text-xl font-medium text-gray-900">Pack Surf Lesson</h5>
                        <img className="mb-3 h-24 w-24 rounded-full shadow-lg" src="https://booking.tayyurt-surf.com/storage/packs/1/xzvhtwMmoRsC3kQI1Ttag23L6OjJjOfHJTs1t6Yb.jpg" alt="Bonnie image" /><span className="px-3 text-center text-sm text-gray-500">Ideal for never surfed or beginner level, this package follows a comprehensive programme to guarantee your progression.</span>
                        <span className="mt-2 text-center text-[15px] font-bold text-green-500">510 €
                            <label className="text-[12px] text-gray-500">/ 7 days</label>
                        </span>
                        <div className="mt-4 flex space-x-3">
                            <a href="javascript:the_form.id_pack=1;the_form.pack_price=510;meta_data={pack: 510, days: 200, name:'Pack Surf Lesson', room:meta_data.room};steper(1);" className="inline-flex items-center rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-100">Select</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Packs
