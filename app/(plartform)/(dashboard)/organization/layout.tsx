import { ReactNode } from "react";
import Sidebar from "../_components/Sidebar";

const OraganizationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto-full">
      <div className="flex gap-x-7">
        <div className="w-64 shirnk-0 hidden md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  );
};

export default OraganizationLayout;
