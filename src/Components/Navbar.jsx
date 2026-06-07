"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { LogoAcrobat } from "@gravity-ui/icons";
import { MdOutlinePolymer } from "react-icons/md";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName=usePathname();

  const linkClass=(path)=>pathName===path?"font-medium text-[#C9A84C]":"text-[#727971]";
  

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator  backdrop-blur-lg bg-[#0d1e1a]">
      <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
          <div className="flex items-center gap-3">
            <MdOutlinePolymer className="text-[#c7a64b]" />
           <Link href="/" className="no-underline hover:no-underline decoration-transparent"> <p className="font-bold font-playfair text-xl"><span className="text-white">Study</span><span className="text-[#c7a64b]">Nook</span></p></Link>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li className="font-plus_jakarta">
            <Link href="/" className={linkClass('/')}>Home</Link>
          </li>
          <li className="font-plus_jakarta">
            <Link href="/rooms" className={linkClass('/rooms')}>Rooms</Link>
          </li>
        </ul>
        <div className="hidden items-center gap-4 md:flex font-plus_jakarta">
         <Button className={`bg-[#0d1e1a] hover:bg-[#1f3530] text-foreground/80 hover:text-foreground transition-colors`} > <Link href="/login" className={`text-[#727971]`}>Login</Link></Button>
          <Link href="/signup">
            <Button className={`bg-[#c9a84c] text-black`}>Sign Up</Button>
          </Link>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="/" className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="block py-2 ">
                Rooms
              </Link>
            </li>

            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              <Link href="/login" className="block py-2">
                Login
              </Link>
              <Link href="/signup">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
