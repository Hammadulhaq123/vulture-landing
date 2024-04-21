import React from "react";
import { Instagram, Tiktok, Twitter, Youtube } from "../assets/export";
import { Link } from "react-router-dom";

const FollowUs = () => {
  return (
    <div className=" bg-black w-full h-[60vh] lg:h-[calc(100vh-9rem)] flex flex-col items-center justify-center px-3 md:px-6 lg:px-28 xl:px-48">
      <h1 className="text-[40px] lg:text-[50px] font-extrabold lg:font-bold text-center">
        Follow us
      </h1>
      <p className="text-[18px] font-normal text-[#ffffff76] text-center">
        Play-by-play. Moment-by-moment. Come join the family as we turn the
        world into our betting and fantasy playground. <br />
        The future of sports, fantasy, and betting just got betr.
      </p>

      <div className="w-auto flex mt-8 justify-start items-center gap-5">
        <Link
          className="w-14 h-14 rounded-3xl border-[1px] border-[#ffffff76] flex items-center justify-center"
          to="/"
        >
          <img src={Tiktok} alt="tiktok_page" />
        </Link>
        <Link
          className="w-14 h-14 rounded-3xl border-[1px] border-[#ffffff76] flex items-center justify-center"
          to="/"
        >
          <img src={Youtube} alt="youtube_page" />
        </Link>
        <Link
          className="w-14 h-14 rounded-3xl border-[1px] border-[#ffffff76] flex items-center justify-center"
          to="/"
        >
          <img src={Instagram} alt="instagram_page" />
        </Link>
        <Link
          className="w-14 h-14 rounded-3xl border-[1px] border-[#ffffff76] flex items-center justify-center"
          to="/"
        >
          <img src={Twitter} alt="twitter_page" />
        </Link>
      </div>
    </div>
  );
};

export default FollowUs;
