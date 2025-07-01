import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/image/survey-money-logo.png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/mode-toggle";

const navbar = [
  { label: "Home", to: "/" },
  { label: "AboutUS", to: "/about" },
  { label: "Features", to: "/feature" },
  { label: "FAQs", to: "/faq" },
   { label: "Pricing", to: "/pricing" },
  //   { label: "ContactUs", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md flex items-center py-2 px-5 border-b-2 border-gray-100 dark:border-gray-500 dark:bg-midnight">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-16 h-auto max-sm:w-12" />
          <h1 className="text-sm lg:text-2xl md:text-lg text-midnight dark:text-white">
            <span className="text-purple font-bold mr-1">Survey</span>Infinity
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-8">
            {navbar.map((item) => (
              <li className="nav" key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className=" text-white text-lg p-5 max-sm:p-2 max-sm:px-4 max-sm:text-sm hover:text-white hover:opacity-80"
                  style={{
                    background:
                      "linear-gradient(320.2deg, #490F8F -0.43%, #7616EC 58.46%)",
                  }}
                >
                  Register
                </Button>
              </DialogTrigger>
            </form>
          </Dialog>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <div
              className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white dark:bg-midnight shadow-lg p-8 flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-6">
                {navbar.map((item) => (
                  <li className="nav " key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="block text-lg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-3"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-1 w-6 bg-purple rounded transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-1 w-6 bg-purple rounded my-1 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-1 w-6 bg-purple rounded transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>
    </header>
  );
};

export default Navbar;
