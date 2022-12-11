import {
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
} from "../static/images";
export const SponsorShow = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="py-6">
        <div className="text-center">
          <h1 className="font-bold text-green text-[42px]">SPONSORS</h1>
        </div>
        <div className="flex flex-col items-center mt-6 ">
          <h1 className="font-semibold text-green text-3xl ">PLATINUM</h1>
          <div className="my-1 border-b-1px border-green w-1/4 "></div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 ">
            <a href="https://www.ey.com/en_gl">
              <img src={eyArtboard} alt="sponsor" style={{ width: "280px" }} />
            </a>

            <a href="https://www.pttgcgroup.com/th/home">
              <img src={gclogo} alt="sponsor" style={{ width: "280px" }} />
            </a>

            <a href="https://www.pttep.com/en/Home.aspx">
              <img src={pttlogo} alt="sponsor" style={{ width: "280px" }} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center mt-6 ">
          <h1 className="font-semibold text-green text-3xl ">GOLD</h1>
          <div className="my-1 border-b-1px border-green w-1/4 "></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            <img src={BangchakGold} alt="sponsor" style={{ width: "210px" }} />

            <img src={BETAGROGold} alt="sponsor" style={{ width: "210px" }} />

            <img src={MaliGold} alt="sponsor" style={{ width: "210px" }} />

            <img src={SETGold} alt="sponsor" style={{ width: "210px" }} />
          </div>
        </div>
        <div className="flex flex-col items-center mt-6 ">
          <h1 className="font-semibold text-green text-3xl ">SILVER</h1>
          <div className="my-1 border-b-1px border-green w-1/4 "></div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 ">
            <a href="https://www.tourismthailand.org/home">
              <img
                src={ThailandSilver2}
                alt="sponsor"
                style={{ width: "180px" }}
              />
            </a>

            <img
              src={DoikhamSilver2}
              alt="sponsor"
              style={{ width: "180px" }}
            />

            <img src={Krungthaipng} alt="sponsor" style={{ width: "180px" }} />

            <img src={SCGSilver} alt="sponsor" style={{ width: "180px" }} />

            <img src={TVDSilver} alt="sponsor" style={{ width: "180px" }} />

            <img src={WHAGroup} alt="sponsor" style={{ width: "180px" }} />
          </div>
        </div>
        <div className="flex flex-col items-center mt-12 ">
          <h1 className="font-semibold text-lightPink text-3xl ">
            KNOWLEDGE PARTNERS
          </h1>
          <div className="my-1 border-b-1px border-lightPink w-1/4 "></div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            <img
              src={Ogipng}
              alt="sponsor"
              style={{ width: "210px" }}
              className="px-4"
            />

            <img
              src={Intagepng}
              alt="sponsor"
              style={{ width: "210px" }}
              className="px-4"
            />

            <img
              src={Data}
              alt="sponsor"
              style={{ width: "210px" }}
              className="px-4"
            />

            <img
              src={Lgs}
              alt="sponsor"
              style={{ width: "210px" }}
              className="px-4"
            />
            <div className="md:hidden lg:block" />
            <img
              src={Doinpng}
              alt="sponsor"
              style={{ width: "210px" }}
              className="px-4"
            />

            <img
              src={BB}
              alt="sponsor"
              style={{ width: "210px" }}
              className="px-4"
            />
            <div className="md:hidden lg:block" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-6 ">
          <h1 className="font-semibold text-lightPink text-3xl ">
            TECHNOLOGY PARTNER
          </h1>
          <div className="my-1 border-b-1px border-lightPink w-1/4 "></div>
          <div className="mt-12 flex flex-row justify-center">
            <img src={TS} alt="sponsor" style={{ width: "180px" }} />
          </div>
        </div>
        <div className="flex flex-col items-center mt-6 ">
          <h1 className="font-semibold text-lightPink text-3xl ">
            MEDIA PARTNERS
          </h1>
          <div className="my-1 border-b-1px border-lightPink w-1/4 "></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
            <img
              src={BA}
              alt="sponsor"
              style={{ width: "210px" }}
              className="px-4"
            />

            <img
              src={SD}
              alt="sponsor"
              style={{ width: "210px" }}
              className="px-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorShow;
