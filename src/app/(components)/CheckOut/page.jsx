"use client";

import React, { useState, useEffect, use } from "react";
// components
import Input from "./input";
import Select from "./Select";
import Service from "./service";
// reduce
import { useSelector, useDispatch } from 'react-redux'
import { setOrder } from "../Shared/info";
import Loading from "../Loading/page";
import Link from "next/link";
//fin

const CheckOut = () => {
  const infoData = useSelector((state) => state.Info);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  const [fullname, setFullname] = useState(null);
  const [telephone, setTelephone] = useState(null);
  const [email, setEmail] = useState(null);
  const [age, setAge] = useState(18);
  const [guests, setGuests] = useState(1);
  const [level, setLevel] = useState('Beginner');
  const [services, setServices] = useState(infoData.dataExist ? infoData.data.service.map((item) => item.id) : []);
  const isPackData = useSelector((state) => state.Pack.dataExist);
  const [hidden, setHidden] = useState(true);



  useEffect(() => {
    if (infoData.dataExist === true) {
      const orderData = {
        fullName: infoData.data.fullName,
        Telephone: infoData.data.Telephone,
        Email: infoData.data.Email,
        Age: infoData.data.Age,
        Guest: infoData.data.Guest,
        Level: infoData.data.Level,
        service: data.filter((item) => {
          if (services.includes(item.id)) {
            return item
          }
        })
      };
      dispatch(setOrder(orderData));
    }
    else if (fullname !== null && telephone !== null && email !== null && age >= 1 && guests >= 1 && level !== null && infoData.dataExist === false) {
      const orderData = {
        fullName: fullname,
        Telephone: telephone,
        Email: email,
        Age: age,
        Guest: guests,
        Level: level,
        service: data.filter((item) => {
          if (services.includes(item.id)) {
            return item
          }
        })
      };
      dispatch(setOrder(orderData));
    }
  }, [services, fullname, telephone, email, guests, level, age]);

  useEffect(() => {
    if (isPackData == false)
      location.href = "/Packs";
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://booking.tayyurt-surf.com/api/v1/services"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await res.json();
        setData(jsonData.data);
      } catch (error) {
        return (
          <div className="w-full flex justify-center items-center m-auto text-red-500 ">
            Something Wrrong try again later
          </div>
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Loading hidden={false} />
    );
  }

  if (!Array.isArray(data)) {
    return (
      <div className="w-full flex justify-center items-center m-auto text-red-500">
        Data is not in the expected format
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col m-auto h-full ">
      <div className="relative w-full h-full overflow-auto">
        <div className="w-full flex flex-row flex-wrap justify-center p-4 ">
          <form action="" className="w-full px-4">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <Input value={infoData.data.fullName} label='Fullname' type='text' id='fullname' placeholder='Type your fullname' required={true} seter={setFullname} />

              </div>
              <div className="relative z-0 w-full mb-6 group">
                <Input value={infoData.data.Telephone} label='Telephone' type='text' id='telephone' placeholder='+xxxxxxxxxxxx' required={true} seter={setTelephone} />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <Input value={infoData.data.Email} label='Address Email' type='text' id='address' placeholder='Type your address' required={true} seter={setEmail} />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <label
                  htmlFor="level"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Select your level
                </label>
                <Select value={infoData.data.Level} state={setLevel} id='level' />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <Input value={infoData.data.Age} label='Age' type='number' id='age' placeholder='18' required={true} seter={setAge} />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <Input value={infoData.data.Guest} label='Guests' type='number' id='Guests' placeholder='2' required={true} seter={setGuests} />
              </div>
            </div>
          </form>
        </div>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-1 my-4 bg-gray-200 border-0 rounded" />
          <div className="absolute px-4 -translate-x-1/2 bg-[#f8faf5] left-1/2 text-black">
            EXTRA SERVICES
          </div>
        </div>

        <ul
          className="grid w-full gap-6 md:grid-cols-3 items-center p-2"
          id="Services"
        >
          {data.map((items) => {

            return (
              <li key={items.id} className={services.includes(items.id) ? "cursor-pointer bg-white border-2 border-green-400 rounded-lg p-2" : "cursor-pointer bg-white border-2 border-[#dcf4e8] rounded-lg p-2"}
                onClick={
                  () => {
                    if (services.includes(items.id)) {
                      setServices(services.filter((item) => item !== items.id))
                    }
                    else {
                      setServices([...services, items.id])
                    }
                  }
                }
              >
                <Service items={items} services={services} seter={setServices} />
              </li>
            );
          })}
        </ul>
        <Loading hidden={hidden} />
      </div>
      <div className="w-full flex bg-white pt-3 pb-[.6rem] text-black sticky bottom-0 justify-between">
        <Link
          href="/Hostel"
          className="w-max mx-2 px-4 py-2 bg-inherit hover:bg-gray-200 rounded-md text-black border px-2 flex gap-1 items-center cursor-pointer"
        >
          <span className=' rotate-180'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></span>
          <span>Prev</span>
        </Link>
        <Link
          onClick={() => setHidden(false)}
          href='/facture'
          className={infoData.data.fullName ? " bottom-1 right-1 bg-green-500 text-white hover:bg-green-400 px-4 py-2 rounded-lg cursor-pointer" : "absolute bottom-1 right-1 bg-green-500 text-white hover:bg-green-400 px-4 py-2 rounded-lg opacity-25 pointer-events-none"}>
          <div className="flex gap-1 items-center px-2">
            <span>Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='white' className='text-white' viewBox="0 0 320 512"> <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CheckOut;
