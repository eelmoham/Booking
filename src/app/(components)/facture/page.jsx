'use client';
// import { RootState } from "@/app/store"; needed for typescript.
import { useSelector } from "react-redux";
import Submet from './submet';
const Facture = () => {
  // Assuming 'Hostel' is the name of your slice
  const hostelData = useSelector((state) => state.Hostel.data);
  const isDataLoading = useSelector((state) => state.Hostel.dataExist);

  const packData = useSelector((state) => state.Pack.data);
  const isPackDataLoading = useSelector((state) => state.Pack.dataExist);

  const serviceData = useSelector((state) => state.Info.data);
  const isServiceDataLoading = useSelector((state) => state.Info.dataExist);

  const daysData = useSelector((state) => state.Days.data);
  const isDaysDataLoading = useSelector((state) => state.Days.dataExist);

  const TotalPrice = () => {
    let total = 0;
    total += packData.day_price * daysData.numberOfDays * serviceData.Guest;
    total += hostelData.day_price * daysData.numberOfDays * serviceData.Guest;
    console.log("total", total);
    serviceData.service.map((service) => {
      if (service)
        total += service.price;
    })
    return total;
  }

  console.log("service : " + serviceData.service.length);

  return (
    <div className=" mx-2 my-auto">
      {
        <div className="flex flex-col gap-4 ml-2 border-l-2">
          <div className="flex flex-col">
            <div className="relative flex items-center ">
              <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-[-4px]"></div>
              <h1 className="text-gray-400 ml-2">Pack</h1>
            </div>
            <div className="flex gap-4 ml-5">
              <div className="text-bold text-black">{packData.title}</div>
              <div className="text-green-500"> {packData.day_price}€/Day/Guest</div>
            </div>
          </div>

          {
            packData.with_hosting === '1' ?
              <div className="flex flex-col">
                <div className="relative flex items-center ">
                  <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-[-4px]"></div>
                  <h1 className="text-gray-400 ml-2">Rooms</h1>
                </div>
                <div className="flex gap-4 ml-5">
                  <div>{hostelData.title}</div>
                  <div className="text-green-500"> {hostelData.day_price}€/Day/Guest</div>
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
                <div> <span className="text-gray-400"> from :</span> {daysData.from?.substring(0, 15)}</div>
                <div> <span className="text-gray-400"> to : </span>{daysData.to?.substring(0, 15)}</div>
                <span>=</span>
                <div className="text-green-500"> {daysData.numberOfDays} Days</div>
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
                            <div>{service.title}</div>
                            <div className="text-green-500"> {service.price}€</div>
                          </div>
                        )
                      }
                      else
                        return null;
                    })
                  }
                </div>
              </div> : console.log("service : " + serviceData.service.length) && null
          }
          <div className="flex flex-col">
            <div className="relative flex items-center ">
              <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-[-4px]"></div>
              <h1 className="text-gray-400 ml-2">Toltal</h1>
            </div>
            <div className="flex gap-4 ml-5">
              <div className="text-bold text-black">{TotalPrice()}€</div>
            </div>

          </div>
        </div>
      }

      <div>
        <Submet days={daysData} hostel={hostelData} info={serviceData} packs={packData} />
      </div>
    </div>
  )
};

export default Facture;
