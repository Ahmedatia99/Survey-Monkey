import React from "react";
import logo from "/image/survey-money-logo.png";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
const Footer = () => {
  const iconClass =
    "w-5 h-5 text-gray-400 hover:text-gray-300 transition-colors duration-300";
  return (
    <footer className="mx-auto w-full bg-footer text-gray-300 p-4 py-8 px-4 sm:px-6 mt-5 md:mt-20">
      <div className="container mx-auto flex flex-col gap-10 md:flex-row md:justify-between md:items-start flex-wrap">
        <div className="flex-1  mb-8 md:mb-0">
          <div className="flex items-center mb-2">
            <img src={logo} className="w-16 mr-2" alt="Survey Infinity Logo" />
            <h3 className="text-white font-bold">Survey Infinity</h3>
          </div>
          <p className="text-xs">
            Create, distribute, and analyze surveys with ease. Get valuable
            insights from your audience.
          </p>
          <div className="flex space-x-3 mt-3">
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className={iconClass} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className={iconClass} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook className={iconClass} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className={iconClass} />
            </a>
          </div>
        </div>
        <div className="flex-1 mb-8 md:mb-0">
          <h4 className="font-bold mb-2">Products</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Survey Builder
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Quiz Maker
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Form Creator
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Poll System
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Analytics Dashboard
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 mb-8 md:mb-0">
          <h4 className="font-bold mb-2">Resources</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Tutorials
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Templates
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 min-w-[220px]">
          <h4 className="font-bold mb-2">Stay Updated</h4>
          <p className="text-sm mb-2">
            Subscribe to our newsletter for tips and updates
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 bg-gray-800 text-white rounded mb-2 w-full border border-gray-700"
          />
          <button className="gradient text-white p-2 rounded w-full hover:opacity-80 transition-all duration-200 ">
            Subscribe
          </button>
        </div>
      </div>
      <hr className="my-5 border-gray-700" />
      <div className="container max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-gray-400 text-xs gap-2">
        <p className="text-sm text-center sm:text-left">
          © 2025 SurveyPro. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center sm:justify-end mt-2 sm:mt-0">
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Terms
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Privacy
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Security
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
