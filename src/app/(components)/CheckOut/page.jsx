"use client";

import React, { useState, useEffect } from "react";

const CheckOut = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
        <h1 id="step-title" class="text-lg  uppercase font-bold text-[#0c354d]">
          Your informations
        </h1>
        <form action="" className="w-full px-4">
          <div class="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="fullname"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Fullname
              </label>
              <input
                type="text"
                id="fullname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="Type your fullname"
                required=""
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="telephone"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Telephone
              </label>
              <input
                type="text"
                id="telephone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="+xxxxxxxxxxxx"
                required=""
              />
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="Email"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="text"
                id="Email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="Example@mail.com"
                required=""
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
            <label
                htmlFor="level"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Select your level
              </label>
              <select
                id="level"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
              >
                <option selected="" value="">
                  Choose Your Level
                </option>
                <option value="Beginner">Beginner</option>
                <option value="intermediate">intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="Age"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Age
              </label>
              <input
                type="number"
                id="Age"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="18"
                required=""
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="Guests"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Guests
              </label>
              <input
                type="number"
                id="Guests"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="2"
                required=""
              />
            </div>
          </div>
        </form>
      </div>

      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-64 h-1 my-4 bg-gray-200 border-0 rounded" />
        <div class="absolute px-4 -translate-x-1/2 bg-[#f3f3f3] left-1/2">
          EXTRA SERVICES
        </div>
      </div>

      <ul
        class="grid w-full gap-6 md:grid-cols-3 items-center border p-2"
        id="Services"
      >
        {data.map((items) => {
          return (
            <li class="mb-2">
              <input
                type="checkbox"
                id={`option-${items.id}`}
                value={items.id}
                data-value={items.name}
                data-price={items.price}
                class="hidden peer"
              />
              <label
                for={`option-${items.id}`}
                class="inline-flex items-center justify-between w-full px-5 pb-5 pt-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-green-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 "
              >
                <div class="block">
                  <img
                    class="w-10 h-10"
                    src={`https://booking.tayyurt-surf.com/storage/${items.picture}`}
                  />
                  <div class="w-full text-lg font-semibold">
                    {items.title}
                    <label
                      class="ml-2 inline-flex items-center text-base font-semibold text-green-500"
                      for={`option-${items.id}`}
                    >
                      +{items.price}€
                    </label>
                  </div>
                  <div class="w-full text-sm">{items.short_description}</div>
                </div>
              </label>
            </li>
          );
        })}{" "}
      </ul>
    </div>
  );
};

export default CheckOut;
