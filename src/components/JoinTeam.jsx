import React from "react";
import { Link } from "react-router-dom";

const JoinTeam = () => {
  return (
    <div className=" w-full h-[calc(50vh)] flex flex-col gap-3 items-center justify-center  px-3 md:px-6 lg:px-28 xl:px-48 border-y-[1px] border-[#ffffff26]">
      <h1 className="text-[40px] lg:text-[45px] font-extrabold lg:font-bold text-center">
        Join the team
      </h1>
      <p className="text-[18px] font-normal text-[#ffffff76] text-center">
        Come build with us in Miami 🌴 as we make sports & betting betr
      </p>

      <Link
        to="/"
        className="w-[168px] h-[46px] flex items-center justify-center mt-3 bg-[#c00000] transition-all duration-300 hover:border-white rounded-lg text-sm font-medium"
      >
        Download the app
      </Link>
    </div>
  );
};

export default JoinTeam;
