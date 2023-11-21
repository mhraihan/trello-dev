import { ReactNode } from "react";
import OrgControl from "./_components/org-control";

const OrgazinationIdLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrgazinationIdLayout;
