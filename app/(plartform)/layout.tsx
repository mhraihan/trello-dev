import { ClerkProvider } from "@clerk/nextjs";
import React, { ReactNode } from "react";

const PlartformLayout = ({ children }: { children: ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default PlartformLayout;
