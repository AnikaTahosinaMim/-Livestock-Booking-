"use client";
import { UpdateUser } from "@/component/UpdateUser";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import React from "react";

const Profiles = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);
  return (
    <div>
      <h3 className="text-xl font-bold text-center">My  profile</h3>
      <Card className="w-96 mx-auto flex  flex-col text-center items-center">
        <Avatar size="sm" className="w-25 h-25">
          <Avatar.Image
            alt="userName"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
        <h2 className="font-bold text-xl">{user?.name}</h2>
        <p  className="text-muted">{user?.email}</p>
        <UpdateUser></UpdateUser>
      </Card>
    </div>
  );
};

export default Profiles;
