import Booking from "@/component/Booking";
import Image from "next/image";
import React from "react";

const AnimalDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://livestock-booking-t6fo.vercel.app/cow.json");
  const cowes = await res.json();
  console.log(cowes);
  const animals = cowes.find((ani) => ani.id == id);
  console.log(animals);
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 border p-3 rounded-xl shadow-lg my-8">
        <div className="relative w-[200px] aspect-square">
          <Image
            src={animals.image}
            alt={animals.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-sm"
          />
        </div>
        <div>
          <span className="font-bold text-sm text-gray-300 bg-blue-950 px-2 py-1 rounded-full">
            {animals.type}
          </span>
          <h2 className="font-semibold text-3xl text-gray-700">
            {animals.name}
          </h2>
          <p className="text-gray-700 font-semibold">{animals.description}</p>
          <div className="flex gap-1 items-center">
            <span className="text-gray-800">{animals.category} ,</span>
            <span className="text-gray-800">{animals.breed}</span>
          </div>
          <div>
            <p className="font-bold text-xl text-gray-700">
              Price : {animals.price}
            </p>
            <div className="flex gap-1">
              <p className="font-bold text-xl text-gray-700">
                age : {animals.age} ,
              </p>
              <p className="font-bold text-xl text-gray-700">
                weigth: {animals.weight}
              </p>
            </div>
            <p className="font-bold text-xl text-gray-700">
              Location : {animals.location}
            </p>
          </div>
        </div>
      </div>
      <div >
        <Booking></Booking>
      </div>
    </div>
  );
};

export default AnimalDetails;
