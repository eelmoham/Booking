'use client';
// import { RootState } from "@/app/store"; needed for typescript.
import { useSelector } from "react-redux";
import Submet from './submet';
import Loading from "../Loading/page";
import { useEffect, useState } from "react";
import Link from "next/link";
const Facture = () => {
  const hostelData = useSelector((state) => state.Hostel.data);

  const packData = useSelector((state) => state.Pack.data);
  const isPackDataLoading = useSelector((state) => state.Pack.dataExist);

  const serviceData = useSelector((state) => state.Info.data);

  const daysData = useSelector((state) => state.Days.data);

  const [hidden, setHidden] = useState(true);

  isPackDataLoading ? null : location.href = "/Packs";
  const TotalPrice = () => {
    let Total = 0;
    if (packData.with_hosting === '1') {
      //kin hostel
      Total = (daysData.numberOfDays * hostelData.day_price) + (daysData.numberOfDays * packData.day_price);
    }
    else {
      Total = packData.pack_price;
    }
    Total * serviceData.Guest
    //add price of each service
    serviceData.service.map((service) => {
      if (service) {
        Total += service.price;
      }
    })
    return (Total);
  }

  useEffect(() => {
    if (isPackDataLoading == false)
      location.href = "/Packs";
  }, [])

  return (
    <div className=" mx-2  h-full flex flex-col">
      <div className="flex flex-col gap-4 ml-2 border-l-2 m-auto">
        <div className="flex flex-col">
          <div className="relative flex items-center ">
            <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-[-4px]"></div>
            <h1 className="text-gray-400 ml-2">Pack</h1>
          </div>
          <div className="flex gap-4 ml-5">
            <div className="text-bold text-black">{packData.title}</div>
            {
              daysData.offer ? <div className="text-green-500">
                {packData.pack_price} <span>€/7Days/Guest</span>
              </div> : <div className="text-green-500"> {packData.day_price} <span>€/Day/Guest</span> </div>
            }

          </div>
        </div>

        {
          packData.with_hosting === '1' ?
            <div className="flex flex-col">
              <div className="relative flex items-center ">
                <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-[-4px]"></div>
                <h1 className="text-gray-400 ml-2">Rooms</h1>
              </div>
              <div className="flex gap-4 ml-5 text-black">
                <div>{hostelData.title}</div>
                {
                  daysData.offer ? <div className="text-green-500">Included Pack</div> : <div className="text-green-500"> {hostelData.day_price}€/Day/Guest</div>
                }

              </div>
            </div> : null
        }


        <div className="flex flex-col">
          <div className="relative flex items-center ">
            <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-[-4px]"></div>
            <h1 className="text-gray-400 ml-2">Period</h1>
          </div>
          <div className="flex flex-col ml-3">
            <div className="flex gap-4">
              <div className="text-gray-700"> <span className="text-black"> from :</span> {daysData.from.substring(0, 15)}</div>
              <div className="text-gray-700"> <span className="text-black"> to : </span>{daysData.to.substring(0, 15)}</div>
              <span>=</span>
              <div className="text-green-500"> {daysData.numberOfDays} Days</div>
            </div>
          </div>
        </div>

        {/* info of Client from serviceData */}
        <div className="flex flex-col">
          <div className="relative flex items-center ">
            <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-[-4px]"></div>
            <h1 className="text-gray-400 ml-2">Your info</h1>
          </div>
          <div className="ml-3">
            <div className="flex gap-3">
              <span className="text-black">full name :</span> <div className="text-gray-700">{serviceData.fullName}</div>
            </div>
            <div className="flex gap-3">
              <span className="text-black">email :</span> <div className="text-gray-700">{serviceData.Email}</div>
            </div>
            <div className="flex gap-3">
              <span className="text-black">phone :</span> <div className="text-gray-700">{serviceData.Telephone}</div>
            </div>
            <div className="flex gap-3">
              <span className="text-black">Level :</span> <div className="text-gray-700">{serviceData.Level}</div>
            </div>
            <div className="flex gap-3">
              <span className="text-black">Age :</span> <div className="text-gray-700">{serviceData.Age}</div>
            </div>
            <div className="flex gap-3">
              <span className="text-black">Guests :</span> <div className="text-gray-700">{serviceData.Guest}</div>
            </div>
          </div>
        </div>

        {
          serviceData.service.length > 0 ?
            <div className="flex flex-col">
              <div className="relative flex items-center ">
                <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-[-4px]"></div>
                <h1 className="text-gray-400 ml-2">Extra services</h1>
              </div>
              <div className="ml-3">
                {
                  serviceData.service.map((service) => {
                    if (service) {
                      return (
                        <div key={serviceData.fullName + '-' + service.title} className="flex flex-col">
                          <div className="text-black">{service.title}</div>
                          <div className="text-green-500"> {service.price}€</div>
                        </div>
                      )
                    }
                    else
                      return null;
                  })
                }
              </div>
            </div> : null
        }
        <div className="flex flex-col">
          <div className="relative flex items-center ">
            <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-[-4px]"></div>
            <h1 className="text-gray-400 ml-2">Total</h1>
          </div>
          <div className="flex gap-4 ml-5">
            <div className="text-bold text-black">{TotalPrice()}€</div>
          </div>

        </div>
      </div>

      <div className="w-full flex bg-white pt-3 pb-[.6rem] text-black sticky bottom-0 justify-between items-center">
        <Link
          href="/CheckOut"
          className="w-max mx-2 px-4 py-2 bg-inherit hover:bg-gray-200 rounded-md text-black border flex gap-1 items-center cursor-pointer"
        >
          <span className='rotate-180'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></span>
          <span>Prev</span>
        </Link>
        <div>

          <Submet days={daysData} hostel={hostelData} info={serviceData} packs={packData} siter={setHidden} />
        </div>
      </div>
      <Loading hidden={hidden} />
    </div>
  )
};

export default Facture;
