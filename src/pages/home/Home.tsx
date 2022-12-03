/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import {
  headerHome,
  header,
  logo,
  brands,
  asset13,
  imgCout,
  asset31,
  team,
  collaboration,
  destination,
  target,
  imageLady,
  brands2,
  asset14,
  asset15,
  asset16,
  asset17,
  asset18,
  asset19,
  asset20,
  asset21,
  asset22,
  AkiraMitsumasu,
  AndrewWinston,
  AndyWilson,
  JennyAndersson,
  KyungKonKo,
  MarcBuckley,
  MartinRich,
  ThomasKloster,
  eyArtboard,
  gclogo,
  pttlogo,
  BA,
  BangchakGold,
  BB,
  BETAGROGold,
  Data,
  DoikhamSilver2,
  Doinpng,
  Intagepng,
  Krungthaipng,
  Lgs,
  MaliGold,
  Ogipng,
  SCGSilver,
  SD,
  SETGold,
  ThailandSilver2,
  TS,
  TVDSilver,
  WHAGroup,
  asset8,
  asset9,
  asset10,
  asset131,
} from "../../static/images";

export const Home = () => {
  const renderBox = (
    color: string,
    detail: string,
    header: string,
    picture: any
  ) => {
    switch (color) {
      case "lightGreen":
        return (
          <div className={`bg-lightGreen px-5% pt-5% h-360px rounded-30px`}>
            <div className="flex flex-col items-center text-center ">
              <img src={picture} width="130px" />

              <p className="text-white text-xl font-bold mb-3 ">{header}</p>
              <p className="text-white">{detail}</p>
            </div>
          </div>
        );
      case "lightPink":
        return (
          <div className={`bg-lightPink px-5% pt-5% h-360px rounded-30px`}>
            <div className="flex flex-col items-center text-center ">
              <img src={picture} width="130px" />

              <p className="text-white text-xl font-bold mb-3 ">{header}</p>
              <p className="text-white">{detail}</p>
            </div>
          </div>
        );
      case "blue":
        return (
          <div className={`bg-blue px-5% pt-5% h-360px rounded-30px`}>
            <div className="flex flex-col items-center text-center ">
              <img src={picture} width="130px" />

              <p className="text-white text-xl font-bold mb-3 ">{header}</p>
              <p className="text-white">{detail}</p>
            </div>
          </div>
        );

      default:
        break;
    }
  };

  const renderAvatar = (
    avatar: any,
    name: string,
    position1: string,
    position2: string,
    position3: string
  ) => {
    return (
      <div className="text-center flex flex-col items-center px-4 ">
        <div>
          <img src={avatar} width="180px" />
        </div>
        <div>
          <h1 className="text-xl font-bold mb-3">{name}</h1>
          <p className="text-xs">{position1}</p>
          <p className="text-xs">{position2}</p>
          {position3 ? <p className="text-xs">{position3}</p> : null}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <img className="w-full z-1 " src={headerHome} />
        <div className="absolute z-2 flex-col desktop:w-30rem tablet:w-1/2 ">
          <img src={header} />
          <button className="w-full mt-1 py-4 rounded-4xl bg-lightPink hover:bg-green ">
            <div className="desktop:text-28px tablet:text-18px text-white font-bold">
              REGISTER NOW. FREE!
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center my-8">
        <div className="w-2/3">
          <div className="px-3">
            <img src={logo} width="450px" height="auto" />
          </div>
          <div className="mt-2 px-3">
            <h1 className="text-lightPink font-bold text-28px ">
              February 24-25, 2022
            </h1>
          </div>
          <div className="flex flex-row mt-2">
            <div className="flex flex-col w-2/3">
              <div className="flex flex-row">
                <div className="w-1/3 px-3">
                  <a href=" https://sbbrandsforgood.com">
                    <img src={brands} width="100%" />
                  </a>
                </div>
                <div className="w-2/3 px-5">
                  <p className="font-bold text-18px">
                    COVID19 has been a shocking wake-up call for every
                    individual around the world. Everyone has doubts about the
                    future and what it will bring. Would “sustainability” remain
                    a valid concept?
                  </p>
                </div>
              </div>
              <div className="inline mt-2">
                <span className="font-bold text-18px">
                  In addition to being the largest gathering of professionals in
                  this region, the SB 22 Asia Pacific conference will continue
                  its focus on the two important proprietary tools,
                </span>
                <span className="font-bold text-18px text-blue">
                  {" "}
                  BRAND TRANSFORMATION ROADMAP{" "}
                </span>
                <span className="font-bold text-18px">and</span>
                <span className="font-bold text-18px text-blue">
                  {" "}
                  BRANDS FOR GOOD{" "}
                </span>
                <span className="font-bold text-18px">
                  , designed to help brand developers and consumers collectively
                  enhance the sustainable future. We will also be sharing the
                  report of
                </span>
                <span className="font-bold text-18px text-blue">
                  {" "}
                  SOCIAL-CULTURAL TRENDS{" "}
                </span>
                <span className="font-bold text-18px">
                  of Asia Pacific market for the very first time.
                </span>
              </div>
            </div>
            <div className="w-1/3 px-5">
              <img src={asset13} />
            </div>
          </div>
          <div className="px-3 my-6 flex justify-center  ">
            <img src={imgCout} width="80%" height="auto" />
          </div>
          <div className="pt-8 px-1/5 my-6 flex justify-center">
            <p className="font-bold text-green text-2xl">
              This year, the conference aims to share the unique tools
              exclusively designed for brands that want to become regenerative
              and for consumers who want to shift toward a sustainable
              lifestyle.
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 flex ">
        <div className="w-1/3 -ml-20">
          <img src={asset31} />
        </div>
        <div className="flex flex-col ml-2">
          <p className="font-bold text-4xl text-grey">
            Tool for “Good” Brand Developer BRAND TRANSFORMATION ROADMAPSM
          </p>
          <p className="font-bold text-54px">BRAND TRANSFORMATION</p>
          <div className="flex items-start ">
            <p className="font-bold text-54px">ROADMAP</p>
            <p className="font-bold text-2xl -top-4 ">SM</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-5">
        <div className="w-2/3 py-5">
          <div className="flex flex-row items-start mb-2 ">
            <div className="w-1/6 px-4">
              <img src={destination} />
            </div>
            <div className="w-5/6">
              <p className="text-2xl font-medium indent-6">
                This is our proprietary tool to support brands to continue their
                sustainability journeys. In a nutshell, it is the unique
                self-assessment tool that maps out the whole journey of
                Sustainable brand from business-as-usual to being regenerative
                in all essential dimensions identified by our global brand and
                sustainability experts.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start mb-2">
            <div className="w-1/6 px-4">
              <img src={team} />
            </div>
            <div className="w-5/6">
              <p className="text-2xl font-medium indent-6">
                It illustrates where a company is on the journey and guides the
                C-Suite with practical next steps as well as recommending
                resources and partners.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start mb-2">
            <div className="w-1/6 px-4">
              <img src={collaboration} />
            </div>
            <div className="w-5/6">
              <p className="text-2xl font-medium indent-6">
                It helps engage and unite different parts of the company around
                a common purpose, set appropriate goals and priorities in all
                departments, and locate top-notch external collaborators to
                speed up progress.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start">
            <div className="w-1/6 px-4">
              <img src={target} />
            </div>
            <div className="w-5/6">
              <p className="text-2xl font-medium indent-6">
                In the sustainability journey, we have no time to spare getting
                lost with the crisis getting closer and closer. Take action now
                with strategic roadmap & strong network
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-12">
        <div className="w-2/3">
          <div className="py-5 ">
            <div className="mb-4 flex flex-row ">
              <p className="text-4xl font-medium text-grey">Tool for</p>
              <p className="text-4xl font-medium"> “Good” </p>
              <p className="text-4xl font-medium text-grey">
                Consumer Behaviors
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="w-1/2 px-4">
              <div>
                <a href=" https://sbbrandsforgood.com">
                  <img src={brands} width="50%" />
                </a>
              </div>
              <div className="my-12 border-green border-b-2 "></div>
              <div className="px-6">
                <img src={imageLady} width="100%" />
              </div>
            </div>
            <div className="w-1/2 px-4">
              <p className="text-xl font-medium mb-4 mt-0 indent-6 ">
                From our world-wide survey, we discovered that consumers want to
                shift toward a sustainable lifestyle and require “Good Brands”
                to support their change toward “Good Behaviors”. This is the
                underlying concept of our unique tool – Brands for Good”
              </p>
              <p className="text-xl font-medium mb-4 mt-0 indent-6 ">
                We believe that in order to provide a sustainable lifestyle,
                businesses must embed environmental and social purpose into the
                heart of Brand Promise and in the products and experiences
                delivered to the market.
              </p>
              <p className="text-xl font-medium mb-4 mt-0 indent-6 ">
                Brands for Good is the tool exclusively designed for the
                Marketing and Communication team to work collaboratively with
                the Brand team to develop ideas / campaigns to support
                sustainable behaviors of their desired consumer segments.
              </p>
              <p className="text-xl font-medium mb-4 mt-0 indent-6 ">
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
      <div className="flex flex-col items-center py-5%">
        <div className="mb-12 text-center ">
          <h1 className="text-green font-semibold text-4.5xl ">
            Learn about how brands can release the desirable
          </h1>
          <h1 className="text-green font-semibold text-4.5xl ">
            behaviors that will lead to sustainable future
          </h1>
        </div>
        <div className="flex flex-row my-2  w-2/3">
          <div className="w-1/3  text-center ">
            <p className="text-2xl font-bold text-green ">
              ADDRESS CLIMATE CRISIS
            </p>
          </div>
          <div className="w-1/3 text-center ">
            <p className="text-2xl font-bold text-lightPink ">
              PRESERVE RESOURCES
            </p>
            <p className="text-2xl font-bold text-lightPink ">FOR LIFE</p>
          </div>
          <div className="w-1/3 text-center">
            <p className="text-2xl font-bold text-blue ">FOSTER RESILIENT</p>
            <p className="text-2xl font-bold text-blue ">SOCIETIES</p>
          </div>
        </div>
        <div className="flex flex-row mt-4  w-2/3">
          <div className="w-1/3 px-4">
            {renderBox(
              "lightGreen",
              "Moderate meat consumption and consume products that supports regenerative agriculture.",
              "Eat More Plants",
              asset17
            )}
          </div>
          <div className="w-1/3 px-4">
            {renderBox(
              "lightPink",
              "Plan meals ahead, prepare smarter portions, use what you have in the fridge and compost.",
              "REDUCE WATER & FOOD WASTE",
              asset20
            )}
          </div>
          <div className="w-1/3 px-4">
            {renderBox(
              "blue",
              "Support causes and products that educate girls, aid better family planning and support women-owned business.",
              "SUPPORT WOMEN & GIRLS",
              asset14
            )}
          </div>
        </div>
        <div className="flex flex-row mt-4  w-2/3">
          <div className="w-1/3 px-4">
            {renderBox(
              "lightGreen",
              "Switch to renewable energy sources and conserve energy at home. When possible, ride public transportation and purchase products manufactured with renewable energy.",
              "BE ENERGY SMART",
              asset18
            )}
          </div>
          <div className="w-1/3 px-4">
            {renderBox(
              "lightPink",
              "Choose products made with recycled content and recycle, rent, share and buy used over new products whenever possible.",
              "GO CIRCULAR",
              asset22
            )}
          </div>
          <div className="w-1/3 px-4">
            {renderBox(
              "blue",
              "Buy fair trade as well as brands supporting inclusive and equitable products, policies and causes.",
              "EXPAND EQUITY & OPPORTUNITY",
              asset15
            )}
          </div>
        </div>
        <div className="flex flex-row mt-4  w-2/3">
          <div className="w-1/3 px-4">
            {renderBox(
              "lightGreen",
              "Buy less and buy long lasting products. Reduce single-use items and purchase durable, reusable products instead of disposable ones.",
              "THINK DURABLE",
              asset19
            )}
          </div>
          <div className="w-1/3 px-4">
            {renderBox(
              "lightPink",
              "Buy products with clean ingredients, and products that protect habitats and biodiversity.",
              "CHOOSE NATURE-FRIENDLY",
              asset21
            )}
          </div>
          <div className="w-1/3 px-4">
            {renderBox(
              "blue",
              "Vote at the ballot box and with your wallet, make your voice heard and volunteer in your community.",
              "SHOW UP",
              asset16
            )}
          </div>
        </div>
      </div>
      <div className="my-12 flex flex-col items-center ">
        <div className="w-2/3">
          <div className="mt-4 flex flex-col items-center">
            <h1 className="text-54px font-bold text-green ">SPEAKERS</h1>
            <div className="border-b-1px my-1 w-1/2 border-green "></div>
          </div>
          <div className="my-12">
            <div className="flex flex-row mt-4 ">
              <div className="w-1/4">
                <a href="/speaker/0">
                  {renderAvatar(
                    AkiraMitsumasu,
                    "Akira Mitsumasu",
                    "Vice President, Global CX & Marketing, CX,",
                    "Data Analytics & Marketing",
                    "Japan Airlines"
                  )}
                </a>
              </div>
              <div className="w-1/4">
                <a href="/speaker/1">
                  {renderAvatar(
                    AndrewWinston,
                    "Andrew Winston",
                    "Manager",
                    "Winston Eco-Strategies, LLC, The Author",
                    "of “Net Positive”"
                  )}
                </a>
              </div>
              <div className="w-1/4">
                <a href="/speaker/2">
                  {renderAvatar(
                    AndyWilson,
                    "Andy Wilson",
                    "Senior Partner",
                    "Ogilvy",
                    ""
                  )}
                </a>
              </div>
              <div className="w-1/4">
                <a href="/speaker/3">
                  {renderAvatar(
                    JennyAndersson,
                    "Jenny Andersson",
                    "Co-Founder",
                    "Really Regenerative CIC",
                    ""
                  )}
                </a>
              </div>
            </div>
            <div className="flex flex-row mt-4 ">
              <div className="w-1/4">
                <a href="/speaker/4">
                  {renderAvatar(
                    KyungKonKo,
                    "Kyung-Kon Ko",
                    "President & CEO",
                    "Daejeon Tourism Organization (DJTO)",
                    ""
                  )}
                </a>
              </div>
              <div className="w-1/4">
                <a href="/speaker/5">
                  {renderAvatar(
                    MarcBuckley,
                    "Marc Buckley",
                    "System Thinker, Dynamic System Modeler",
                    "and Blue Economy Developer",
                    "Marc Buckley Earth”"
                  )}
                </a>
              </div>
              <div className="w-1/4">
                <a href="/speaker/6">
                  {renderAvatar(
                    MartinRich,
                    "Martin Rich",
                    "Co-Founder & Executive Director",
                    "Future-Fit Foundation",
                    ""
                  )}
                </a>
              </div>
              <div className="w-1/4">
                <a href="/speaker/7">
                  {renderAvatar(
                    ThomasKloster,
                    "Thomas Kolster",
                    "Speaker, Author, Marketing Activist and",
                    "Purpose Pioneer",
                    "Goodvertising"
                  )}
                </a>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={() => window.location.assign("/speaker")}
                className="text-28px font-bold bg-green text-white rounded-37px text-center w-420px h-65px "
              >
                SEE MORE SPEAKERS
              </button>
            </div>
          </div>
          <div className="py-6">
            <div className="text-center">
              <h1 className="font-bold text-green text-54px ">SPONSORS</h1>
            </div>
            <div className="flex flex-col items-center mt-6 ">
              <h1 className="font-semibold text-green text-3xl ">PLATINUM</h1>
              <div className="my-1 border-b-1px border-green w-1/4 "></div>
              <div className="mt-12 flex flex-row justify-center ">
                <div className="w-1/3 px-4">
                  <img src={eyArtboard} />
                </div>
                <div className="w-1/3 px-4">
                  <img src={gclogo} />
                </div>
                <div className="w-1/3 px-4">
                  <img src={pttlogo} />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-6 ">
              <h1 className="font-semibold text-green text-3xl ">GOLD</h1>
              <div className="my-1 border-b-1px border-green w-1/4 "></div>
              <div className="mt-12 flex flex-row justify-center">
                <div className="w-1/4 px-4">
                  <img src={BangchakGold} />
                </div>
                <div className="w-1/4 px-4">
                  <img src={BETAGROGold} />
                </div>
                <div className="w-1/4 px-4 ">
                  <img src={MaliGold} />
                </div>
                <div className="w-1/4 px-4">
                  <img src={SETGold} />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-6 ">
              <h1 className="font-semibold text-green text-3xl ">SILVER</h1>
              <div className="my-1 border-b-1px border-green w-1/4 "></div>
              <div className="mt-12 flex flex-row justify-center">
                <div className="w-1/6 px-4">
                  <img src={ThailandSilver2} />
                </div>
                <div className="w-1/6 px-4">
                  <img src={DoikhamSilver2} />
                </div>
                <div className="w-1/6 px-4">
                  <img src={Krungthaipng} />
                </div>
                <div className="w-1/6 px-4">
                  <img src={SCGSilver} />
                </div>
                <div className="w-1/6 px-4">
                  <img src={TVDSilver} />
                </div>
                <div className="w-1/6 px-4">
                  <img src={WHAGroup} />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-12 ">
              <h1 className="font-semibold text-lightPink text-3xl ">
                KNOWLEDGE PARTNERS
              </h1>
              <div className="my-1 border-b-1px border-lightPink w-1/4 "></div>
              <div className="mt-12 flex flex-row justify-center">
                <div className="w-1/4 px-4">
                  <img src={Ogipng} />
                </div>
                <div className="w-1/4 px-4">
                  <img src={Intagepng} />
                </div>
                <div className="w-1/4 px-4">
                  <img src={Data} />
                </div>
                <div className="w-1/4 px-4">
                  <img src={Lgs} />
                </div>
              </div>
              <div className="mt-12 flex flex-row justify-center">
                <div className="w-1/4 px-4">
                  <img src={Doinpng} />
                </div>
                <div className="w-1/4 px-4">
                  <img src={BB} />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-6 ">
              <h1 className="font-semibold text-lightPink text-3xl ">
                TECHNOLOGY PARTNER
              </h1>
              <div className="my-1 border-b-1px border-lightPink w-1/4 "></div>
              <div className="mt-12 flex flex-row justify-center">
                <div className="w-1/4 px-4">
                  <img src={TS} />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-6 ">
              <h1 className="font-semibold text-lightPink text-3xl ">
                MEDIA PARTNERS
              </h1>
              <div className="my-1 border-b-1px border-lightPink w-1/4 "></div>
              <div className="mt-12 flex flex-row justify-center">
                <div className="w-1/4 px-4">
                  <img src={BA} />
                </div>
                <div className="w-1/4 px-4">
                  <img src={SD} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark-blue">
        <div className="py-5%">
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
              <img src={logo} width="300px" height="auto" className="mr-2" />
              <h1 className="font-medium text-4.5xl text-white ">
                Is organized through the collaboration of
              </h1>
            </div>
            <div className="mt-12 flex flex-row justify-center w-2/3 ">
              <div className="w-1/4 px-4 text-center ">
                <img src={asset8} />
                <p className="mt-4 text-xs text-white">
                  seoul@sustainablebrands.kr
                </p>
              </div>
              <div className="w-1/4 px-4 text-center">
                <img src={asset9} />
                <p className="mt-4 text-xs text-white">
                  sb-asiapacific@sustainablebrands.jp
                </p>
              </div>
              <div className="w-1/4 px-4 text-center ">
                <img src={asset10} />
                <p className="mt-4 text-xs text-white">sofia@acaciablue.com</p>
              </div>
              <div className="w-1/4 px-4 text-center">
                <img src={asset131} />
                <p className="mt-4 text-xs text-white">
                  Infosbthailand@beingsustain.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12">
          <div className="flex flex-col items-center ">
            <div>
              <h1 className="font-bold text-54px text-white ">ABOUT</h1>
            </div>
            <div>
              <h1 className="font-bold text-54px text-lightPink ">
                Sustainable Brands
              </h1>
            </div>
            <div className="border-b-1px border-lightPink w-3/5 "></div>
          </div>
          <div className="flex mt-12 ">
            <div className="w-1/3 -ml-4 pr-4 flex justify-end items-center bg-white rounded-tr-30px rounded-br-30px h-60 ">
              <img src={brands2} width="50%" />
            </div>
            <div className="flex flex-col ml-2 w-2/3 pl-4 pr-20% ">
              <p className="font-normal text-xl text-white">
                Sustainable Brands is the world’s leading community of
                innovators for brands that are designing the future of the
                business world. Since 2006, its mission has been to inspire,
                engage, and equip today’s businesses and their managers for long
                and short-term prosperity by taking control of a better future.
                We provide online articles and conversations by topic,
                world-renowned events and regional events, a comprehensive
                e-learning library and discussion groups to facilitate community
                learning and commitment throughout the year.
              </p>
              <div className="my-2"></div>
              <p className="font-normal text-xl text-white">
                Sustainable Brands is a subsidiary of Sustainable Life Media
                whose headquarters are located in California, USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
