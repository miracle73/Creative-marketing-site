import Hero1 from "../assets/HeroSection1.png";
import Canva from "../assets/Canva.png";
import Upwork from "../assets/Upwork.png";
import warnerBros from "../assets/warnerBros.png";
import Woocommercde from "../assets/Woocommercde.png";
import Rbs from "../assets/rbs.png";
import Line from "../assets/Line.png";
import Woman1 from "../assets/woman1.png";
import Woman2 from "../assets/woman2.png";
import Woman3 from "../assets/woman3.png";
import Vector from "../assets/Vector.png";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Dot from "./Dot";

const HeroSection = () => {
  return (
    <div className="">
      <div className=" max-w-5xl md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 text-white">
        <div className=" grid gap-2 md:flex justify-end items-start mt-10 md:mt-40">
          <div className=" font-[600]  max-w-[650px]">
            <p className=" text-[24px] md:text-[34px] lg:text-[54px] px-5">
              Elevate Your Brand with Strategic Marketing Solutions
            </p>
            <div className=" md:border-l-2 border-yellow-500 px-5 md:h-[261px] my-10">
              <p className="  text-[14px] py-2 md:text-[24px] font-[400] md:px-3 md:py-2 border border-yellow-800 text-center md:inline">
                Explore our services
              </p>
            </div>{" "}
          </div>
          <div className=" ">
            <img src={Hero1} alt="" />
          </div>
        </div>

        <div className=" grid md:flex items-center py-5">
          <p className=" font-[600] font-Titillium text-[20px] w-[100px] md:text-[30px] lg:text-[40px] md:w-[250px]">
            Trusted By
          </p>
          <marquee direction=" left">
            <div className=" flex items-center gap-10">
              <img src={Canva} alt="" />
              <img src={Upwork} alt="" />
              <img src={warnerBros} alt="" />
              <img src={Woocommercde} alt="" />
              <img src={Rbs} alt="" />
            </div>
          </marquee>
        </div>
      </div>

      <div className="">
        <div className=" py-10 flex items-start ">
          <img src={Line} alt="" className=" " />
        </div>

        <div className=" max-w-5xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 text-white ">
          <div className=" grid gap-5 md:flex items-start justify-between">
            <div className="">
              <p className=" font-Titillium font-[600] text-[24px] text-center md:text-left md:text-[30px]  lg:text-[48px] max-w-[646px]">
                Main reaction Agency for high performance marketing solutions
              </p>
              <div className="  my-10">
                <p className=" text-[14px] py-2 md:text-[24px] font-[400] md:px-8 md:py-4 border border-yellow-800 text-center md:inline">
                  Services
                </p>
              </div>{" "}
            </div>
            <div className="">
              <p className=" max-w-[450px] md:max-w-[500px]  text-justify text-[16px]  md:text-[20px] lg:text-[24px]">
                We&apos;re a dynamic team, passionate about simplifying the
                digital realm for you. Our goal is to optimize your website for
                a stellar user experience in Digital PR, Content Marketing, and
                AI Marketing. Think of us as your partners in cutting through
                complexity and boosting your online presence.
              </p>
            </div>
          </div>
          <div className=" grid md:flex items-center gap-10 py-20">
            <div className=" ">
              <img src={Woman1} alt="" />
            </div>
            <div className="">
              <img src={Woman2} alt="" />
            </div>
          </div>
        </div>

        <div className=" py-10 flex justify-end ">
          <img src={Line} alt="" className=" " />
        </div>

        <div className="max-w-5xl md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 text-white">
          <div className=" text-center">
            <p className=" font-[700] text-[20px] md:text-[30px] lg:text-[40px]">
              Unlock the full potential of your online presence{" "}
            </p>
            <p className=" font-[400] text-[14px] md:text-[18px] lg:text-[20px]">
              From Digital PR to cutting-edge AI Marketing, we&apos;ve got the
              tools to propel your brand forward.
            </p>
          </div>

          <div className=" grid gap-2 md:gap-0 md:grid-cols-3 py-10 text-black">
            <div className="bg-white">
              <div className="  px-10 md:px-12 lg:px-20">
                <img src={Vector} alt="" className=" pt-10 lg:pt-20" />
                <p className=" text-[14px] md:text-[18px] lg:text-[24px] font-[700] pt-10 ">
                  Digtial PR
                </p>
                <p className=" text-[12px] md:text-[14px] lg:text-[18px] font-[400] pb-10">
                  Learn More
                </p>
              </div>
            </div>
            <div className="bg-[#FFF7CF]">
              <div className="  px-10 md:px-12 lg:px-20">
                <img src={Vector} alt="" className="pt-10 lg:pt-20" />
                <p className=" text-[14px] md:text-[18px] lg:text-[24px] font-[700] pt-10 ">
                  Content Marketing
                </p>
                <p className=" text-[12px] md:text-[14px] lg:text-[18px] font-[400] pb-10">
                  Learn More
                </p>
              </div>
            </div>
            <div className="bg-white">
              <div className="  px-10 md:px-12 lg:px-20">
                <img src={Vector} alt="" className="pt-10 lg:pt-20" />
                <p className=" text-[14px] md:text-[18px] lg:text-[24px] font-[700] pt-10 ">
                  AI Marketing
                </p>
                <p className="text-[12px] md:text-[14px] lg:text-[18px] font-[400] pb-10">
                  Learn More
                </p>
              </div>
            </div>
          </div>

          <div className=" py-20">
            <div className=" text-center py-20">
              <p className=" font-[700] text-[20px] md:text-[20px] lg:text-[40px]">
                Case Studies Showcase
              </p>
              <p className=" font-[400] text-[14px] md:text-[18px] lg:text-[20px] max-w-[700px] lg:max-w-[918px] mx-auto">
                See success in action. Explore how our tailored solutions have
                transformed businesses. Check out our case studies to witness
                the impact we&apos;ve made for our partners.
              </p>
            </div>
            {/* <div className=" grid gap-10 md:grid md:grid-cols-2 items-start justify-center md:gap-10"> */}
            <div className=" grid gap-10 md:grid md:grid-cols-2  md:gap-10">
              <div className="relative">
                <div className="">
                  <img src={Woman3} alt="" className=" " />
                </div>
                <Dot />
              </div>
              <div className=" max-w-[569px]">
                <p className=" text-[#FCD82B] font-[500] text-[20px] lg:text-[48px] lg:leading-[50px]">
                  Oviva Multisite – multilingual and market-specific
                </p>
                <p className=" text-[14px] md:text-[20px] font-[400] pt-5 md:leading-[30px]">
                  Launch of a multipage solution that automatically directs
                  visitors to the appropriate market-specific website and
                  language.
                </p>
                <p className=" text[12px] md:text-[16px] font-[700] py-4 md:py-10">
                  Learn More
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className=" text-center">
              <p className=" font-[700] text-[20px] md:text-[20px] lg:text-[40px]">
                Why Choose Us
              </p>
              <p className=" font-[400] text-[14px] md:text-[18px] lg:text-[20px] max-w-[700px] lg:max-w-[918px] mx-auto">
                Why partner with us? We&apos;re more than a service provider;
                we&apos;re your dedicated allies. Discover why businesses trust
                us for seamless solutions and unparalleled results.
              </p>
            </div>

            <div className=" grid gap-2 md:gap-0 md:grid-cols-3 py-10 text-black">
              <div className="bg-white">
                <div className="  px-10 md:px-12 lg:px-20">
                  <img src={Vector} alt="" className="pt-20" />
                  <p className=" text-[14px] md:text-[18px] lg:text-[24px] font-[700] py-5 md:py-10 lg:py-14 ">
                    Expertise that Drives Results
                  </p>
                  {/* <p className=" text-[16px] font-[400] pb-10">Learn More</p> */}
                </div>
              </div>
              <div className="bg-[#FFF7CF]">
                <div className=" px-10 md:px-12 lg:px-20">
                  <img src={Vector} alt="" className="pt-20" />
                  <p className=" text-[14px] md:text-[18px] lg:text-[24px] font-[700] py-5 md:py-10 lg:py-14 ">
                    Tailored Solutions for Your Success
                  </p>
                  {/* <p className=" text-[16px] font-[400] pb-10">Learn More</p> */}
                </div>
              </div>
              <div className="bg-white">
                <div className="  px-10 md:px-12 lg:px-20">
                  <img src={Vector} alt="" className="pt-20" />
                  <p className=" text-[14px] md:text-[18px] lg:text-[24px] font-[700] py-5 md:py-10 lg:py-14  ">
                    Unparalleled Support and Collaboration
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Testimonials />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HeroSection;
