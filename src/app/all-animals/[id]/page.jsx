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
  const animals = cowes.find((ani) => ani.id == id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-8 p-6">
        
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src={animals.image}
            alt={animals.name}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {animals.name}
            </h2>

            <p className="text-gray-600 mb-4">
              {animals.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                {animals.category}
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {animals.breed}
              </span>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                {animals.type}
              </span>
            </div>

            <div className="space-y-2 text-gray-700">
              <p className="text-xl font-semibold text-green-600">
                ৳ {animals.price}
              </p>

              <p>
                <span className="font-semibold">Age:</span> {animals.age}
              </p>

              <p>
                <span className="font-semibold">Weight:</span> {animals.weight}
              </p>

              <p>
                <span className="font-semibold">Location:</span> {animals.location}
              </p>
            </div>
          </div>

          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition duration-300">
            Book Now
          </button>
        </div>
      </div>

      <div className="mt-10 bg-gray-50 p-6 rounded-2xl shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          Complete Your Booking
        </h3>
        <Booking />
      </div>
    </div>
  );
};

export default AnimalDetails;