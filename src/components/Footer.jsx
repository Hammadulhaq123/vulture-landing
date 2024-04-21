import React from "react";
import { Logo } from "../assets/export";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Footer = () => {
  const { navigateTo } = useContext(GlobalContext);
  return (
    <div
      id="footer"
      className="w-full h-auto bg-black border-t-[1px] border-[#ffffff26]  grid grid-cols-1 grid-rows-3 lg:grid-cols-5 lg:grid-rows-1 gap-0 lg:gap-20 justify-start items-start py-10 lg:py-20  px-3 md:px-6 lg:px-28 xl:px-48 relative"
    >
      <div className="col-span-2 h-auto flex flex-col justify-start items-start gap-2">
        <button onClick={() => navigateTo("/")}>
          <img src={Logo} />
        </button>
        <span className=" text-[16px] text-gray-400 font-normal ">
          © 2024. All rights reserved.
        </span>
        <div className="">
          <h1 className="text-[16px]  font-normal">Betr Holdings, Inc.</h1>
          <span className="text-[16px]  font-normal  ">
            3046 Del Prado Blvd S Suite 1B <br />
            Cape Coral 33904
          </span>
        </div>
      </div>

      <div className=" mr-12 lg:mr-0 h-auto flex flex-col justify-start my-8 items-start lg:gap-2">
        <div className="flex flex-col justify-start items-start gap-1">
          <span className="text-[14px] font-normal">
            Owners <br />
            Owner Name here
          </span>
          <span className="text-[14px]  font-medium">123-456-7890</span>
        </div>
        <div className="flex flex-col gap-1 justify-start text-[14px] mt-5   font-medium items-start">
          <Link to="mailto:contact@vulture.com">contact@vulture.com</Link>
          <Link to="mailto:support@vulture.com">support@vulture.com</Link>
        </div>
      </div>

      <div className=" h-auto flex flex-col  my-8 text-[13px] font-medium justify-start items-start gap-3">
        <button onClick={() => navigateTo("/")}>Home</button>

        <button onClick={() => navigateTo("/services")}>About</button>
        <button onClick={() => navigateTo("/about-us")}>Responsibility</button>
        <button onClick={() => navigateTo("/contact-us")}>Careers</button>
        <button onClick={() => navigateTo("/contact-us")}>Shop</button>
      </div>

      <div className=" h-auto flex  text-[13px] my-8 font-medium flex-col justify-start items-start gap-3">
        <Link to="">Tiktok</Link>
        <Link to="">Youtube</Link>
        <Link to="">Instagram</Link>
        <Link to="">Twitter</Link>
      </div>
    </div>
  );
};

export default Footer;
