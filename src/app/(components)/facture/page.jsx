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


  return (
    <div className=" mx-2  h-full flex">
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
                {packData.pack_price} <span>€/&Days/Guest</span>
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
              <div className="flex gap-4 ml-5">
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
              <div> <span className="text-gray-400"> from :</span> {daysData.from?.substring(0, 15)}</div>
              <div> <span className="text-gray-400"> to : </span>{daysData.to?.substring(0, 15)}</div>
              {/* <span>=</span>
              <div className="text-green-500"> {daysData.numberOfDays} Days</div> */}
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
              <span className="text-gray-300">full name :</span> <div className="">{serviceData.fullName}</div>
            </div>
            <div className="flex gap-3">
              <span className="text-gray-300">email :</span> <div className="">{serviceData.Email}</div>
            </div>
            <div className="flex gap-3">
              <span className="text-gray-300">phone :</span> <div className="">{serviceData.Telephone}</div>
            </div>
            <div className="flex gap-3">
              <span className="text-gray-300">Level :</span> <div className="">{serviceData.Level}</div>
            </div>
            <div className="flex gap-3">
              <span className="text-gray-300">Age :</span> <div className="">{serviceData.Age}</div>
            </div>
            <div className="flex gap-3">
              <span className="text-gray-300">Guests :</span> <div className="">{serviceData.Guest}</div>
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

      <div className=" absolute bottom-2 right-1">
        <Submet days={daysData} hostel={hostelData} info={serviceData} packs={packData} />
      </div>
    </div>
  )
};

export default Facture;
