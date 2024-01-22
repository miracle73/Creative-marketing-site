import AiMarketing from "../assets/AiMarketing.png";
import Dot from "./Dot";
const ServiceHero = () => {
  return (
    <div className=" bg-black">
      <div className=" max-w-[920px] md:mx-auto text-center mx-5  py-10 md:py-20">
        <p className=" font-Oxanium font-[400] md:font-[700] text-[30px] lg:text-[60px] text-[#FCD82B] max-w-[734px] mx-auto text-center">
          Elevate{" "}
          <span className=" text-white">Your Brand with Our Expertise</span>
        </p>
        <p className=" text-white font-[400] text-[14px] lg:text-[20px] py-10 max-w-[700px] lg:max-w-[934px] mx-auto text-center">
          We&apos;re not just a team; we&apos;re your partners in navigating the
          digital landscape. Let&apos;s craft a unique online experience that
          sets your brand apart.
        </p>
        <p className=" px-4 py-3 font-[700] text-[14px] lg:text-[18px] text-white bg-[#3CB265] inline ">
          {" "}
          Check out our services
        </p>
      </div>

      <div className=" bg-[#080808] py-28">
        <div className="max-w-5xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40">
          <div className=" grid md:grid-cols-2 gap-10 items-center  text-white">
            <div className=" relative">
              <div className="">
                <img src={AiMarketing} alt="" />
                <div className="">
                  <Dot />
                </div>
              </div>
            </div>
            <div className=" font-Oxanium">
              <p className=" font-[500]  text-[18px] lg:text-[48px] text-[#FCD82B] lg:leading-[50px] py-5">
                Digital PR: Building Your Digital Narrative
              </p>
              <p className=" font-[400] text-[14px] sm:text-[18px] lg:text-[20px] lg:leading-[30px]">
                Craft a compelling digital narrative with our Digital PR
                expertise. From strategic media placements to impactful brand
                storytelling, we&apos;ll amplify your online presence. Our
                proven methods secure your place in the digital spotlight,
                driving engagement and fostering trust.
              </p>
              <p className=" font-[700] text-[14px] lg:text-[16px] py-5 lg:py-10">
                Book a Call
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center  text-white py-10">
            <div className=" font-Oxanium">
              <p className=" font-[500]  text-[18px] lg:text-[48px] text-[#FCD82B] lg:leading-[50px] py-5">
                Content Marketing (Social Media Marketing Focus)
              </p>
              <p className=" font-[400] text-[14px] sm:text-[18px] lg:text-[20px] lg:leading-[30px]">
                Unlock the power of Content Marketing, with a special focus on
                Social Media. We don&apos;t just create content; we tell stories
                that resonate. From captivating visuals to strategic social
                media campaigns, we&apos;ll make your brand an irresistible
                force in the digital landscape.
              </p>
              <p className="  font-[700] text-[14px] lg:text-[16px] py-5 lg:py-10">
                Book a Call
              </p>
            </div>
            <div className=" relative">
              <img src={AiMarketing} alt="" />
              <div className="">
                <Dot />
              </div>
            </div>
          </div>

          <div className=" grid md:grid-cols-2 gap-10 items-start  text-white">
            <div className=" relative">
              <img src={AiMarketing} alt="" />
              <div className="">
                <Dot />
              </div>
            </div>
            <div className=" font-Oxanium">
              <p className=" font-[500]  text-[18px] lg:text-[48px] text-[#FCD82B] lg:leading-[50px] py-5">
                Digital PR: Building Your Digital Narrative
              </p>
              <p className="  font-[400] text-[14px] sm:text-[18px] lg:text-[20px] lg:leading-[30px]">
                Craft a compelling digital narrative with our Digital PR
                expertise. From strategic media placements to impactful brand
                storytelling, we&apos;ll amplify your online presence. Our
                proven methods secure your place in the digital spotlight,
                driving engagement and fostering trust.
              </p>
              <p className="  font-[700] text-[14px] lg:text-[16px] py-5 lg:py-10">
                Book a Call
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
