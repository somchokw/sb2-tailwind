import {
  brands,
  asset31,
  team,
  collaboration,
  destination,
  target,
  imageLady,
} from "../../../static/images";

export const HomeContent2 = () => {
  return (
    <>
      <div className="py-5 flex w-full">
        <div className="hidden h-full -ml-20 md:block">
          <img alt="asset31" src={asset31} />
        </div>
        <div className="flex flex-col ml-2">
          <p className="font-bold text-grey text-[18px] md:text-4xl">
            Tool for “Good” Brand Developer BRAND TRANSFORMATION ROADMAPSM
          </p>
          <p className="font-bold text-[28px] md:text-[54px]">
            BRAND TRANSFORMATION
          </p>
          <div className="flex items-start ">
            <p className="font-bold text-[28px] md:text-[54px]">ROADMAP</p>
            <p className="font-bold -top-4 text-[18px] md:text-2xl">SM</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5 md:p-20 lg:items-center">
        <div className="sm:w-full md:2/3">
          <div className="flex flex-col mb-10 md:flex-row">
            <div className="px-4 self-center mb-4 md:self-start">
              <img
                alt="destination"
                src={destination}
                style={{ minWidth: "180px", maxHeight: "180px" }}
              />
            </div>
            <div>
              <p className="text-[16px] font-light indent-6 px-10 md:text-[20px] lg:text-2xl">
                This is our proprietary tool to support brands to continue their
                sustainability journeys. In a nutshell, it is the unique
                self-assessment tool that maps out the whole journey of
                Sustainable brand from business-as-usual to being regenerative
                in all essential dimensions identified by our global brand and
                sustainability experts.
              </p>
            </div>
          </div>

          <div className="flex flex-col mb-10 md:flex-row">
            <div className="px-4 self-center mb-4 md:self-start">
              <img
                alt="team"
                src={team}
                style={{ minWidth: "180px", maxHeight: "180px" }}
              />
            </div>
            <div>
              <p className="text-[16px] font-light indent-6 px-10 md:text-[20px] lg:text-2xl">
                It illustrates where a company is on the journey and guides the
                C-Suite with practical next steps as well as recommending
                resources and partners.
              </p>
            </div>
          </div>

          <div className="flex flex-col mb-10 md:flex-row">
            <div className="px-4 self-center mb-4 md:self-start">
              <img
                alt="collaboration"
                src={collaboration}
                style={{ minWidth: "180px", maxHeight: "180px" }}
              />
            </div>
            <div>
              <p className="text-[16px] font-light indent-6 px-10 md:text-[20px] lg:text-2xl">
                It helps engage and unite different parts of the company around
                a common purpose, set appropriate goals and priorities in all
                departments, and locate top-notch external collaborators to
                speed up progress.
              </p>
            </div>
          </div>

          <div className="flex flex-col mb-10 md:flex-row">
            <div className="px-4 self-center mb-4 md:self-start">
              <img
                alt="target"
                src={target}
                style={{ minWidth: "180px", maxHeight: "180px" }}
              />
            </div>
            <div>
              <p className="text-[16px] font-light indent-6 px-10 md:text-[20px] lg:text-2xl">
                In the sustainability journey, we have no time to spare getting
                lost with the crisis getting closer and closer. Take action now
                with strategic roadmap & strong network
              </p>
            </div>
          </div>
        </div>

        <p className="text-2xl text-medium self-start text-gray">
          Tool for <span style={{ color: "black" }}>“Good”</span> Consumer
          Behaviors
        </p>

        <div className="flex flex-row justify-center mt-10">
          <div className="flex flex-col md:flex-row">
            <div className="w-full px-4 md:w-1/2">
              <a href=" https://sbbrandsforgood.com">
                <img alt="brands" src={brands} width="60%" />
              </a>

              <div className="my-12 border-green border-b-2 "></div>
              <div className="px-6 mb-10">
                <img alt="imageLady" src={imageLady} width="100%" />
              </div>
            </div>

            <div className="w-full px-4 font-[300] sm:text-[16px] md:w-1/2 md:text-[18px] lg:text-[20px]">
              <p className="mb-4 mt-0 indent-6 ">
                From our world-wide survey, we discovered that consumers want to
                shift toward a sustainable lifestyle and require “Good Brands”
                to support their change toward “Good Behaviors”. This is the
                underlying concept of our unique tool – Brands for Good”
              </p>
              <p className="mb-4 mt-0 indent-6 ">
                We believe that in order to provide a sustainable lifestyle,
                businesses must embed environmental and social purpose into the
                heart of Brand Promise and in the products and experiences
                delivered to the market.
              </p>
              <p className="mb-4 mt-0 indent-6 ">
                Brands for Good is the tool exclusively designed for the
                Marketing and Communication team to work collaboratively with
                the Brand team to develop ideas / campaigns to support
                sustainable behaviors of their desired consumer segments.
              </p>
              <p className="mb-4 mt-0 indent-6 ">
                This tool will make marketing campaigns more rewarding and
                meaningful. It is the first attempt that integrates marketing
                and communication into the sustainability journey. In short,
                this is how we can strategically incorporate ESG into the real
                practices of business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent2;
