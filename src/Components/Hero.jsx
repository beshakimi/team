import React from "react";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <div className="mt-16 md:mt-36 w-full h-[150px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative">
      {/* تصویر پس‌زمینه */}
      <img
        src="media/images/welcome.jpg"
        alt="welcome image"
        className="w-full h-full object-cover"
      />

      {/* overlay نیمه شفاف برای افزایش کنتراست */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* متن روی تصویر */}
      <div className="absolute top-8 md:top-16 left-0 text-center md:text-left w-full mx-auto md:w-1/2 h-full flex flex-col gap-2 md:gap-8 lg:pt-10 sm:pl-12 lg:pl-32">
        {/* متن متحرک */}
        <ReactTyped
          strings={[
            "Discover Amazing Projects",
            "Build Your Future With Us",
            "Innovate, Create, Inspire"
          ]}
          typeSpeed={100}
          backSpeed={40}
          loop
          className="text-xl md:text-3xl lg:text-5xl md:h-28 text-orange-400 leading-tight font-bold drop-shadow-lg"
        />

        {/* توضیح کوتاه */}
        <div className="w-[70%] mx-auto md:w-full text-white drop-shadow-lg">
          {/* متن کوتاه برای موبایل */}
          <p className="text-xs sm:text-sm md:hidden">
            Discover and explore amazing projects in web, mobile, and ML.
          </p>

          {/* متن کامل برای md و بالاتر */}
          <p className="hidden md:block text-base">
            Discover and explore amazing projects in web, mobile, and machine learning.
            From innovative apps to advanced ML solutions, we bring your ideas to life.
          </p>
        </div>

      </div>
    </div>
  );
}
