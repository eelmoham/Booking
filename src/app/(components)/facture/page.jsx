'use client';
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";

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
    if (isDataLoading && isPackDataLoading && isServiceDataLoading && isDaysDataLoading) {
      let total = 0;
      total += hostelData.day_price * daysData.numberOfDays * daysData.numberOfGuests;
      total += packData.day_price * daysData.numberOfDays * daysData.numberOfGuests;
      serviceData.service.map((service) => {
        if (service) {
          total += service.price * daysData.numberOfGuests;
        }
      })
      return total;
    }
  }
  return (
    <div>
      {
        <div className="flex flex-col gap-4 ml-2 border-l-2">

          <div className="flex flex-col">
            <h1 className="text-gray-400">Pack</h1>
            <div className="flex gap-4 ml-3">
              <div className="text-bold text-black">{packData.title}</div>
              <div className="text-green-500"> {packData.day_price}€/Day/Guest</div>
            </div>
          </div>


          <div className="flex flex-col">
            <h1 className="text-gray-400">Room</h1>
            <div className="flex gap-4 ml-3">
              <div>{hostelData.title}</div>
              <div className="text-green-500"> {hostelData.day_price}€/Day/Guest</div>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-gray-400">Room</h1>
            <div className="flex flex-col ml-3">
              <div className="flex gap-4">
                <div> <span className="text-gray-400"> from :</span> {daysData.from?.substring(0, 15)}</div>
                <div> <span className="text-gray-400"> to : </span>{daysData.to?.substring(0, 15)}</div>
                <span>=</span>
                <div className="text-green-500"> {daysData.numberOfDays} Days</div>
              </div>
            </div>
          </div>


          <div className="flex flex-col">
            <h1 className="text-gray-400">Extra services</h1>
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
          </div>
          <div className="flex flex-col">
            <h1 className="text-gray-400">Toltal</h1>
            <div className="flex gap-4 ml-3">
              <div className="text-bold text-black">{TotalPrice()}€</div>
            </div>

          </div>

        </div>
      }
    </div>
  )
};

export default Facture;
