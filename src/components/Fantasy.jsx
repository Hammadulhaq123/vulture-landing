import React from "react";
import FantasyCard from "./FantasyCard";

const Fantasy = () => {
  const arr = [
    {
      title: "Payouts up to 1000x",
      description:
        "Betr Picks takes the traditional fantasy pick'em concept and amplifies it with the ability to win up to 1000x your entry if you correctly select up to 8 picks! Choose wisely and watch your winnings soar!",
      icon: "",
    },
    {
      title: "No Pushes",
      description:
        "Forget about frustrating ties and pushes. Betr Picks keeps the excitement flowing with no pushes allowed. Every pick counts, and every decision matters as you strive for victory.",
      icon: "",
    },
    {
      title: "Unleash your fantasy skills",
      description:
        "Betr Picks covers a wide range of sports, including NFL, NBA, MLB, NHL, and more! Whether you're a seasoned sports fan or a casual enthusiast, we offer an extensive selection of player projections to choose from. Dive into the action, analyze the stats, and trust your instincts to make the winning picks.",
      icon: "",
    },
  ];
  return (
    <div className="relative  w-full py-10 h-[calc(100vh-9rem)] border-b-[1px] border-[#ffffff26] flex gap-12 justify-start items-start ">
      <div className="w-1/2 h-full pl-3 md:pl-6 lg:pl-28 xl:pl-48">
        <div
          id="sticky"
          className="sticky  w-full flex flex-col gap-3 justify-start items-start"
        >
          <h1 className="text-[40px] lg:text-[50px] font-extrabold lg:font-bold">
            Fantasy just got betr
          </h1>
          <p className="text-[18px] font-normal text-[#ffffff76] ">
            Betr Picks is a new way to enjoy fantasy sports where you can pick
            MORE or LESS for your favorite players’ stats to win up to 1000x
            your entry! Make multiple picks across the NFL, NBA, MLB, NHL, and
            more! Pick everything from Patrick Mahomes passing yards to Aaron
            Judge home runs!
          </p>
        </div>
      </div>
      <div className=" w-1/2 h-auto flex flex-col justify-start items-start pr-3 md:pr-6 lg:pr-28 xl:pr-48 gap-4 ">
        <div className="w-full h-auto flex flex-col gap-12 justify-start items-start ">
          {arr?.map((item) => {
            return (
              <FantasyCard
                key={item?.title}
                title={item?.title}
                description={item?.description}
                icon={item?.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Fantasy;
