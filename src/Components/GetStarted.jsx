import Illustration from "../assets/illustration411.png";

const GetStarted = () => {
  return (
    <div className="">
      <div className=" bg-[#080808] py-10">
        <p className=" font-[700] text-[20px] md:text-[40px] text-[#202020] text-center font-Oxanium py-5 md:py-20">
          GetStarted
        </p>

        <div className=" grid gap-10 mx-10 lg:mx-10 md:flex items-start justify-center">
          <div className="">
            <p className=" font-[400] mb-5 md:mb-16 text-[18px] lg:text-[32px] leading-[25px] lg:leading-[40px] text-white max-w-[620px] ">
              Ready to elevate your brand&apos;s digital journey? Let&apos;s get
              started. Choose your path and discover the possibilities with
            </p>
            <p className=" font-[700] text-[18px] leading-[18px] text-[#FCD82B] border border-[#FCD82B] text-center md:inline px-20 py-3">
              Get Started
            </p>
          </div>
          <div className="">
            <img src={Illustration} alt="" />
          </div>
        </div>
      </div>

      <div className=" bg-url bg-black bg-cover text-white bg-center h-[430px]">
        <div className=" max-w-5xl mx-10 lg:mx-auto">
          <div className=" grid gap-2 md:flex items-center justify-between py-20 lg:py-40">
            <p className=" md:max-w-[450px] leading-[30px] lg:leading-[35px] text-[16px] lg:text-[26px] font-[500]">
              With our well identified service, we can help a lot of companies
              to build their digital presence.
            </p>
            <div className=" flex items-center justify-center gap-10 border-t-2 border-white">
              <div className=" text-center">
                <p className=" font-[400] text-[30px] lg:text-[50px] md:leading-[50px] py-3">
                  120%
                </p>
                <p className=" font-[400] text-[14px] leading-[14px]">
                  Social media consult
                </p>
              </div>
              <div className=" text-center ">
                <p className=" font-[400] text-[30px] lg:text-[50px] md:leading-[50px] py-3">
                  120%
                </p>
                <p className=" font-[400] text-[14px] leading-[14px]">
                  Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
