'use client';

import { useSelector } from "react-redux";
import Submit from './submit';
import Loading from "../Loading/page";
import { useEffect, useState } from "react";
import Priv from "../priv"

const Facture = () => {
  const hostelData = useSelector((state) => state.Hostel.data);

  const packData = useSelector((state) => state.Pack.data);
  const isPackDataLoading = useSelector((state) => state.Pack.dataExist);

  const serviceData = useSelector((state) => state.Info.data);

  const daysData = useSelector((state) => state.Days.data);

  const [hidden, setHidden] = useState(true);

  const TotalPrice = () => {
    let Total = 0;
    if (daysData.offer)
      Total += packData.pack_price
    else
    {
      Total += daysData.numberOfDays * packData.day_price
      if (packData.with_hosting == "1")
        Total += daysData.numberOfDays * hostelData.day_price
    }
    Total *= serviceData.Guest
    serviceData.service.map((service) => {
      if (service) {
        Total += service.price;
      }
    })
    return (Total);
  }

  useEffect(() => {
    if (isPackDataLoading != true) 
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
          packData.with_hosting === '1' &&
            <div className="flex flex-col">
              <div className="relative flex items-center ">
                <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-[-4px]"></div>
                <h1 className="text-gray-400 ml-2">Rooms</h1>
              </div>
              <div className="flex gap-4 ml-5 text-black">
                <div>{hostelData.title}</div>
                {
                  daysData && daysData.offer ? <div className="text-green-500">Included Pack</div> : <div className="text-green-500"> {hostelData.day_price}€/Day/Guest</div>
                }

              </div>
            </div> 
        }


        <div className="flex flex-col">
          <div className="relative flex items-center ">
            <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-[-4px]"></div>
            <h1 className="text-gray-400 ml-2">Period</h1>
          </div>
          <div className="flex flex-col ml-3">
            <div className="flex">
              <div className="text-gray-700"> <span className="text-black"> </span> {daysData.from} - <span className="text-black"> </span> {daysData.to}</div>
            </div>
          </div>
        </div>

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
        <Priv link="/CheckOut"/>
        <div>
          <Submit days={daysData} hostel={hostelData} info={serviceData} packs={packData} siter={setHidden} />
        </div>
      </div>
      <Loading hidden={hidden} />
    </div>
  )
};

export default Facture;
