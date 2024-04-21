import React from "react";

const NeedHelp = () => {
  return (
    <div className="w-full h-auto py-10 lg:py-0 lg:h-[calc(70vh)] flex  items-center justify-center  px-3 md:px-6 lg:px-28 xl:px-48 border-y-[1px] border-[#ffffff26]">
      <div className="w-full lg:w-[80%] flex flex-col gap-[2px] justify-start items-start">
        <h3 className="text-sm font-semibold">If you need help:</h3>
        <p className="text-sm font-medium text-[#808080]">
          The National Council on Problem Gambling operates the National Problem
          Gambling Helpline Network{" "}
          <a href="tel:+1-800-522-4700" className="hover:opacity-20">
            (1-800-522-4700)
          </a>
          . The network is a single national access point to local resources for
          those seeking help for a gambling problem. The network consists of 28
          call centers which provide resources and referrals for all 50 states,
          Canada and the US Virgin Islands. Help is available 24/7 and is 100%
          confidential. <br /> <br />
          The National Problem Gambling Helpline Network also includes text and
          chat services. These features enable those who are gambling online or
          on their mobile phone to access help the same way they play. One call,
          text, or chat will get you to problem gambling help anywhere in the
          U.S. 24/7/365. <br /> <br />
          You can also visit National Problem Gambling Helpline Network here:
          <a
            href="https://www.ncpgambling.org/help-treatment/help-by-state/"
            target="_blank"
            className="hover:opacity-80"
          >
            https://www.ncpgambling.org/help-treatment/help-by-state/
          </a>
        </p>
      </div>
    </div>
  );
};

export default NeedHelp;
