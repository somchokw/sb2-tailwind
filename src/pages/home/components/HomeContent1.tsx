import {
  logo,
  brands,
  asset13,
  imgCout,
  asset9small,
} from "../../../static/images";

export const HomeContent1 = () => {
  return (
    <div className="flex flex-col p-5 md:p-20 lg:items-center">
      <div className="sm:w-full md:2/3 lg:w-2/3">
        <div className="w-1/2 sm:px-0 md:px-3 lg:px-3">
          <img alt="logo" src={logo} width="100%" />
        </div>

        <div className="mt-2 mb-2 sm:px-0 md:px-3 lg:px-3">
          <h1 className="text-lightPink font-bold sm:text-18px lg:text-28px ">
            February 24-25, 2022
          </h1>
        </div>

        <div className="sm:flex flex-col md:flex-col lg:flex-row">
          <div>
            <div className="sm:flex flex-col md:flex-row lg:flex-row">
              <div className="sm:px-0 md:px-3 lg:px-3">
                <a href=" https://sbbrandsforgood.com">
                  <img
                    alt="brand"
                    src={brands}
                    width="100%"
                    style={{ minWidth: "180px", maxWidth: "180px" }}
                  />
                </a>
              </div>
              <div className="px-3 mb-4 mt-2">
                <p className="font-bold text-[12px] md:text-lg">
                  COVID19 has been a shocking wake-up call for every individual
                  around the world. Everyone has doubts about the future and
                  what it will bring. Would “sustainability” remain a valid
                  concept?
                </p>
              </div>
            </div>

            <div className="inline mt-2 text-[14px] md:text-[18px]">
              <span className="font-bold ">
                In addition to being the largest gathering of professionals in
                this region, the SB 22 Asia Pacific conference will continue its
                focus on the two important proprietary tools,
              </span>
              <span className="font-bold text-blue">
                {" "}
                BRAND TRANSFORMATION ROADMAP{" "}
              </span>
              <span className="font-bold">and</span>
              <span className="font-bold text-blue"> BRANDS FOR GOOD </span>
              <span className="font-bold">
                , designed to help brand developers and consumers collectively
                enhance the sustainable future. We will also be sharing the
                report of
              </span>
              <span className="font-bold text-blue">
                {" "}
                SOCIAL-CULTURAL TRENDS{" "}
              </span>
              <span className="font-bold">
                of Asia Pacific market for the very first time.
              </span>
            </div>
          </div>
          <div className="mt-2">
            <img alt="asset13" src={asset13} />
          </div>
        </div>

        <div className="my-6 hidden md:flex justify-center">
          <img alt="imgCout" src={imgCout} height="auto" />
        </div>
        <div className="my-6 flex justify-center flex-col md:hidden">
          <img alt="asset9small" src={asset9small} height="auto" />
          <div className="bg-[#dddddd] px-3 py-5 pb-12 mt-10 font-light text-[15px]">
            The conference will be
            <span className="font-bold text-[#ef459d]">FREE OF CHARGE</span> to
            support the #BuildBackBetter brands & societies and will be
            conducted as a hybrid of online and onsite activities based on the
            local concepts of each country. We expect an audience of 2,000
            participants from the Asia Pacific region.
          </div>
        </div>
        <div className="pt-8 my-6 flex justify-center md:px-1/5 lg:px-1/5 ">
          <p className="font-bold text-green flex text-base md:text-2xl">
            This year, the conference aims to share the unique tools exclusively
            designed for brands that want to become regenerative and for
            consumers who want to shift toward a sustainable lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeContent1;
