/* eslint-disable jsx-a11y/alt-text */
import React from "react";
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
} from "../../static/images";
export const Sponsor = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="py-6 w-3/5">
        <div className="text-center">
          <h1 className="font-bold text-green text-54px ">SPONSORS</h1>
        </div>
        <div className="flex flex-col items-center mt-6 ">
          <h1 className="font-semibold text-green text-3xl ">PLATINUM</h1>
          <div className="my-1 border-b-1px border-green w-1/4 "></div>
          <div className="mt-12 flex flex-row justify-center ">
            <div className="w-1/3 px-4">
              <a href="https://www.ey.com/en_gl">
                <img src={eyArtboard} />
              </a>
            </div>
            <div className="w-1/3 px-4">
              <a href="https://www.pttgcgroup.com/th/home">
                <img src={gclogo} />
              </a>
            </div>
            <div className="w-1/3 px-4">
              <a href="https://www.pttep.com/en/Home.aspx">
                <img src={pttlogo} />
              </a>
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
              <a href="https://www.tourismthailand.org/home">
                <img src={ThailandSilver2} />
              </a>
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
  );
};

export default Sponsor;
