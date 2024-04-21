import React, { useEffect } from "react";
import { HeroMockup } from "../assets/export";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      var elements = document.getElementsByClassName("typewrite");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-type");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    };
  });
  return (
    <div className="w-full py-8 lg:py-0 lg:h-[calc(100vh-9rem)] flex flex-col lg:flex-row justify-start items-center px-3 md:px-6 lg:px-28 xl:px-48">
      <div className="w-full lg:w-1/2 flex flex-col gap-12 justify-start  items-center lg:items-start">
        <div className="flex flex-col justify-start items-center lg:items-start">
          <h1
            data-period="3000"
            data-type='[ "Group Chats", "Tiktok Feeds", "Jake Paul", "Dollar bets" ]'
            className="typewrite text-[50px] font-extrabold text-center lg:text-left lg:text-[74px] lg:font-bold leading-tight"
          >
            <span class="wrap"></span>
          </h1>
          <h1 className="text-[50px] font-extrabold text-center lg:text-left lg:text-[74px] lg:font-bold leading-tight">
            just got better.
          </h1>
        </div>

        <p className="text-[17px] text-center lg:text-left font-normal text-[#ffffff76]">
          Betr Fantasy & Sportsbook is your new home for pick'em style DFS games{" "}
          and our flagship microbetting experience.
        </p>

        <Link
          to="/"
          className="w-[168px] h-[46px] flex items-center justify-center bg-[#c00000] transition-all duration-300 hover:border-white rounded-lg text-sm font-medium"
        >
          Download the app
        </Link>
      </div>
      <div className="w-full lg:w-1/2">
        <img src={HeroMockup} alt="hero-mockup" />
      </div>
    </div>
  );
};

export default Hero;
