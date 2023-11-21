import React, { ReactNode } from "react";
import NavBar from "./_components/Navbar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <NavBar />
      {children}
    </div>
  );
};

export default DashboardLayout;
