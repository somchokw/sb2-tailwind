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
        <div className="mt-4 flex w-1/2 flex-col items-center">
          <h1 className="text-54px font-bold text-green ">SPEAKERS</h1>
          <div className="border-b-1px my-1 w-full border-green "></div>
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
          <div className="flex flex-row mt-4 ">
            <div className="w-1/4">
              <a href="/speaker/8">
                {renderAvatar(
                  DanielAronson,
                  "Daniel Aronson",
                  "Founder",
                  `Valutus, The Author of "The Value of`,
                  `Values"`
                )}
              </a>
            </div>
            <div className="w-1/4">
              <a href="/speaker/9">
                {renderAvatar(
                  DanielKrohn,
                  "Daniel Krohn",
                  "International & Brand Transformation",
                  "Consultant",
                  "SB Worldwide"
                )}
              </a>
            </div>
            <div className="w-1/4">
              <a href="/speaker/10">
                {renderAvatar(
                  DarrenBeck,
                  "Darren Beck",
                  "Vice President, Membership & ",
                  "International",
                  "SB Worldwide"
                )}
              </a>
            </div>
            <div className="w-1/4">
              <a href="/speaker/11">
                {renderAvatar(
                  DrDangjaithawinAnantachai,
                  "Dr. Dangjaithawin Anantachai",
                  "Managing Director & COO",
                  "INTAGE Thailand, SB Thailand",
                  ""
                )}
              </a>
            </div>
          </div>
          <div className="flex flex-row mt-4 ">
            <div className="w-1/4">
              <a href="/speaker/12">
                {renderAvatar(
                  DrSirikulLaukaikul,
                  "Dr. Sirikul Laukaikul",
                  "Country Director",
                  "SB Thailand",
                  ""
                )}
              </a>
            </div>
            <div className="w-1/4">
              <a href="/speaker/13">
                {renderAvatar(
                  GeraldMiranda,
                  "Gerald Miranda",
                  "Country Director",
                  "SB Malaysia",
                  ""
                )}
              </a>
            </div>
            <div className="w-1/4">
              <a href="/speaker/14">
                {renderAvatar(
                  GloytaNathalang,
                  "Gloyta Nathalang",
                  "Executive Vice President, Corporate Sustainability, Branding and Communication",
                  "Bangchak Corporation Public Company Limited",
                  ""
                )}
              </a>
            </div>
            <div className="w-1/4">
              <a href="/speaker/15">
                {renderAvatar(
                  JakkrinTaepaisitpong,
                  "Jakkrin Taepaisitpong",
                  "Executive Vice President, Social & Sustainable Development Office",
                  "Betagro Public Company Limited",
                  ""
                )}
              </a>
            </div>
          </div>
          <div className="flex flex-row mt-4 ">
            <div className="w-1/4">
              <a href="/speaker/16">
                {renderAvatar(
                  KanitaTungwarapojwitan,
                  "Kanita Tungwarapojwitan",
                  "",
                  "SB Thailand",
                  ""
                )}
              </a>
            </div>
            <div className="w-1/4">
              <a href="/speaker/17">
                {renderAvatar(
                  KeiichiUshijima,
                  "Keiichi Ushijima",
                  "Partner, Japan CCaSS Leader, Climate Change and Sustainability Services (CCaSS)",
                  "EY",
                  ""
                )}
              </a>
            </div>
            <div className="w-1/4">
              <a href="/speaker/18">
                {renderAvatar(
                  KoAnnVikorenSkrzyniarz,
                  "KoAnn Vikoren Skrzyniarz",
                  "Founder & CEO",
                  "Bangchak Corporation Public Company Limited",
                  "SB Thailand"
                )}
              </a>
            </div>
            <div className="w-1/4">
              <a href="/speaker/19">
                {renderAvatar(
                  KulvechJanvatanavit,
                  "Kulvech Janvatanavit",
                  "CEO",
                  "Thai Institute of Directors Association (IOD)",
                  ""
                )}
              </a>
            </div>
          </div>
          <div className="flex flex-row mt-4 ">
            <div className="w-1/4">
              <a href="/speaker/20">
                {renderAvatar(
                  MichelleLim,
                  "Michele Kythe Lim",
                  "President & CEO",
                  "Institute of Corporate Directors Malaysia (ICDM)",
                  ""
                )}
              </a>
            </div>
            <div className="w-1/4">
              <a href="/speaker/21">
                {renderAvatar(
                  MinGuJun,
                  "MinGu Jun",
                  "Country Director",
                  "SB Korea",
                  ""
                )}
              </a>
            </div>
            <div className="w-1/4">
              <a href="/speaker/22">
                {renderAvatar(
                  MohamedAdamWeeAbdullah,
                  "Mohamed Adam Wee Abdullah",
                  "CMO",
                  "Manulife Insurance Berhad",
                  ""
                )}
              </a>
            </div>
            <div className="w-1/4">
              <a href="/speaker/23">
                {renderAvatar(
                  NongchanokStananonth,
                  "Nongchanok Stananonth",
                  "General Manager",
                  "The Coffee Club Thailand",
                  ""
                )}
              </a>
            </div>
          </div>
          <div className="flex flex-row mt-4 ">
            <div className="w-1/4">
              <a href="/speaker/24">
                {renderAvatar(
                  SakulthipKeeratiphanthawong,
                  "Sakulthip Kiratiphantawong",
                  "Executive Director",
                  "B Corp Thailand",
                  ""
                )}
              </a>
            </div>
            <div className="w-1/4">
              <a href="/speaker/25">
                {renderAvatar(
                  ShinsukeSuzuki,
                  "Shinsuke Suzuki",
                  "Country Director",
                  "SB Japan",
                  ""
                )}
              </a>
            </div>
            <div className="w-1/4">
              <a href="/speaker/26">
                {renderAvatar(
                  SongpolShanmatkit,
                  "Songpol Shanmatkit",
                  "CEO",
                  "TV Direct Public Company Limited",
                  ""
                )}
              </a>
            </div>
            <div className="w-1/4">
              <a href="/speaker/27">
                {renderAvatar(
                  VenusAsavasitthithavorn,
                  "Venus Asavasitthithavorn",
                  "Director, Enterprise Brand Management Office",
                  "SCG",
                  ""
                )}
              </a>
            </div>
          </div>
          <div className="flex flex-row mt-4 ">
            <div className="w-1/4">
              <a href="/speaker/28">
                {renderAvatar(
                  YKPark,
                  "Yoo-Kyung (YK) Park",
                  "Head of APAC Responsible Investment & Governance",
                  "APG Asset Management",
                  ""
                )}
              </a>
            </div>
            <div className="w-1/4">
              <a href="/speaker/29">
                {renderAvatar(
                  YukiMatsumoto,
                  "Yuki Matsumoto",
                  "International Council of SB Advisory Board Members",
                  "SB Japan",
                  ""
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
