import {
  AkiraMitsumasu,
  AndrewWinston,
  AndyWilson,
  DanielAronson,
  DanielKrohn,
  DarrenBeck,
  DrDangjaithawinAnantachai,
  DrSirikulLaukaikul,
  GeraldMiranda,
  GloytaNathalang,
  JakkrinTaepaisitpong,
  JennyAndersson,
  KanitaTungwarapojwitan,
  KeiichiUshijima,
  KoAnnVikorenSkrzyniarz,
  KulvechJanvatanavit,
  KyungKonKo,
  MarcBuckley,
  MartinRich,
  MichelleLim,
  MinGuJun,
  MohamedAdamWeeAbdullah,
  NongchanokStananonth,
  SakulthipKeeratiphanthawong,
  SirikhanateSakulyong,
  SongpolShanmatkit,
  ThomasKloster,
  VenusAsavasitthithavorn,
  YKPark,
  YukiMatsumoto,
} from "../../static/images";

export const exportAgendaData = (day: any, filterLabel: string) => {
  const data = [
    {
      day: 1,
      label: "Welcome Remarks by SB Asia Pacific Team",
      periodFirst: "09.00 - 09.15 (Thailand, UTC +7:00)",
      periodSecond: "10.00 - 10.15 (Malaysia, UTC +8:00)",
      periodThird: "11.00 - 11.15 (Japan/Korea, UTC +9:00)",
      lecturers: [
        {
          avartar: DrSirikulLaukaikul,
          content: "Dr. Sirikul Laukaikul | Country Director - SB Thailand",
        },
        {
          avartar: YukiMatsumoto,
          content:
            "Yuki Matsumoto | International Council of SB Advisory Board Members - SB Japan",
        },
        {
          avartar: MinGuJun,
          content: "MinGu Jun | Country Director - SB Korea",
        },
        {
          avartar: GeraldMiranda,
          content: "Gerald Miranda | Country Director - SB Malaysia",
        },
      ],
    },
    {
      day: 1,
      label: "Welcome Remarks by SB Worldwide CEO",
      periodFirst: "09.15 - 09.30 (Thailand, UTC +7:00)",
      periodSecond: "10.15 - 10.30 (Malaysia, UTC +8:00)",
      periodThird: "11.15 - 11.30 (Japan/Korea, UTC +9:00)",
      lecturers: [
        {
          avartar: KoAnnVikorenSkrzyniarz,
          content: "KoAnn Vikoren Skrzyniarz | Founder & CEO - SB Worldwide",
        },
      ],
    },
    {
      day: 1,
      label: "Better Purpose, Better Brands, Better Future",
      periodFirst: "09.30 - 09.50 (Thailand, UTC +7:00)",
      periodSecond: "10.30 - 10.50 (Malaysia, UTC +8:00)",
      periodThird: "11.30 - 11.50 (Japan/Korea, UTC +9:00)",
      lecturers: [
        {
          avartar: MartinRich,
          content:
            "Martin Rich | Co-Founder & Executive Director - Future-Fit Foundation",
        },
      ],
    },
    {
      day: 1,
      label: "Stronger Brand Influence, Better Performance",
      periodFirst: "09.50 - 10.10 (Thailand, UTC +7:00)",
      periodSecond: "10.50 - 11.10 (Malaysia, UTC +8:00)",
      periodThird: "11.50 - 12.10 (Japan/Korea, UTC +9:00)",
      lecturers: [
        {
          avartar: AndyWilson,
          content: "Andy Wilson | Senior Partner - Ogilvy",
        },
      ],
    },
    {
      day: 1,
      label: "Coffee Break",
      periodFirst: "10.10 - 10.40 (Thailand, UTC +7:00)",
      periodSecond: "11.10 - 11.40 (Malaysia, UTC +8:00)",
      periodThird: "12.10 - 12.40 (Japan/Korea, UTC +9:00)",
      lecturers: [],
    },
    {
      day: 1,
      label: "Why Regenerative Supply Chain?",
      periodFirst: "10.40 - 11.00 (Thailand, UTC +7:00)",
      periodSecond: "11.40 - 12.00 (Malaysia, UTC +8:00)",
      periodThird: "12.40 - 13.00 (Japan/Korea, UTC +9:00)",
      lecturers: [
        {
          avartar: KeiichiUshijima,
          content:
            "Keiichi Ushijima | Partner, Japan CCaSS Leader, Climate Change and Sustainability Services (CCaSS) - EY",
        },
      ],
    },
    {
      day: 1,
      label:
        "Gigatrends and Drive to Net Positive: How courageous companies thrive by giving more than they take",
      periodFirst: "11.00 - 11.20 (Thailand, UTC +7:00)",
      periodSecond: "12.00 - 12.20 (Malaysia, UTC +8:00)",
      periodThird: "13.00 - 13.20 (Japan/Korea, UTC +9:00)",
      lecturers: [
        {
          avartar: AndrewWinston,
          content:
            "Andrew Winston | Manager - Winston Eco-Strategies, LLC, The Author of “Net Positive”",
        },
      ],
    },
    {
      day: 1,
      label: "Good Brands; Good Governance",
      periodFirst: "11.20 - 12.00 (Thailand, UTC +7:00)",
      periodSecond: "12.20 - 13.00 (Malaysia, UTC +8:00)",
      periodThird: "13.20 - 14.00 (Japan/Korea, UTC +9:00)",
      lecturers: [
        {
          avartar: KulvechJanvatanavit,
          content:
            "Kulvech Janvatanavit | CEO - Thai Institute of Directors Association (IOD)",
        },
        {
          avartar: YKPark,
          content:
            "Yoo-Kyung (YK) Park | Head of APAC Responsible Investment & Governance - APG Asset Management",
        },
        {
          avartar: MichelleLim,
          content:
            "Michele Kythe Lim | President & CEO - Institute of Corporate Directors Malaysia (ICDM)",
        },
      ],
      moderatedBy: [
        {
          avartar: SakulthipKeeratiphanthawong,
          content:
            "Sakulthip Kiratiphantawong | Executive Director - B Corp Thailand",
        },
      ],
    },
    {
      day: 1,
      label: "LUNCH BREAK",
      periodFirst: "12.00 - 13.00 (Thailand, UTC +7:00)",
      periodSecond: "13.00 - 14.00 (Malaysia, UTC +8:00)",
      periodThird: "14.00 - 15.00 (Japan/Korea, UTC +9:00)",
      lecturers: [],
    },
    {
      day: 1,
      label: "SB Brand Transformation Roadmap Global Update",
      periodFirst: "13.00 - 13.15 (Thailand, UTC +7:00)",
      periodSecond: "14.00 - 14.15 (Malaysia, UTC +8:00)",
      periodThird: "15.00 - 15.15 (Japan/Korea, UTC +9:00)",
      lecturers: [
        {
          avartar: DanielKrohn,
          content:
            "Daniel Krohn | International & Brand Transformation Consultant - SB Worldwide",
        },
      ],
    },
    {
      day: 1,
      label: "Asia Pacific Socio-Cultural Trend Tracker Report",
      periodFirst: "13.15 - 13.35 (Thailand, UTC +7:00)",
      periodSecond: "14.15 - 14.35 (Malaysia, UTC +8:00)",
      periodThird: "15.15 - 15.35 (Japan/Korea, UTC +9:00)",
      lecturers: [
        {
          avartar: DrDangjaithawinAnantachai,
          content:
            "Dr. Dangjaithawin Anantachai | Managing Director & COO - INTAGE Thailand, SB Thailand",
        },
      ],
    },
    {
      day: 1,
      label: "System Shift toward Sustainable Brands",
      periodFirst: "13.35 - 13.55 (Thailand, UTC +7:00)",
      periodSecond: "",
      periodThird: "",
      lecturers: [
        {
          avartar: DanielAronson,
          content:
            "Daniel Aronson | Founder - Valutus, The Author of “The Value of Values”",
        },
      ],
    },
    {
      day: 1,
      label:
        "SB THAILAND: LOCAL ACTIVITY /n SB Brand Transformation Roadmap; Thailand Journey",
      periodFirst: "13.55 - 14.40 (Thailand, UTC +7:00)",
      periodSecond: "",
      periodThird: "",
      lecturers: [
        {
          avartar: VenusAsavasitthithavorn,
          content:
            "Venus Asavasitthithavorn | Director, Enterprise Brand Management Office - SCG",
        },
        {
          avartar: GloytaNathalang,
          content:
            "Gloyta Nathalang | Executive Vice President, Corporate Sustainability, Branding and Communication - Bangchak Corporation Public Company Limited",
        },
        {
          avartar: SongpolShanmatkit,
          content:
            "Songpol Shanmatkit | CEO - TV Direct Public Company Limited",
        },
        {
          avartar: JakkrinTaepaisitpong,
          content:
            "Jakkrin Taepaisitpong | Executive Vice President, Social & Sustainable Development Office - Betagro Public Company Limited",
        },
      ],
      moderatedBy: [
        {
          avartar: DrSirikulLaukaikul,
          content: "Dr. Sirikul Laukaikul | Country Director - SB Thailand",
        },
      ],
    },
    {
      day: 1,
      label: "SB JAPAN: LOCAL ACTIVITY",
      periodFirst: "",
      periodSecond: "",
      periodThird: "09.35 - 19.45 (Japan, UTC +9:00)",
      specialContent: {
        content: "For more information :",
        link: "https://www.sustainablebrands.jp/event/sb2022/en",
      },
      lecturers: [],
    },
    {
      day: 1,
      label: "SB KOREA: LOCAL ACTIVITY",
      periodFirst: "",
      periodSecond: "",
      periodThird: "15.35 - 17.20(Korea, UTC + 9: 00)",
      specialContent: {
        content: "For more information :",
        link: "https://sustainablebrands.kr/wp-content/uploads/2022/01/KoreaSession_Eng_R0.pdf",
      },
      lecturers: [],
    },

    {
      day: 2,
      label: "Welcome & Recap",
      periodFirst: "08.45 - 09.00 (Thailand, UTC +7:00)",
      periodSecond: "09.45 - 10.00 (Malaysia, UTC +8:00)",
      periodThird: "10.45 - 11.00 (Japan/Korea, UTC +9:00)",

      lecturers: [
        {
          avartar: SirikhanateSakulyong,
          content: "Sirikhanate Sakulyong | SB Thailand",
        },
      ],
    },

    {
      day: 2,
      label: "The Importance of System Shift",
      periodFirst: "09.00 - 09.30 (Thailand, UTC +7:00)",
      periodSecond: "10.00 - 10.30 (Malaysia, UTC +8:00)",
      periodThird: "11.00 - 11.30 (Japan/Korea, UTC +9:00)",

      lecturers: [
        {
          avartar: MarcBuckley,
          content:
            "Marc Buckley | Systems Expert & Ecological Economist - UN, WEF, Inside Ideas, & ALOHAS Regenerative Foundation",
        },
      ],
    },

    {
      day: 2,
      label: "Why We Need “Brands For Good”",
      periodFirst: "09.30 - 10.00 (Thailand, UTC +7:00)",
      periodSecond: "10.30 - 11.00 (Malaysia, UTC +8:00)",
      periodThird: "11.30 - 12.00 (Japan/Korea, UTC +9:00)",

      lecturers: [
        {
          avartar: DarrenBeck,
          content:
            "Darren Beck | Vice President, Membership & International - SB Worldwide",
        },
      ],
    },

    {
      day: 2,
      label: "Integrating Purpose into Brand Communication",
      periodFirst: "10.00 - 10.30 (Thailand, UTC +7:00)",
      periodSecond: "11.00 - 11.30 (Malaysia, UTC +8:00)",
      periodThird: "12.00 - 12.30 (Japan/Korea, UTC +9:00)",

      lecturers: [
        {
          avartar: ThomasKloster,
          content:
            "Thomas Kolster | Speaker, Author, Marketing Activist and Purpose Pioneer - Goodvertising",
        },
      ],
    },

    {
      day: 2,
      label: "Coffee Break",
      periodFirst: "10.30 - 11.00 (Thailand, UTC +7:00)",
      periodSecond: "11.30 - 12.00 (Malaysia, UTC +8:00)",
      periodThird: "12.30 - 13.00 (Japan/Korea, UTC +9:00)",
      lecturers: [],
    },

    {
      day: 2,
      label: "Being Regenerative: Changing Our Mind, Heart, and Senses",
      periodFirst: "11.00 - 11.30 (Thailand, UTC +7:00)",
      periodSecond: "12.00 - 12.30 (Malaysia, UTC +8:00)",
      periodThird: "13.00 - 13.30 (Japan/Korea, UTC +9:00)",

      lecturers: [
        {
          avartar: JennyAndersson,
          content: "Jenny Andersson | Founder - Really Regenerative CIC",
        },
      ],
    },

    {
      day: 2,
      label: "New Role of CMO & New Consumer Behaviors A PANEL DISCUSSION",
      periodFirst: "11.30 - 12.30 (Thailand, UTC +7:00)",
      periodSecond: "12.30 - 13.30 (Malaysia, UTC +8:00)",
      periodThird: "13.30 - 14.30 (Japan/Korea, UTC +9:00)",
      lecturers: [
        {
          avartar: NongchanokStananonth,
          content:
            "Nongchanok Stananonth | General Manager - The Coffee Club Thailand",
        },
        {
          avartar: KyungKonKo,
          content:
            "Kyung-Kon Ko | President & CEO - Daejeon Tourism Organization (DJTO)",
        },
        {
          avartar: AkiraMitsumasu,
          content:
            "Akira Mitsumasu | Vice President, Global CX & Marketing, CX, Data Analytics & Marketing - Japan Airlines",
        },
        {
          avartar: MohamedAdamWeeAbdullah,
          content:
            "Mohamed Adam Wee Abdullah | CMO - Manulife Insurance Berhad",
        },
      ],
      moderatedBy: [
        {
          avartar: AndyWilson,
          content: "Andy Wilson | Senior Partner - Ogilvy",
        },
      ],
    },
    {
      day: 2,
      label: "EAT MORE PLANTS LUNCH: LOCAL ACTIVITY",
      periodFirst: "12.30 - 13.30 (Thailand, UTC +7:00)",
      periodSecond: "",
      periodThird: "",
      lecturers: [],
    },

    {
      day: 2,
      label:
        "The Nine Sustainable Behaviors Toward Sustainable Future; Asia Pacific Study",
      periodFirst: "13.30 - 14.15 (Thailand, UTC +7:00)",
      periodSecond: "14.30 - 15.15 (Malaysia, UTC +8:00)",
      periodThird: "15.30 - 16.15 (Japan/Korea, UTC +9:00)",

      lecturers: [
        {
          avartar: DrDangjaithawinAnantachai,
          content:
            "Dr. Dangjaithawin Anantachai | Managing Director & COO - INTAGE Thailand, SB Thailand",
        },
      ],
    },

    {
      day: 2,
      label: "SB Asia Pacific Closing Remarks",
      periodFirst: "14.15- 14.30 (Thailand, UTC +7:00)",
      periodSecond: "15.15- 15.30 (Malaysia, UTC +8:00)",
      periodThird: "16.15 - 16.30 (Japan/Korea, UTC +9:00)",
      lecturers: [
        {
          avartar: DrSirikulLaukaikul,
          content: "Dr. Sirikul Laukaikul | Country Director - SB Thailand",
        },
        {
          avartar: YukiMatsumoto,
          content:
            "Yuki Matsumoto | International Council of SB Advisory Board Members - SB Japan",
        },
        {
          avartar: MinGuJun,
          content: "MinGu Jun | Country Director - SB Korea",
        },
        {
          avartar: GeraldMiranda,
          content: "Gerald Miranda | Country Director - SB Malaysia",
        },
      ],
    },

    {
      day: 2,
      label: "Brands For Good Workshop - Local Workshop",
      periodFirst: "14.30 - 17.30 (Thailand, UTC +7:00)",
      periodSecond: "15.15- 15.30 (Malaysia, UTC +8:00)",
      periodThird: "16.15 - 16.30 (Japan/Korea, UTC +9:00)",
      extraContent: {
        content: "Thailand : The Sustainable Consumer Persona Workshop",
        content1: "Objective : To Develop Persona of Thai Sustainable Consumer",
        content2: "Participant : 40 by Invitation",
      },
      lecturers: [
        {
          avartar: DrSirikulLaukaikul,
          content: "Dr. Sirikul Laukaikul | Country Director - SB Thailand",
        },
        {
          avartar: KanitaTungwarapojwitan,
          content: "Kanita Tungwarapojwitan | SB Thailand",
        },
        {
          avartar: DrDangjaithawinAnantachai,
          content:
            "Dr. Dangjaithawin Anantachai | Managing Director & COO - INTAGE Thailand",
        },
      ],
    },
    {
      day: 2,
      label: "SB JAPAN: LOCAL ACTIVITY",
      periodFirst: "",
      periodSecond: "",
      periodThird: "09.45 - 18.30 (Japan, UTC +9:00)",
      specialContent: {
        content: "For more information :",
        link: "https://www.sustainablebrands.jp/event/sb2022/en",
      },
      lecturers: [],
    },
    {
      day: 2,
      label: "SB KOREA: LOCAL ACTIVITY",
      periodFirst: "",
      periodSecond: "",
      periodThird: "16.30 - 18.30(Korea, UTC + 9: 00)",
      specialContent: {
        content: "For more information :",
        link: "https://sustainablebrands.kr/wp-content/uploads/2022/01/KoreaSession_Eng_R0.pdf",
      },
      lecturers: [],
    },
  ];

  let result = [] as any;

  if (day === 1) {
    result = data.filter((item: any) => item.day === 1);
  }
  if (day === 2) {
    result = data.filter((item: any) => item.day === 2);
  }
  if (day === "all") {
    result = data;
  }

  if (filterLabel) {
    result = result.filter((item: any) => item.label.includes(filterLabel));
  }

  return result;
};
