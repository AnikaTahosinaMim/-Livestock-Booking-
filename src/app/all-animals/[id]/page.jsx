import Booking from "@/component/Booking";
import Image from "next/image";
import React from "react";
export const metadata = {
  title: "Booking Details",
  description: "Perfect Quranbani Animals",
};

const AnimalDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://livestock-booking-5dpp.vercel.app/cow.json");
  const cowes = await res.json();
  console.log(cowes);
  const animals = cowes.find((ani) => ani.id == id);
  console.log(animals);
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 border items-center p-3 rounded-xl shadow-lg my-8">
        <div className="relative w-[300px] aspect-square">
          <Image
            src={animals.image}
            alt={animals.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-sm"
          />
        </div>
        <div>
          <h2 className="font-semibold text-2xl">{animals.name}</h2>
          <p className=" font-semibold">{animals.description}</p>
          <div className="flex gap-1 items-center">
            <span className="font-bold">{animals.category} ,</span>
            <span className="font-bold">{animals.breed} ,</span>
            <span className="font-bold">{animals.type}</span>
          </div>
          <div>
            <p className="font-bold text-xl ">Price : {animals.price}</p>
            <div className="flex gap-1">
              <p className="font-bold text-xl ">age : {animals.age} ,</p>
              <p className="font-bold text-xl ">weigth: {animals.weight}</p>
            </div>
            <p className="font-bold text-xl ">Location : {animals.location}</p>
          </div>
        </div>
      </div>
      <div>
        <Booking></Booking>
      </div>
    </div>
  );
};

export default AnimalDetails;
