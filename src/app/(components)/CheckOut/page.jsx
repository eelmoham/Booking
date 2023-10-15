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
import Priv from "../priv"
import Back from "../back"
import { button } from "@nextui-org/react";
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
  const [services, setServices] = useState([]);
  const isPackData = useSelector((state) => state.Pack.dataExist);
  const [hidden, setHidden] = useState(true);

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phonePattern = /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/;
  const [validEmail, setValidEmail] = useState(true);
  const [validTelephone, setValidTelephone] = useState(true);
  function validateInput(input, pattern) {
    return pattern.test(input);
  }

  const pushData = () => {
    if (!validEmail || !validTelephone)
      alert("Please check your email or telephone")
    if (fullname !== null && telephone !== null && email !== null && age >= 1 && guests >= 1 && level !== null) {
      if (validEmail && validTelephone) {
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
    }
  }

  useEffect(() => {
    if (infoData.dataExist == true) {
      setFullname(infoData.data.fullName)
      setTelephone(infoData.data.Telephone)
      setEmail(infoData.data.Email)
      setAge(infoData.data.Age)
      setGuests(infoData.data.Guest)
      setLevel(infoData.data.Level)
      setServices(infoData.data.service.map((item) => item.id))
    }
  }, [])

  useEffect(() => {
    if (email != null) {
      if (validateInput(email, emailPattern))
        setValidEmail(true)
      else {
        if (!validateInput(email, emailPattern))
          setValidEmail(false)
      }
    }
    if (telephone != null) {
      if (validateInput(telephone, phonePattern))
        setValidTelephone(true)
      else {
        if (!validateInput(telephone, phonePattern))
          setValidTelephone(false)
      }
    }
  }, [email, telephone])

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
                <Input validator={true} value={fullname} label='Fullname' type='text' id='fullname' placeholder='Type your fullname' required={true} seter={setFullname} />

              </div>
              <div className="relative z-0 w-full mb-6 group">
                <Input validator={validTelephone} value={telephone} label='Telephone' type='text' id='telephone' placeholder='+xxxxxxxxxxxx' required={true} seter={setTelephone} />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <Input validator={validEmail} value={email} label='Address Email' type='text' id='address' placeholder='Type your address' required={true} seter={setEmail} />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <label
                  htmlFor="level"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Select your level
                </label>
                <Select value={level} state={setLevel} id='level' />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <Input validator={true} value={age} label='Age' type='number' id='age' placeholder='18' required={true} seter={setAge} />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <Input validator={true} value={guests} label='Guests' type='number' id='Guests' placeholder='2' required={true} seter={setGuests} />
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
        <Priv link="/Days" />
        <Back link="/facture" setHidden={setHidden} Submited={fullname && telephone && email && age && validEmail && validTelephone} pushData={pushData} />
      </div>
    </div>
  );
};

export default CheckOut;
