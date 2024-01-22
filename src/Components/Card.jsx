import React from "react";

const Card = ({ img, Text, Title, img2, user, date }) => {
  return (
    <div>
      <div className="">
        <div className=" p-5 bg-[#181A2A] rounded-md shadow-md shadow-slate-900">
          <img src={img} alt="" className=" w-full" />
          <p className=" p-3 bg-[#4B6BFB0D]  rounded-md my-5 text-[#FCD82B] font-[500] text-[14px] inline-flex">
            {Title}
          </p>
          <p className=" font-[600]  text-[14px] lg:text-[24px] leading-[30px]">
            {Text}
          </p>

          <div className=" flex items-center gap-5 my-5">
            <img
              src={img2}
              className=" h-[26px] w-[26px] rounded-full bg-white"
            />
            <p className=" font-[500] text-[14px] md:text-[16px]  text-[#97989F]">
              {user}
            </p>
            <p className=" font-[400] text-[14px] md:text-[14px] text-[#97989F]">
              {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
