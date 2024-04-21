import React from "react";
import { Tiktok } from "../assets/export";

const FantasyCard = ({ title, icon, description }) => {
  return (
    <div className="w-full px-4 flex justify-start items-start gap-4">
      <span className="w-14 h-14 mt-1 rounded-3xl border-[1px] border-[#ffffff76] flex items-center justify-center">
        <img
          src={
            "https://assets-global.website-files.com/62ed9b0abe9f7f955b2c20a8/62ed9b0abe9f7fa6b32c210f_%F0%9F%8F%88.png"
          }
          alt="tiktok_page"
          className="w-[60%]"
        />
      </span>
      <div className="w-[80%] flex flex-col gap-[4px] justify-start items-start">
        <h2 className="text-2xl font-medium">{title}</h2>
        <p className="text-lg leading-snug font-normal text-[#808080]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FantasyCard;
