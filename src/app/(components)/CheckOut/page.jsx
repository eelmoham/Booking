"use client";

import React, { useState, useEffect } from "react";
import Input from "./Input";
import Select from "./Select";

const CheckOut = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [fullname, setFullname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [guests, setGuests] = useState("");
  const [level, setLevel] = useState("");
  const [services, setServices] = useState([]);

  

  useEffect(() => {
    if (fullname && telephone && email && age && guests && level) {
      console.log('====================================');
    console.log(fullname);
    console.log(telephone);
    console.log(email);
    console.log(age);
    console.log(guests);
    console.log(level);
    console.log(services);
    console.log('====================================');
    }
    else {
     return ;
    }
  }, [services, fullname, telephone, email, age, guests, level]);

  const addService = (serv) => {
    services.push(serv);
    setServices(services);
  };


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
              <Input label='Fullname' type='text' id='fullname' placeholder='Type your fullname' required='true'  seter={setFullname} />
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
            <li
              key={items.id}
              onClick={() => {
                  if (services.includes(items.id)) {
                    // remove this service
                    const index = services.indexOf(items.id);
                    services.splice(index, 1);
                  }else
                  {
                    addService(items.id);
                  }
                }
              }
             className="mb-2">
              <input
                type="checkbox"
                onChange={() =>{
                  if (services.includes(items)) {
                    // remove this service
                    const index = services.indexOf(items);
                    services.splice(index, 1);
                  }
                  else {
                    addService(items);
                  }
                }}
                id={`option-${items.id}`}
                value={items.id}
                data-value={items.name}
                data-price={items.price}
                className="peer hidden"
                checked={services.includes(items)}
              />
              <label
                className={`inline-flex items-center justify-between w-full px-5 pb-5 pt-2 text-gray-500 bg-white border-2 rounded-lg cursor-pointer ${!services.includes(items)?'border-gray-200':'border-green-600'}  hover:text-gray-600 hover:bg-gray-50 `}
              >
                <div className="block">
                  <img
                    className="w-10 h-10"
                    src={`https://booking.tayyurt-surf.com/storage/${items.picture}`}
                  />
                  <div className="w-full text-lg font-semibold">
                    {items.title}
                    <label
                      className="ml-2 inline-flex items-center text-base font-semibold text-green-500"
                    >
                      +{items.price}€
                    </label>
                  </div>
                  <div className="w-full text-sm">{items.short_description}</div>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CheckOut;
