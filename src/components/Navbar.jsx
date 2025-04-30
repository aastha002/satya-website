"use client";
import { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaAngleDown,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const menuItems = [
  { label: "Home", submenu: [] },
  { label: "Products", submenu: ["Product A", "Product B", "Product C"] },
  {
    label: "Investor Relations",
    submenu: ["Financials", "Reports", "Disclosures"],
  },
  { label: "Partners", submenu: ["Our Partners", "Become a Partner"] },
  {
    label: "Media",
    submenu: [
      "Milestones Achieved",
      "Media Coverage",
      "SATYA Song",
      "SATYA Sandesh",
    ],
  },
  {
    label: "Awards & Recognitions",
    submenu: ["Awards 2023", "Achievements"],
  },
  { label: "Careers", submenu: ["Join Us", "Open Positions"] },
  { label: "COVID-19", submenu: ["Initiatives", "Relief Work"] },
  { label: "Life @ SATYA", submenu: ["Culture", "Events"] },
  { label: "Contact-Us", submenu: ["Corporate Office", "Branches"] },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#c6370e] to-[#d9480f] text-white text-sm py-2 px-4 flex justify-between items-center">
        <span className="font-bold">Welcome to SATYA!</span>
        <a href="#" className="hover:underline text-xs md:text-sm">
          Vijayalakshmi Das Entrepreneurship Awards 2025, Nominations Open -
          Click Here
        </a>
        <div className="flex gap-3 text-white text-lg">
          <FaFacebook />
          <FaLinkedin />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>

      {/* Logo Bar */}
      <div className="bg-white py-3 px-4 shadow-md flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/images/satya-logo.png" alt="Logo" className="h-10" />
          <span className="font-bold text-[#d9480f] text-xl">
            SATYA MicroCapital Ltd.
          </span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#2d2d2d] text-white text-sm font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex gap-6 items-center flex-wrap">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  {item.label}
                  {item.submenu.length > 0 && (
                    <FaAngleDown className="text-xs" />
                  )}
                </div>
                <div className="w-4 h-[2px] bg-gradient-to-r from-orange-500 to-red-500 absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition" />

                {/* Dropdown */}
                {activeMenu === index && item.submenu.length > 0 && (
                  <div className="absolute top-full mt-2 left-0 bg-white text-black shadow-lg rounded-md py-2 w-48 z-50">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="bg-gradient-to-r from-[#d9480f] to-[#a52a2a] text-white px-5 py-2 ml-4 rounded-sm flex items-center gap-2 shadow-lg font-semibold">
            PAY EMI <IoIosArrowForward />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
