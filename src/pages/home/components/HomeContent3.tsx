import {
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
} from "../../../static/images";

export const HomeContent3 = () => {
  const renderBox = (
    color: string,
    detail: string,
    header: string,
    picture: any
  ) => {
    switch (color) {
      case "lightGreen":
        return (
          <div className={`bg-lightGreen px-5% pt-5% h-[360px] rounded-30px`}>
            <div className="flex flex-col items-center text-center ">
              <img alt="pic" src={picture} width="130px" />

              <p className="text-white text-xl font-bold mb-3 ">{header}</p>
              <p className="text-white">{detail}</p>
            </div>
          </div>
        );
      case "lightPink":
        return (
          <div className={`bg-lightPink px-5% pt-5% h-[360px] rounded-30px`}>
            <div className="flex flex-col items-center text-center ">
              <img alt="pic" src={picture} width="130px" />

              <p className="text-white text-xl font-bold mb-3 ">{header}</p>
              <p className="text-white">{detail}</p>
            </div>
          </div>
        );
      case "blue":
        return (
          <div className={`bg-blue px-5% pt-5% h-[360px] rounded-30px`}>
            <div className="flex flex-col items-center text-center ">
              <img alt="pic" src={picture} width="130px" />

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
          <img alt="avatar" src={avatar} style={{ minWidth: "220px" }} />
        </div>
        <div style={{ minWidth: "300px", marginTop: "12px" }}>
          <h1 className="text-xl font-bold mb-3">{name}</h1>
          <p className="text-xs text-green ">{position1}</p>
          <p className="text-xs text-green">{position2}</p>
          {position3 ? <p className="text-xs text-green">{position3}</p> : null}
        </div>
      </div>
    );
  };

  return (
    <>
      {" "}
      <div className="sm:w-full md:2/3">
        <p className="text-green font-semibold text-center text-2xl md:text-4xl">
          Learn about how brands can release the desirable behaviors that will
          lead to sustainable future
        </p>
      </div>
      <div className="mt-10 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <p className="text-2xl font-bold text-green hidden lg:block">
          ADDRESS CLIMATE CRISIS
        </p>
        <p className="text-2xl font-bold text-lightPink hidden lg:block">
          PRESERVE RESOURCES FOR LIFE
        </p>

        <p className="text-2xl font-bold text-blue hidden lg:block">
          FOSTER RESILIENT SOCIETIES
        </p>
        <div>
          {renderBox(
            "lightGreen",
            "Moderate meat consumption and consume products that supports regenerative agriculture.",
            "Eat More Plants",
            asset17
          )}
        </div>
        <div>
          {renderBox(
            "lightPink",
            "Plan meals ahead, prepare smarter portions, use what you have in the fridge and compost.",
            "REDUCE WATER & FOOD WASTE",
            asset20
          )}
        </div>
        <div>
          {renderBox(
            "blue",
            "Support causes and products that educate girls, aid better family planning and support women-owned business.",
            "SUPPORT WOMEN & GIRLS",
            asset14
          )}
        </div>
        <div>
          {renderBox(
            "lightGreen",
            "Switch to renewable energy sources and conserve energy at home. When possible, ride public transportation and purchase products manufactured with renewable energy.",
            "BE ENERGY SMART",
            asset18
          )}
        </div>
        <div>
          {renderBox(
            "lightPink",
            "Choose products made with recycled content and recycle, rent, share and buy used over new products whenever possible.",
            "GO CIRCULAR",
            asset22
          )}
        </div>
        <div>
          {renderBox(
            "blue",
            "Buy fair trade as well as brands supporting inclusive and equitable products, policies and causes.",
            "EXPAND EQUITY & OPPORTUNITY",
            asset15
          )}
        </div>
        <div>
          {renderBox(
            "lightGreen",
            "Buy less and buy long lasting products. Reduce single-use items and purchase durable, reusable products instead of disposable ones.",
            "THINK DURABLE",
            asset19
          )}
        </div>
        <div>
          {renderBox(
            "lightPink",
            "Buy products with clean ingredients, and products that protect habitats and biodiversity.",
            "CHOOSE NATURE-FRIENDLY",
            asset21
          )}
        </div>
        <div>
          {renderBox(
            "blue",
            "Vote at the ballot box and with your wallet, make your voice heard and volunteer in your community.",
            "SHOW UP",
            asset16
          )}
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center">
        <h1 className="text-54px font-bold text-green ">SPEAKERS</h1>
        <div className="border-b-1px my-1 w-1/2 border-green "></div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          style={{ justifyItems: "center" }}
        >
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
      </div>
    </>
  );
};
