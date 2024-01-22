import AiMarketing from "../assets/AiMarketing.png";
import Team1 from "../assets/Team1.png";
import Team2 from "../assets/Team2.png";
import Team3 from "../assets/Team3.png";
import ArrowTarget from "../assets/ArrowTarget.png";
import Values from "../assets/Values.png";
import Dot from "./Dot";
const AboutHero = () => {
  return (
    <div className=" bg-black">
      <div className=" max-w-[920px] md:mx-auto text-center mx-5  py-10 md:py-20">
        <p className=" font-Oxanium font-[700] text-[30px] lg:text-[60px] md:text-[40px] text-[#FCD82B] max-w-[734px] mx-auto text-center">
          Crafting <span className=" text-white"> Success in Every Pixel</span>
        </p>
        <p className=" text-white font-[400] text-[14px] md:text-[18px] lg:text-[20px] py-10 max-w-[700px] lg:max-w-[934px] mx-auto text-center">
          we&apos;re architects of digital success. With a passion for
          innovation and a commitment to excellence, we embark on a journey to
          redefine the digital landscape for our clients.
        </p>
      </div>

      <div className=" bg-[#080808] py-28">
        <div className="max-w-5xl md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40">
          <div className="grid gap-10 items-center   sm:grid sm:grid-cols-2 md:mx-10 lg:mx-0  text-white">
            <div className="relative">
              <img src={ArrowTarget} alt="" />
              <div className="sm:hidden md:block">
                <Dot />
              </div>
            </div>
            <div className=" font-Oxanium">
              <p className=" font-[500]  text-[18px] md:text-[48px] text-[#FCD82B] md:leading-[50px] py-5">
                Our Mission
              </p>
              <p className=" font-[400] text-[14px] md:text-[20px] md:leading-[30px]">
                Our mission is clear: to simplify the complexities of the
                digital realm and empower businesses to thrive online. We
                believe in the transformative power of strategic thinking,
                cutting-edge technology, and a relentless pursuit of excellence.
              </p>
            </div>
          </div>

          <div className="grid gap-10 items-center sm:grid sm:grid-cols-2 md:mx-10 lg:mx-0   text-white py-20">
            <div className=" font-Oxanium">
              <p className=" font-[500]  text-[18px] md:text-[48px] text-[#FCD82B] md:leading-[50px] py-5">
                Our Values
              </p>
              <p className=" font-[400] text-[14px] md:text-[20px] lg:leading-[30px]">
                Transparency, innovation, and client success are not just
                words—they&apos;re our guiding principles. We believe in
                building relationships grounded in trust and delivering
                solutions that exceed expectations.
              </p>
            </div>
            <div className=" relative">
              <img src={Values} alt="" />
              <div className=" sm:hidden md:block">
                <Dot />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className=" font-Oxanium  max-w-5xl lg:mx-auto text-center mx-5  py-10 md:py-20">
            <p className=" font-[700] text-[20px] md:text-[48px] text-[#FCD82B] max-w-[734px] mx-auto text-center">
              Meet Our Team{" "}
            </p>
            <p className=" text-white font-[400] text-[14px] md:text-[20px] py-10 leading-[30px]">
              Meet the minds behind our success—an eclectic team of creatives,
              strategists, and technologists. United by a shared passion for
              innovation, our diverse backgrounds fuel our collaborative spirit.
            </p>

            <div className="">
              <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:flex items-between justify-center gap-5">
                <img src={Team1} alt="" />
                <img src={Team3} alt="" />
                <img src={Team2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
