"use client";
import Link from "next/link";
import React, { useState } from "react";
import cowImg from "@/assets/cow.jpg";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="shadow-md border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src={cowImg}
            alt="logo"
            width={40}
            height={40}
            className="rounded-full py-1"
          />
          <h1 className="font-bold text-lg">Livestock</h1>
        </div>

        <ul className="hidden md:flex items-center gap-6 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-animals">Animals</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {!user ? (
            <>
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/register">
                <Button variant="ghost">Register</Button>
              </Link>
            </>
          ) : (
            <>
              <Avatar size="sm">
                <Avatar.Image src={user?.image} />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleLogout} size="sm" variant="danger">
                Logout
              </Button>
            </>
          )}
        </div>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 border-t">
          <Link href="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>

          <Link
            href="/all-animals"
            onClick={() => setOpen(false)}
            className="block"
          >
            Animals
          </Link>

          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="block"
          >
            Profile
          </Link>

          {!user ? (
            <div className="flex flex-col gap-2 pt-2">
              <Link href="/login">
                <Button className="w-full">Login</Button>
              </Link>
              <Link href="/register">
                <Button className="w-full">Register</Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3 pt-2">
              <Avatar size="sm">
                <Avatar.Image src={user?.image} />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleLogout} size="sm" variant="danger">
                Logout
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
