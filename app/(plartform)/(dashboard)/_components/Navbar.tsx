import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";

import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";

import MobileSidebar from "./MobileSidebar";

const NavBar = () => {
  return (
    <>
      <nav className="fixed z-50 top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
        <MobileSidebar />
        <div className="flex item-center gap-x-4">
          <Logo />

          <Button
            variant="primary"
            size="sm"
            className="rounded-sm h-auto py-1.5 px-2"
          >
            <span className="hidden md:block">Create</span>
            <span className="md:hidden block">
              <Plus />
            </span>
          </Button>
        </div>
        <div className="ml-auto flex items-center gap-x-2">
          <OrganizationSwitcher
            hidePersonal={true}
            afterCreateOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/select-org"
            afterSelectOrganizationUrl="/organization/:id"
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  width: 30,
                  height: 30,
                },
              },
            }}
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
