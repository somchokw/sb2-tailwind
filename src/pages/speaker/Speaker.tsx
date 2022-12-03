/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import {
  AkiraMitsumasu,
  AndrewWinston,
  AndyWilson,
  JennyAndersson,
  KyungKonKo,
  MarcBuckley,
  MartinRich,
  ThomasKloster,
  DanielAronson,
  DanielKrohn,
  DarrenBeck,
  DrDangjaithawinAnantachai,
  DrSirikulLaukaikul,
  GeraldMiranda,
  GloytaNathalang,
  JakkrinTaepaisitpong,
  KanitaTungwarapojwitan,
  KeiichiUshijima,
  KoAnnVikorenSkrzyniarz,
  KulvechJanvatanavit,
  MichelleLim,
  MinGuJun,
  MohamedAdamWeeAbdullah,
  NongchanokStananonth,
  SakulthipKeeratiphanthawong,
  ShinsukeSuzuki,
  SongpolShanmatkit,
  VenusAsavasitthithavorn,
  YKPark,
  YukiMatsumoto,
} from "../../static/images";

export const Speaker = () => {
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
          <p className="text-xs text-green ">{position1}</p>
          <p className="text-xs text-green">{position2}</p>
          {position3 ? <p className="text-xs text-green">{position3}</p> : null}
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center">
      <div className="w-2/3 flex flex-col items-center ">
        <div className="mt-4 flex flex-col items-center">
          <h1 className="text-54px font-bold text-green ">SPEAKERS</h1>
          <div className="border-b-1px my-1 w-1/2 border-green "></div>
        </div>
        <div className="my-12">
          <div className="flex flex-row mt-4 ">
            <div className="w-1/4">
              {renderAvatar(
                AkiraMitsumasu,
                "Akira Mitsumasu",
                "Vice President, Global CX & Marketing, CX,",
                "Data Analytics & Marketing",
                "Japan Airlines"
              )}
            </div>
            <div className="w-1/4">
              {renderAvatar(
                AndrewWinston,
                "Andrew Winston",
                "Manager",
                "Winston Eco-Strategies, LLC, The Author",
                "of “Net Positive”"
              )}
            </div>
            <div className="w-1/4">
              {renderAvatar(
                AndyWilson,
                "Andy Wilson",
                "Senior Partner",
                "Ogilvy",
                ""
              )}
            </div>
            <div className="w-1/4">
              {renderAvatar(
                JennyAndersson,
                "Jenny Andersson",
                "Co-Founder",
                "Really Regenerative CIC",
                ""
              )}
            </div>
          </div>
          <div className="flex flex-row mt-4 ">
            <div className="w-1/4">
              {renderAvatar(
                KyungKonKo,
                "Kyung-Kon Ko",
                "President & CEO",
                "Daejeon Tourism Organization (DJTO)",
                ""
              )}
            </div>
            <div className="w-1/4">
              {renderAvatar(
                MarcBuckley,
                "Marc Buckley",
                "System Thinker, Dynamic System Modeler",
                "and Blue Economy Developer",
                "Marc Buckley Earth”"
              )}
            </div>
            <div className="w-1/4">
              {renderAvatar(
                MartinRich,
                "Martin Rich",
                "Co-Founder & Executive Director",
                "Future-Fit Foundation",
                ""
              )}
            </div>
            <div className="w-1/4">
              {renderAvatar(
                ThomasKloster,
                "Thomas Kolster",
                "Speaker, Author, Marketing Activist and",
                "Purpose Pioneer",
                "Goodvertising"
              )}
            </div>
          </div>
          <div className="flex flex-row mt-4 ">
            <div className="w-1/4">
              {renderAvatar(
                DanielAronson,
                "Daniel Aronson",
                "Founder",
                `Valutus, The Author of "The Value of`,
                `Values"`
              )}
            </div>
            <div className="w-1/4">
              {renderAvatar(
                DanielKrohn,
                "Daniel Krohn",
                "International & Brand Transformation",
                "Consultant",
                "SB Worldwide"
              )}
            </div>
            <div className="w-1/4">
              {renderAvatar(
                DarrenBeck,
                "Darren Beck",
                "Vice President, Membership & ",
                "International",
                "SB Worldwide"
              )}
            </div>
            <div className="w-1/4">
              {renderAvatar(
                DrDangjaithawinAnantachai,
                "Dr. Dangjaithawin Anantachai",
                "Managing Director & COO",
                "INTAGE Thailand, SB Thailand",
                ""
              )}
            </div>
          </div>
          <div className="flex flex-row mt-4 ">
            <div className="w-1/4">
              {renderAvatar(
                DrSirikulLaukaikul,
                "Dr. Sirikul Laukaikul",
                "Country Director",
                "SB Thailand",
                ""
              )}
            </div>
            <div className="w-1/4">
              {renderAvatar(
                GeraldMiranda,
                "Gerald Miranda",
                "Country Director",
                "SB Malaysia",
                ""
              )}
            </div>
            <div className="w-1/4">
              {renderAvatar(
                MartinRich,
                "Martin Rich",
                "Co-Founder & Executive Director",
                "Future-Fit Foundation",
                ""
              )}
            </div>
            <div className="w-1/4">
              {renderAvatar(
                ThomasKloster,
                "Thomas Kolster",
                "Speaker, Author, Marketing Activist and",
                "Purpose Pioneer",
                "Goodvertising"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
