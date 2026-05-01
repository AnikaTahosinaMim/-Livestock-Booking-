"use client";

import { useState } from "react";
import Cowcard from "@/component/Cowcard";

export default function AllAnimalsClient({ cowes }) {
  const [sortType, setSortType] = useState("");
  const [filterType, setFilterType] = useState("All");

  let filteredCows = cowes.filter((cow) => {
    return filterType === "All" ? true : cow.type === filterType;
  });

  if (sortType === "low") {
    filteredCows = [...filteredCows].sort((a, b) => a.price - b.price);
  } else if (sortType === "high") {
    filteredCows = [...filteredCows].sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between my-6">
        <h2 className="text-xl font-semibold">All Animal</h2>

        <div className="flex gap-2 flex-wrap">
          <select
            onChange={(e) => setFilterType(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="All">All</option>
            <option value="Cow">Cow</option>
            <option value="Goat">Goat</option>
          </select>

          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Sort</option>
            <option value="low">Price Low → High</option>
            <option value="high">Price High → Low</option>
          </select>
        </div>
      </div>

      {filteredCows.length === 0 && (
        <p className="text-red-500">No animals found</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {filteredCows.map((cow) => (
          <Cowcard key={cow.id} cow={cow} />
        ))}
      </div>
    </div>
  );
}
