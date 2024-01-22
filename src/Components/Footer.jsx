import { Link } from "react-router-dom";
import ArrowRightFillIcon from "remixicon-react/ArrowRightFillIcon";
import FacebookFillIcon from "remixicon-react/FacebookFillIcon";
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";

const Footer = () => {
  return (
    <div className=" border-t-2 border-t-[#FCD82B] bg-black">
      <div className="max-w-5xl lg:mx-auto mx-5 md:mx-10 2xl:max-w-full 2xl:mx-40 py-5 md:py-28 text-white">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start justify-start  md:items-center md:justify-center  ">
          <div className="  text-white ">
            <p className=" font-[700] text-[24px] py-3 md:py-5">MainReaction</p>
            <p className=" font-[400]  text-[12px] md:text-[16px] py-7 md:py-10">
              Subscribe to keep up with the latest news
            </p>
            <div className="">
              <p className=" font-[700] text-[12px]  uppercase">Get In Touch</p>
              <div className=" cursor-pointer flex gap-5 my-5">
                <FacebookFillIcon />
                <LinkedinFillIcon />
              </div>
            </div>
          </div>
          <div className="">
            <p className=" text-[18px] font-[500] py-5">Learn</p>
            <div className=" grid gap-5">
              <Link to="/">
                <p className=" text-[12px] md:text-[16px]">Our Product</p>
              </Link>
              <Link to="/">
                <p className=" text-[12px] md:text-[16px]">Tutorials</p>
              </Link>
              <Link to="/service">
                <p className=" text-[12px] md:text-[16px]">Our Service</p>
              </Link>
              <Link to="/">
                <p className=" text-[12px] md:text-[16px]">Best Features</p>
              </Link>
            </div>
          </div>
          <div className="">
            <p className=" text-[18px] font-[500] py-5">Company</p>
            <div className=" grid gap-5">
              <Link to="/about">
                <p className="  text-[12px] md:text-[16px]"> About us</p>
              </Link>
              <Link to="/">
                <p className="  text-[12px] md:text-[16px]">Careers</p>
              </Link>
              <Link to="/">
                <p className="  text-[12px] md:text-[16px]">Contact Us</p>
              </Link>
              <Link to="/blog">
                <p className="  text-[12px] md:text-[16px]">News & Blog</p>
              </Link>
            </div>
          </div>
          <div className=" max-w-[312px]">
            <p className=" py-5  text-[12px] md:text-[16px]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots.
            </p>
            <div className="  md:mt-5 flex items-start gap-5  max-w[400px]">
              <input type="text" className="w-full p-2" />
              <button className=" text-white  bg-[#FCD82B] rounded p-2 ">
                {" "}
                <ArrowRightFillIcon className=" " />
              </button>
            </div>
          </div>
        </div>
        <div className=" flex justify-between items-center pt-20 font-[400] text-[12px]">
          <p>&copy;2023 mainreaction. All rights reserved.</p>
          <p>Partner & Contribute</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
