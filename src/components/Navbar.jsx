import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Logo, Tiktok, Twitter, Youtube } from "../assets/export";

const Navbar = () => {
  return (
    <div className="sticky top-14 left-0 w-full h-[87px] bg-black z-50 border-b-[0.5px] border-[#ffffff26] flex items-center justify-between px-3 md:px-6 lg:px-28 xl:px-48">
      <Link to="/">
        <img src={Logo} />
      </Link>

      <div className="hidden w-auto lg:flex justify-start items-center gap-8">
        <Link to="/" className="text-sm hover:opacity-60 font-medium">
          About
        </Link>
        <Link to="/" className="text-sm hover:opacity-60 font-medium">
          Responsibility
        </Link>
        <Link to="/" className="text-sm hover:opacity-60 font-medium">
          Careers
        </Link>
        <Link to="/" className="text-sm hover:opacity-60 font-medium">
          Shop
        </Link>

        <Link
          to="/"
          className="w-[168px] h-[46px] flex items-center justify-center border-[1px] border-[#ffffff26] transition-all duration-300 hover:border-white rounded-lg text-sm font-medium"
        >
          Download the app
        </Link>

        <div className="w-auto flex justify-start items-center gap-6">
          <Link to="/">
            <img src={Tiktok} />
          </Link>
          <Link to="/">
            <img src={Youtube} />
          </Link>
          <Link to="/">
            <img src={Instagram} />
          </Link>
          <Link to="/">
            <img src={Twitter} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
