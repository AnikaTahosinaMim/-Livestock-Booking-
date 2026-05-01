import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cowcard = ({ cow }) => {
  return (
    <div className="border p-4 rounded-xl ">
      <div className="relative w-full aspect-square">
        <Image
          src={cow.image}
          alt={cow.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-sm"
        />
      </div>
      <p className="text-sm font-semibold">{cow.location}</p>
      <p className="text-sm font-semibold">{cow.price}</p>
      <p className="text-pink-500 font-semibold">
        <Link href={`/all-animals/${cow.id}`}>view details</Link>
      </p>
    </div>
  );
};

export default Cowcard;
