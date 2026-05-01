import Cowcard from "@/component/Cowcard";
import React from "react";

const AllAnimals = async () => {
  const res = await fetch("https://livestock-booking-t6fo.vercel.app/cow.json");
  const cowes = await res.json();

  return (
    <div>
      <h2 className="text-xl font-semibold my-6">All Animal</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {cowes.map((cow) => (
          <Cowcard key={cow.id} cow={cow}></Cowcard>
        ))}
      </div>
    </div>
  );
};

export default AllAnimals;
