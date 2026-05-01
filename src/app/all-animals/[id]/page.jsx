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
      <h2>Animals details</h2>
      <div className="flex gap-10 border p-3 rounded-xl shadow-lg my-8">
        <div>
          <Image
            src={animals.image}
            alt="image"
            width={200}
            height={200}
          ></Image>
        </div>
        <div>
          <h2 className="font-bold text-xl">{animals.name}</h2>
          <p>{animals.description}</p>
          <p>{animals.category}</p>
          <span className="bg-pink-300 px-2 py-1 rounded-full">{animals.breed}</span>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;
