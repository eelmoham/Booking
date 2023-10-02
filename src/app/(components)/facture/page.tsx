'use client';
import { RootState } from "@/app/store";
import { get } from "http";
import { useSelector } from "react-redux";

const Facture = () => {
  // Assuming 'Hostel' is the name of your slice
  const hostelData = useSelector((state: RootState) => state.Hostel.data);
  const isDataLoading = useSelector((state: RootState) => state.Hostel.dataExist);

  const packData = useSelector((state: RootState) => state.Pack.data);
  const isPackDataLoading = useSelector((state: RootState) => state.Pack.dataExist);

  const serviceData = useSelector((state: RootState) => state.Info.data);
  const isServiceDataLoading = useSelector((state: RootState) => state.Info.dataExist);

  const daysData = useSelector((state: RootState) => state.Days.data);
  const isDaysDataLoading = useSelector((state: RootState) => state.Days.dataExist);

  console.log("****>", hostelData);
  console.log("****>", packData);
  console.log("****>", serviceData);
  console.log("****>", daysData);
  return (
    <div>
      {
        <div>
          <div className="flex flex-col">
            <div>{packData.title}</div>
            <div className="text-green-500"> {packData.day_price}/Day/Guest</div>
          </div>
          <div className="flex flex-col">
            <div>{hostelData.title}</div>
            <div className="text-green-500"> {hostelData.day_price}/Day/Guest</div>
          </div>

          {/* period */}
          <div className="flex flex-col">
            <div>period</div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div>from : {daysData.from}</div>
                <div>to : {daysData.to}</div>
              </div>
              <div>
                number of days : {daysData.numberOfDays}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div>services</div>
            {
              serviceData.services.map((items: any, index: number) => (
                <div key={"service_" + index} className="flex flex-col">
                  <div>title:{items.title}</div>
                  <div className="text-green-500"> price: {items.price}</div>
                </div>
              ))
            }
          </div>

        </div>
      }
    </div>
  )
};

export default Facture;
