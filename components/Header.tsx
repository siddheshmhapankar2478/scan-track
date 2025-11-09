import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { LayoutDashboard, PenBox } from "lucide-react";

const Header = () => {
  const links = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      href: "/dashboard",
      variant: "outline",
    },
    {
      name: "Transactions",
      icon: <PenBox size={18} />,
      href: "/transactions",
      variant: "default",
    },
  ];
  return (
    <div className="fixed top-0 w-full bg-[#1C4259] text-gray-600 px-12 py-2 flex items-center justify-between shadow-lg z-50">
      <Link href={"/"}>
        <Image width={200} height={150} src="/scan-track-logo.png" alt="logo" />
      </Link>

      <div className="flex gap-4">
        <SignedOut>
          <SignInButton forceRedirectUrl={"/dashboard"}>
            <Button variant="outline">Sign In</Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 flex gap-2 items-center"
            >
              <Button variant={link.variant}>
                {link.icon}
                <span className="hidden md:inline">{link.name}</span>
              </Button>
            </Link>
          ))}

          <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }} />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
