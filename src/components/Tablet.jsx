import React from "react";

const Tablet = ({ word }) => {
  return (
    <span className=" w-auto min-w-32 h-12 rounded-full border-[1px] border-[#ffffff46] text-[#ffffff46] text-sm font-medium px-6 flex items-center justify-center">
      {word}
    </span>
  );
};

export default Tablet;
