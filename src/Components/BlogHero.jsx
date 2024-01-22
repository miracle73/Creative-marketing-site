import USA from "../assets/us.png";
import UsaRange from "../assets/usaRange.png";
import RwandaRange from "../assets/rwandaRange.png";
import Rwanda from "../assets/Rwanda.png";
import Egypt from "../assets/EgyptRange.png";
import EgyptFlag from "../assets/EgyptFlag.png";
import Card1 from "../assets/Card1.png";
import Car from "../assets/Car.png";
import City from "../assets/City.png";
import Card from "./Card";
const BlogHero = () => {
  return (
    <div className="">
      <div className=" bg-[#262626] ">
        <div className=" ">
          <div className="flex items-end mx-5 md:mx-10 pt-20">
            <div className="">
              <p className=" font-Oxanium mx-10  2xl:mx-40  pb-3 md:pb-5 font-[700] text-[16px] md:text-[40px] leading-[30px] md:leading-[50px] text-white">
                The Services we offer spans across different countries.
              </p>
              <p className=" font-Oxanium mx-10  2xl:mx-40 font-[400] text-[16px] md:text-[20px] leading-[30px] text-white">
                Data visualization & analysis
              </p>
            </div>
            <div className=" flex-col inline-flex items-center py-1 px-2 bg-[#1A1A1AA6] shadow shadow-white font-[500] text-[20px] md:text-[40px] text-white">
              <p>+</p>
              <p>-</p>
            </div>
          </div>
          <div className="bg-url2 bg-cover w-full ">
            <div className=" max-w-[586px] mx-10  2xl:mx-40 py-5 lg:py-16">
              <div className=" font-Oxanium text-white font-[400] flex items-center justify-between py-5 ">
                <p className=" text-[20px] lg:text-[40px] font-[500] text-white">
                  {"<"}
                </p>
                <p className=" px-3 py-2 bg-[#3CB265] text-[12px] md:text-[14px]  rounded-xl">
                  Rwanda
                </p>
                <p className=" px-3 py-2 bg-[#1A1A1AA6] text-[12px] md:text-[14px]  rounded-xl">
                  United States
                </p>
                <p className=" px-3 py-2 bg-[#1A1A1AA6] text-[12px] md:text-[14px]  rounded-xl">
                  Egypt
                </p>
                <p className=" lg:text-[40px] font-[500] text-white text-[20px]">
                  {">"}
                </p>
              </div>
              <div className=" text-white bg-[#1A1A1AA6]  p-5">
                <div className=" font-Oxanium flex justify-between items-center  rounded">
                  <p className=" font-[400] text-[14px] lg:text-[20px] leading-[30px]">
                    Total rate of this month
                  </p>
                  <p className=" px-3 py-2 text-[12px] lg:text-[20px]  border border-[#4E4D4D] rounded-xl">
                    This year
                  </p>
                </div>

                <div className="">
                  <div className=" flex items-center gap-5">
                    <p className=" font-[800] text-[30px] lg:text-[54px] leading-[73px]">
                      4,532,234
                    </p>
                    <p className=" text-[#14E544] font-[600] text-[14px] lg:text-[24px] leading-[32px]">
                      12%
                    </p>
                  </div>
                  <p className=" font-[400] text-[14px] leading-[19px] text-[#A1A1A1]">
                    compared to last year
                  </p>

                  <div className="">
                    <div className=" grid gap-3 lg:flex items-center lg:gap-5 py-5">
                      <img src={USA} alt="" className=" " />
                      <p className=" font-[400] text-[16px] leading-[24px]">
                        United States
                      </p>
                      <img src={UsaRange} alt="" />
                      <p className=" font-[400] text-[16px] leading-[24px] font-Oxanium">
                        1,651,000
                      </p>
                    </div>
                    <div className=" grid gap-3 lg:flex items-center lg:gap-5 py-5">
                      <img src={Rwanda} alt="" />
                      <p className=" font-[400] text-[16px] leading-[24px]">
                        United States
                      </p>
                      <img src={RwandaRange} alt="" />
                      <p className=" font-[400] text-[16px] leading-[24px] font-Oxanium">
                        1,651,000
                      </p>
                    </div>
                    <div className=" grid gap-3 lg:flex items-center lg:gap-5 py-5">
                      <img src={EgyptFlag} alt="" />
                      <p className=" font-[400] text-[16px] leading-[24px]">
                        United States
                      </p>
                      <img src={Egypt} alt="" />
                      <p className=" font-[400] text-[16px] leading-[24px] font-Oxanium">
                        1,651,000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex justify-end items-center py-3 lg:py-5">
              <div className=" mx-10  2xl:mx-40 bg-[#1A1A1AA6] pl-5 pr-10 py-2 rounded-md inline-flex">
                <div className=" flex items-center gap-3 text-white">
                  <img src={EgyptFlag} alt="" />
                  <div className="">
                    <p className=" font-[400] text-[14px] lg:text-[18px] leading-[18px] lg:leading-[24px]">
                      Sudan
                    </p>
                    <p className=" font-[700] text-[18px] lg:text-[24px] leading-[20px] lg:leading-[32px]">
                      12,8329
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="  mx-10  2xl:mx-40  py-5 lg:py-16 max-w-[600px] text-white ">
              <p className=" font-[700] text-[16px] lg:text-[24px] leading-[20px] lg:leading-[30px] font-Oxanium">
                Check out our post 👇
              </p>
              <p className=" underline font-[400] text-[14px] lg:text-[20px] leading-[20px] lg:leading-[30px]">
                Crafting the Perfect Scroll: Unleashing the Art and Science of
                Social Media Content Writing
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-10 bg-[#0B0B0B] text-white">
        <div className=" max-w-5xl lg:mx-auto mx-5 2xl:max-w-full 2xl:mx-40">
          <div className=" my-20">
            <p className=" font-[700] text-[28px] lg:text-[48px] py-5">
              Ai Marketing
            </p>
            <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
              <Card
                img={Card1}
                Title="Technology"
                Text="The Impact of Technology on the Workplace: How Technology is Changing"
                user="Tracey Wilson"
                date="August 20, 2022"
              />
              <Card
                img={City}
                Title="Technology"
                Text="The Impact of Technology on the Workplace: How Technology is Changing"
                user="Jason Francisco"
                date="August 20, 2022"
              />
              <Card
                img={Car}
                Title="Technology"
                Text="The Impact of Technology on the Workplace: How Technology is Changing"
                user="Elizabeth Slavin"
                date="August 20, 2022"
              />
            </div>
          </div>

          <div className=" my-20">
            <p className=" font-[700] text-[28px] lg:text-[48px] py-5">
              Content Marketing
            </p>
            <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <Card
                img={Card1}
                Title="Technology"
                Text="The Impact of Technology on the Workplace: How Technology is Changing"
                user="Ernie Smith"
                date="August 20, 2022"
              />
              <Card
                img={Card1}
                Title="Technology"
                Text="The Impact of Technology on the Workplace: How Technology is Changing"
                user="John"
                date="August 20, 2022"
              />
              <Card
                img={Card1}
                Title="Technology"
                Text="The Impact of Technology on the Workplace: How Technology is Changing"
                user="John"
                date="August 20, 2022"
              />
              <Card
                img={Card1}
                Title="Technology"
                Text="The Impact of Technology on the Workplace: How Technology is Changing"
                user="John"
                date="August 20, 2022"
              />
              <Card
                img={Card1}
                Title="Technology"
                Text="The Impact of Technology on the Workplace: How Technology is Changing"
                user="John"
                date="August 20, 2022"
              />
            </div>
          </div>

          <div className="my-20">
            <p className=" font-[700] text-[28px] lg:text-[54px] py-5">
              Digital PR
            </p>
            <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
              <Card
                img={Card1}
                Title="Technology"
                Text="The Impact of Technology on the Workplace: How Technology is Changing"
                user="John"
                date="August 20, 2022"
              />
              <Card
                img={Card1}
                Title="Technology"
                Text="The Impact of Technology on the Workplace: How Technology is Changing"
                user="John"
                date="August 20, 2022"
              />
              <Card
                img={Card1}
                Title="Technology"
                Text="The Impact of Technology on the Workplace: How Technology is Changing"
                user="John"
                date="August 20, 2022"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
