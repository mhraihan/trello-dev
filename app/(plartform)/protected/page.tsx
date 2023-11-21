"use client";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";
// import { auth, currentUser } from "@clerk/nextjs";
import React from "react";

const page = () => {
  //   const user = await currentUser();
  //   const { userId } = auth();

  const { userId } = useAuth();
  const { user } = useUser();
  return (
    <div>
      User: {user?.firstName}
      id: {userId}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default page;
