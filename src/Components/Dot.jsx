import React from "react";
import DotImage from "../assets/Yellow-Dot.png";

const Dot = () => {
  return (
    <div>
      <div className=" w-[50px] h-[50px] sm:bottom-[-10px] sm:right-[80px] md:w-[80px] md:h-[80px] bottom-[-30px] right-[-10px] absolute  md:bottom-[-40px] md:right-[-20px] lg:bottom-[-40px] lg:right-[-50px] 2xl:bottom-[-40px] 2xl:right-[10px]">
        <img src={DotImage} alt="" className=" " />
      </div>
    </div>
  );
};

export default Dot;
