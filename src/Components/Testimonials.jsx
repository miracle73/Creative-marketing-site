import React from "react";
import Testimonial from "../assets/Testimonial1.png";

const Testimonials = () => {
  return (
    <div className=" py-20 bg-[#080808] text-white">
      <div className=" text-center">
        <p className=" font-[700] text-[20px] lg:text-[40px] font-Oxanium">
          Testimonials
        </p>
        <p className=" font-[400] text-[14px] lg:text-[20px] max-w-[712px] mx-auto font-Oxanium text-center">
          Join Main reaction today to stay focused on the reason you&apos;re
          using marketing in the first place: bringing your vision to life.
        </p>
      </div>

      <div className=" py-20">
        <div className=" bg-white max-w-4xl mx-auto">
          <div className=" grid gap-10 md:flex items-start p-10 md:p-20">
            <div className="">
              <p className=" font-[500] text-[18px] md:text-[38px] text-[#202020] ">
                “Customers and interested parties engaged.”
              </p>
            </div>
            <div className="">
              <p className=" text-[14px] md:text-[16px] font-[400] text-black mb-5 md:mb-10">
                “I found it easy to capture my ideas and sketch visuals to share
                with my clients on the go”
              </p>
              <div className=" flex items-center gap-5">
                <img src={Testimonial} alt="" />
                <div className="">
                  <p className=" text-black">King Star</p>
                  <p className=" text-[#3C3C3C] text-[13px] font-[400]">
                    — Gavin Wieske, Marketing Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
