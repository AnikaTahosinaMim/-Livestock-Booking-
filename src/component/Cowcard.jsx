import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cowcard = ({ cow }) => {
  return (
    <div className="border p-4 rounded-xl ">
      <div>
        <Image src={cow.image} alt={cow.name} width={150} height={150} />
      </div>
      <p>{cow.location}</p>
      <p>{cow.price}</p>
      <p className="text-pink-500 font-semibold">
        <Link href={`/all-animals/${cow.id}`}>view details</Link>
      </p>
    </div>
  );
};

export default Cowcard;
