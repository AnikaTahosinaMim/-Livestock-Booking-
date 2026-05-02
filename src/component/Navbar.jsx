"use client";
import Link from "next/link";
import React from "react";
import cowImg from "@/assets/cow.jpg";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const handleLogout = async () => {
    await authClient.signOut();
  };
  return (
    <div className=" shadow-lg border font-semibold">
      <div className="flex flex-col md:flex-row justify-between py-4 container mx-auto">
        <div>
          <Image src={cowImg} alt="cowimg" width={60} height={60}></Image>
        </div>
        <div>
          <ul className="flex items-center gap-1">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/all-animals"}> AllAnimals</Link>
            </li>
            <li>
              <Link href={"/profile"}>My profile</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-2 items-center list-none">
          {!user && (
            <ul className="flex gap-2">
              <li>
                {" "}
                <Link href={"/login"}>Login</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"/register"}>Register</Link>{" "}
              </li>
            </ul>
          )}
          {user && (
            <div className="flex gap-2 items-center">
              <Avatar size="sm">
                <Avatar.Image
                  alt={user?.name.charAt(0)}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>JD</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleLogout} variant="danger" size="sm">
                LogOut
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
