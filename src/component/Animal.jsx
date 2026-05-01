import React from "react";
import Cowcard from "./Cowcard";

const Animal = async () => {
  const res = await fetch("https://livestock-booking-t6fo.vercel.app/cow.json");
  const data = await res.json();
  const cowes = data.slice(0, 4);
  console.log(cowes);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 my-8">
      {cowes.map((cow) => (
        <Cowcard key={cow.id} cow={cow}></Cowcard>
      ))}
    </div>
  );
};

export default Animal;
