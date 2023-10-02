"use client";

import React, { useState, useEffect } from "react";
// components
import Input from "./Input";
import Select from "./Select";
import Service from "./Service";
// reduce
import { useSelector, useDispatch } from 'react-redux'
import { setOrder } from "../Shared/Info";
//fin

const CheckOut = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  const [fullname, setFullname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [guests, setGuests] = useState(0);
  const [level, setLevel] = useState("");
  const [services, setServices] = useState([]);



  useEffect(() => {
    
    if (fullname !== "" && telephone !== "" && email !== "" && age !== 0 && guests !== 0 && level !== "") {
      const orderData = {
        fullName: fullname,
        Telephone: telephone,
        Email: email,
        Age: age,
        Guest: guests,
        Level: level,
        service: data.map((item) => {
          if (services.includes(item.id)) {
            return {title:item.title, price:item.price}
          }
        })
      };
      console.log('*************');
      console.log('zepi: ',orderData);
      dispatch(setOrder(orderData));
      console.log('*************');
    }
  }, [services]);

  useEffect(() => {
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
      <div className="w-full flex justify-center items-center m-auto text-green-500">
        Loading...
      </div>
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
    <div className="w-full flex flex-col m-auto">
      <div className="w-full flex flex-row flex-wrap justify-center">
        <h1 id="step-title" className="text-lg  uppercase font-bold text-[#0c354d]">
          Your informations
        </h1>
        <form action="" className="w-full px-4">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <Input label='Fullname' type='text' id='fullname' placeholder='Type your fullname' required='true' seter={setFullname} />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <Input label='Telephone' type='text' id='telephone' placeholder='+xxxxxxxxxxxx' required='true' seter={setTelephone} />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <Input label='Address Email' type='text' id='address' placeholder='Type your address' required='true' seter={setEmail} />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="level"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Select your level
              </label>
              <Select state={setLevel} id='level' />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <Input label='Age' type='number' id='age' placeholder='18' required='true' seter={setAge} />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <Input label='Guests' type='number' id='Guests' placeholder='2' required='true' seter={setGuests} />
            </div>
          </div>
        </form>
      </div>

      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-4 bg-gray-200 border-0 rounded" />
        <div className="absolute px-4 -translate-x-1/2 bg-[#f3f3f3] left-1/2">
          EXTRA SERVICES
        </div>
      </div>

      <ul
        className="grid w-full gap-6 md:grid-cols-3 items-center border p-2"
        id="Services"
      >
        {data.map((items) => {

          return (
            <li key={items.id} className={services.includes(items.id) ? "border-2 border-green-400 rounded-lg p-2" : "border-2 border-gray-400 rounded-lg p-2"}
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
    </div>
  );
};

export default CheckOut;
