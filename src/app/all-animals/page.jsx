import Cowcard from "@/component/Cowcard";
import AllAnimalsClient from "@/component/SortAnimals";
import React from "react";

const AllAnimals = async () => {
  const res = await fetch("https://livestock-booking-t6fo.vercel.app/cow.json");
  const cowes = await res.json();

  return (
    <div>
     
      <AllAnimalsClient cowes={cowes}></AllAnimalsClient>
    </div>
  );
};

export default AllAnimals;
