import Image from "next/image";
import BannerImg from "@/assets/daniel.jpg";
import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BannerImg.src})` }}
      className="
        h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl"
    >
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl animate__animated animate__bounce">
            Find Your Perfect Qurbani Animal
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Choose healthy animals easily from our platform
          </p>
          <div className="flex gap-4">
            <Link href="/all-animals">
              <Button className="bg-gray-800">Explore Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
